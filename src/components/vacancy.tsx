import { getTranslations } from "next-intl/server";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Motion } from "./ui/motion";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

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
  <div className="w-full">
    <div className="flex items-center gap-2 mb-3">
      <Skeleton className="h-5 w-24 rounded-full" />
    </div>
    <div className="border rounded-md">
      <div className="grid grid-cols-5 p-3 border-b bg-muted/30">
        <Skeleton className="h-4 w-16" />
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className="h-4 w-12 justify-self-end" />
          ))}
      </div>
      {Array(2)
        .fill(null)
        .map((_, row) => (
          <div
            key={row}
            className="grid grid-cols-5 p-3 border-b last:border-0"
          >
            <Skeleton className="h-4 w-20" />
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <Skeleton key={i} className="h-4 w-16 justify-self-end" />
              ))}
          </div>
        ))}
    </div>
  </div>
);

const CurrencyBadge = ({ currency }: { currency: Currency }) => (
  <Badge
    variant={currency === BASE_CURRENCY ? "default" : "outline"}
    className="text-xs font-normal"
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

  const SalaryRow = ({
    type,
    amount,
  }: {
    type: "monthly" | "hourly";
    amount: number;
  }) => (
    <TableRow>
      <TableCell className="font-medium">
        <Badge variant="secondary" className="text-xs whitespace-nowrap">
          {t(`salary.${type}`)}
        </Badge>
      </TableCell>
      {CURRENCIES.map((currency) => (
        <TableCell
          key={currency}
          className="text-right font-medium whitespace-nowrap"
        >
          {formatCurrency(convertCurrency(amount, currency), currency)}
        </TableCell>
      ))}
    </TableRow>
  );

  return (
    <div className="w-full">
      <TooltipProvider>
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            {t("salary.desired_salary")}
          </h3>
          <Tooltip>
            <TooltipTrigger asChild>
              <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">
                {t("currency.base_currency", {
                  currency: t(`currency.${BASE_CURRENCY.toLowerCase()}`),
                })}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      <ScrollArea className="w-[400px] sm:w-full whitespace-nowrap rounded-md border">
        <Table className="min-w-[400px] w-full">
          <TableHeader className="bg-muted/30">
            <TableRow>
              <TableHead className="w-[120px] whitespace-nowrap" />
              {CURRENCIES.map((currency) => (
                <TableHead key={currency} className="text-right">
                  <CurrencyBadge currency={currency} />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <SalaryRow type="monthly" amount={SALARY_DATA.monthly} />
            <SalaryRow type="hourly" amount={SALARY_DATA.hourly} />
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

const ExchangeRatesData = async () => {
  const exchangeRates = await getExchangeRates();
  return <SalaryTable exchangeRates={exchangeRates} />;
};

export async function Vacancy() {
  const t = await getTranslations("vacancy");
  const birthDate = new Date("2002-04-05");
  const startWorkDate = new Date("2020-01-01");

  const age = calculateAge(birthDate);
  const experienceYears = getExperienceYears(startWorkDate);

  return (
    <section className="px-6 py-12 md:py-16 w-full" id="vacancy">
      <div className="w-full max-w-3xl mx-auto">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <Card className="w-full shadow-lg overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <CardTitle className="font-bold">{t("title")}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {t("name")} • {age} {await getYearForm(age)}
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-primary border-primary"
                  >
                    {t(JOB_POSITION.title)}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {t("experience")}: {experienceYears}{" "}
                  {await getYearForm(experienceYears)}
                </div>
                <div className="flex flex-wrap gap-2">
                  {JOB_POSITION.employmentTypes.map((type, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {t(type)}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <Suspense fallback={<SalaryTableSkeleton />}>
                <ExchangeRatesData />
              </Suspense>
            </CardContent>
          </Card>
        </Motion>
      </div>
    </section>
  );
}
