import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

type Props = {
  locale: Locale;
};

export async function Testimonials({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "home.testimonials" });
  const testimonials = t.raw("items") as Array<{
    name: string;
    country: string;
    quote: string;
  }>;

  return (
    <section className="rounded-3xl border border-border/70 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
            {t("eyebrow")}
          </p>
          <h3 className="text-2xl font-semibold text-foreground">
            {t("title")}
          </h3>
          <p className="text-sm text-foreground/70">
            {t("description")}
          </p>
        </div>
        <span className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-foreground">
          {t("badge")}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex h-full flex-col gap-3 rounded-2xl border border-border/70 bg-secondary/60 p-4 text-sm text-foreground/80 transition transform-gpu hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/60">
              <span>{t.country}</span>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <p className="text-base font-semibold text-foreground">{t.name}</p>
            <p className="text-sm text-foreground/70">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
