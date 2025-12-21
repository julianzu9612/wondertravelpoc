import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getTrips } from "@/data/trips";
import { TripCard } from "@/components/trips/trip-card";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/urls";
import { getPathname } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "trips.meta" });
  const title = t("title");
  const description = t("description");
  const pathname = getPathname({ locale, href: "/trips" });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: absoluteUrl(pathname),
      images: [siteConfig.ogImage],
    },
  };
}

export default async function TripsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "trips.heading" });
  const trips = getTrips(locale as Locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:max-w-7xl">
      <div className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
          {t("eyebrow")}
        </p>
        <h1 className="text-3xl font-semibold text-foreground">
          {t("title")}
        </h1>
        <p className="text-sm text-foreground/70">
          {t("description")}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
