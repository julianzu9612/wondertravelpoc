"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import type { Locale } from "@/i18n/routing";

const LOCALE_OPTIONS: Array<{ locale: Locale; shortLabel: string }> = [
  { locale: "en", shortLabel: "EN" },
  { locale: "es", shortLabel: "ES" },
  { locale: "fr", shortLabel: "FR" },
];

export function LocaleSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale() as Locale;
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();
  const localePattern = new RegExp(
    `^/(${LOCALE_OPTIONS.map((option) => option.locale).join("|")})(?=/|$)`
  );
  const basePath = pathname.replace(localePattern, "") || "/";
  const query = searchParams?.toString();
  const hrefForLocale = (targetLocale: Locale) => {
    const path = basePath === "/" ? `/${targetLocale}` : `/${targetLocale}${basePath}`;
    return query ? `${path}?${query}` : path;
  };

  return (
    <div
      className="inline-flex items-center rounded-full border border-border/70 bg-background/80 p-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/70 shadow-sm"
      aria-label={t("label")}
    >
      {LOCALE_OPTIONS.map((option) => {
        const isActive = option.locale === locale;
        return (
          <Link
            key={option.locale}
            href={hrefForLocale(option.locale)}
            className={`rounded-full px-2.5 py-1 transition ${
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-foreground/70 hover:text-foreground"
            }`}
            aria-current={isActive ? "true" : undefined}
            title={t(option.locale)}
          >
            {option.shortLabel}
          </Link>
        );
      })}
    </div>
  );
}
