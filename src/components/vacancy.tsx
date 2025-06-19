import { getTranslations } from "next-intl/server";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Motion } from "./ui/motion";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { InfoIcon, MapPin, Clock, Briefcase, DollarSign } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

// Types
type Currency = "USD" | "EUR" | "RUB" | "GBP";

interface SalaryData {
  [key: string]: number;
}

interface ExchangeRates {
  [key: string]: number;
}

// Constants
const JOB_POSITION = {
  title: "job_position",
  employmentTypes: [
    "employment_types.full_time",
    "employment_types.full_day",
    "employment_types.remote",
  ],
} as const;

const SALARY_DATA: SalaryData = {
  monthly: 200000,
  hourly: 2250,
};

const CURRENCIES: Currency[] = ["RUB", "USD", "EUR", "GBP"];
const BASE_CURRENCY: Currency = "RUB";

const FALLBACK_RATES: ExchangeRates = {
  USD: 0.011,
  EUR: 0.01,
  GBP: 0.0085,
  RUB: 1,
};

// Utils
const calculateAge = (birthDate: Date) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const getYearForm = async (age: number) => {
  const t = await getTranslations("vacancy");
  if (age % 10 === 1 && age % 100 !== 11) return t("year_forms.singular");
  if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20))
    return t("year_forms.few");
  return t("year_forms.many");
};

const getExperienceYears = (startDate: Date) => {
  return Math.floor(
    (Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
};

// API
const getExchangeRates = async (): Promise<ExchangeRates> => {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/RUB",
      {
        next: { revalidate: 3600, tags: ["exchange-rates"] },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch exchange rates");

    const data = await response.json();
    return data.rates || FALLBACK_RATES;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return FALLBACK_RATES;
  }
};

// Components
const SalaryTableSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-6 w-32" />
    <div className="space-y-3">
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-4 border rounded-lg"
          >
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
    </div>
  </div>
);

const CurrencyBadge = ({ currency }: { currency: Currency }) => (
  <Badge
    variant={currency === BASE_CURRENCY ? "default" : "outline"}
    className="text-xs font-medium"
  >
    {currency}
  </Badge>
);

const SalaryTable = async ({
  exchangeRates,
}: {
  exchangeRates: ExchangeRates;
}) => {
  const t = await getTranslations("vacancy");

  const convertCurrency = (
    amount: number,
    targetCurrency: Currency
  ): number => {
    if (targetCurrency === BASE_CURRENCY) return amount;
    return (
      amount * (exchangeRates[targetCurrency] || FALLBACK_RATES[targetCurrency])
    );
  };

  const formatCurrency = (amount: number, currency: Currency) => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      currencyDisplay: "symbol",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <DollarSign className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">{t("salary.title")}</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">{t("salary.tooltip")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(SALARY_DATA).map(([type, amount]) => (
          <Card
            key={type}
            className="p-4 border-0 bg-gradient-to-r from-primary/5 to-primary/10"
          >
            <div className="flex justify-between items-center mb-3">
              <Badge variant="secondary" className="text-xs">
                {t(`salary.${type}`)}
              </Badge>
            </div>
            <div className="space-y-2">
              {CURRENCIES.map((currency) => (
                <div
                  key={currency}
                  className="flex justify-between items-center"
                >
                  <CurrencyBadge currency={currency} />
                  <span className="font-medium">
                    {formatCurrency(
                      convertCurrency(amount, currency),
                      currency
                    )}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ExchangeRatesData = async () => {
  const exchangeRates = await getExchangeRates();
  return <SalaryTable exchangeRates={exchangeRates} />;
};

export async function Vacancy() {
  const t = await getTranslations("vacancy");

  const birthDate = new Date(2002, 4, 5);
  const startDate = new Date(2019, 6, 1); // July 1, 2021
  const age = calculateAge(birthDate);
  const experience = getExperienceYears(startDate);
  const yearForm = await getYearForm(age);

  const candidateInfo = [
    {
      icon: MapPin,
      label: t("candidate.location"),
      value: t("candidate.location_value"),
    },
    {
      icon: Clock,
      label: t("candidate.age"),
      value: `${age} ${yearForm}`,
    },
    {
      icon: Briefcase,
      label: t("candidate.experience"),
      value: t("candidate.experience_value", { years: experience }),
    },
  ];

  return (
    <section className="py-20 px-6" id="vacancy">
      <div className="max-w-6xl mx-auto">
        <Motion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Job Info */}
            <div className="space-y-8">
              <Card className="p-6 border-0 shadow-lg">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    {t(JOB_POSITION.title)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="space-y-3">
                    {candidateInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                      >
                        <info.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-muted-foreground">
                          {info.label}:
                        </span>
                        <span className="text-sm font-medium">
                          {info.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-medium mb-3">
                      {t("employment_types.title")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {JOB_POSITION.employmentTypes.map((type) => (
                        <Badge key={type} variant="outline" className="text-xs">
                          {t(type)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Salary Info */}
            <div>
              <Suspense fallback={<SalaryTableSkeleton />}>
                <ExchangeRatesData />
              </Suspense>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
