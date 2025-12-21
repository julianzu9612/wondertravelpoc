import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

const stars = Array.from({ length: 5 });

type Props = {
  locale: Locale;
};

export async function TrustpilotBadge({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "home.trustpilot" });

  return (
    <a
      href="https://ca.trustpilot.com/review/wondertravel.co"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between sm:gap-4"
    >
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
          {t("label")}
        </p>
        <p className="text-2xl font-bold text-emerald-700">{t("score")}</p>
        <p className="text-xs text-foreground/70">{t("reviews")}</p>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
          {t("cta")}
          <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
      <div
        className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-2 text-lg text-emerald-600 shadow-inner"
        aria-hidden="true"
      >
        {stars.map((_, idx) => (
          <span key={idx}>★</span>
        ))}
      </div>
    </a>
  );
}
