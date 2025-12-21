import { getTranslations } from "next-intl/server";
import { getFeaturedTrips } from "@/data/trips";
import type { Locale } from "@/i18n/routing";
import { TripCard } from "@/components/trips/trip-card";

type Props = {
  locale: Locale;
};

export async function FeaturedSection({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "home.featured" });
  const featured = getFeaturedTrips(locale);

  return (
    <section id="featured" className="space-y-4">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
          {t("eyebrow")}
        </p>
        <h2 className="text-2xl font-semibold text-foreground">
          {t("title")}
        </h2>
        <p className="max-w-2xl text-sm text-foreground/70">
          {t("description")}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </section>
  );
}
