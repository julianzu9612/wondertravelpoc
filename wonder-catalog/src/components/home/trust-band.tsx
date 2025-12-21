import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

const partners = [
  "ProColombia",
  "TourCert",
  "Acotur",
  "Destino de Paz",
];

type Props = {
  locale: Locale;
};

export async function TrustBand({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "home.trustBand" });

  return (
    <section className="rounded-3xl border border-border/70 bg-gradient-to-r from-orange-50 via-white to-orange-100 p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
            {t("eyebrow")}
          </p>
          <h3 className="text-xl font-semibold text-foreground">
            {t("title")}
          </h3>
          <p className="text-sm text-foreground/70">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-foreground/70">
          {partners.map((p) => (
            <span
              key={p}
              className="rounded-full border border-border/70 bg-white px-3 py-1 shadow-sm"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
