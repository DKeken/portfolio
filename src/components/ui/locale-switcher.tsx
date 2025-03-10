"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Globe, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Locale, locales } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LocaleSwitcherProps {
  buttonClassName?: string;
  dropdownClassName?: string;
}

export function LocaleSwitcher({
  buttonClassName,
  dropdownClassName,
}: LocaleSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();

  const handleLocaleChange = React.useCallback(
    (newLocale: Locale) => {
      startTransition(async () => {
        await setUserLocale(newLocale);
        router.refresh();
      });
    },
    [router]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          disabled={isPending}
          className={cn("w-[40px] h-[40px]", buttonClassName)}
          aria-label="Select language"
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Globe className="h-4 w-4" strokeWidth={1.5} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={cn("w-[120px]", dropdownClassName)}
      >
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            className={cn(
              "flex items-center justify-between",
              locale === loc && "bg-muted"
            )}
            onClick={() => handleLocaleChange(loc)}
            disabled={isPending || locale === loc}
          >
            <span className="uppercase">{loc}</span>
            {locale === loc && (
              <div className="h-2 w-2 bg-primary rounded-full" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
