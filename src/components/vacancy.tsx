import { getTranslations } from "next-intl/server";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Motion } from "./ui/motion";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { InfoIcon, MapPin, Clock, Briefcase, DollarSign } from "lucide-react";
import { PERSONAL_INFO } from "@/constants/personal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

// Types
type Currency = "USD" | "EUR" | "RUB" | "GBP";

interface SalaryData {
  monthly: number;
  hourly: number;
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
  monthly: PERSONAL_INFO.SALARY.MONTHLY_RUB,
  hourly: PERSONAL_INFO.SALARY.HOURLY_RUB,
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
        next: { revalidate: 3600 },
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
      <div className="grid gap-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-2">
            <Badge
              variant="outline"
              className="px-3 py-1 font-medium border-primary/20 bg-primary/5 text-primary"
            >
              {t("salary.monthly")}
            </Badge>
          </div>
          <div className="space-y-3">
            {CURRENCIES.map((currency) => (
              <div
                key={currency}
                className="flex justify-between items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
              >
                <CurrencyBadge currency={currency} />
                <span
                  className={`font-bold tabular-nums text-lg ${
                    currency === BASE_CURRENCY
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground transition-colors"
                  }`}
                >
                  {formatCurrency(
                    convertCurrency(SALARY_DATA.monthly, currency),
                    currency
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/40 my-2" />

        <div className="space-y-3">
          <div className="flex items-center justify-between mb-2">
            <Badge
              variant="outline"
              className="px-3 py-1 font-medium border-primary/20 bg-primary/5 text-primary"
            >
              {t("salary.hourly")}
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {CURRENCIES.map((currency) => (
              <div
                key={currency}
                className="flex justify-between items-center p-2 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
              >
                <span className="text-xs font-medium text-muted-foreground">
                  {currency}
                </span>
                <span className="font-semibold text-sm tabular-nums">
                  {formatCurrency(
                    convertCurrency(SALARY_DATA.hourly, currency),
                    currency
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
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

  const birthDate = PERSONAL_INFO.BIRTH_DATE;
  const startDate = PERSONAL_INFO.CAREER_START_DATE;
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
            <Motion
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                {t("title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("subtitle")}
              </p>
            </Motion>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Job Info */}
            <Motion
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <Card className="h-full border border-border/40 shadow-sm bg-background/50 backdrop-blur-sm">
                <CardHeader className="pb-6 border-b border-border/40">
                  <CardTitle className="text-xl font-bold flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    {t(JOB_POSITION.title)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-8">
                  <div className="space-y-4">
                    {candidateInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border/40"
                      >
                        <div className="flex items-center gap-3">
                          <info.icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-muted-foreground">
                            {info.label}
                          </span>
                        </div>
                        <span className="text-sm font-semibold">
                          {info.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
                      {t("employment_types.title")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {JOB_POSITION.employmentTypes.map((type) => (
                        <Badge
                          key={type}
                          variant="secondary"
                          className="px-3 py-1.5 text-sm bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          {t(type)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Motion>

            {/* Salary Info */}
            <Motion
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full border border-border/40 shadow-sm bg-background/50 backdrop-blur-sm">
                <CardHeader className="pb-6 border-b border-border/40">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                        <DollarSign className="h-5 w-5" />
                      </div>
                      {t("salary.title")}
                    </CardTitle>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help opacity-70 hover:opacity-100 transition-opacity" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">{t("salary.tooltip")}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Suspense fallback={<SalaryTableSkeleton />}>
                    <ExchangeRatesData />
                  </Suspense>
                </CardContent>
              </Card>
            </Motion>
          </div>
        </Motion>
      </div>
    </section>
  );
}
