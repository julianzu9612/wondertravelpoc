import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getRelatedTrips, getTripBySlug, getTripSlugs } from "@/data/trips";
import type { LocalizedTrip } from "@/data/types";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { TripGallery } from "@/components/trips/gallery";
import { RelatedTrips } from "@/components/trips/related-trips";
import { absoluteUrl } from "@/lib/urls";
import { siteConfig } from "@/config/site";
import { routing, type Locale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getTripSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const trip = getTripBySlug(locale, slug);
  if (!trip) return {};
  const ogImage = trip.images?.[0]
    ? absoluteUrl(trip.images[0])
    : absoluteUrl(siteConfig.ogImage);
  const pathname = getPathname({
    locale,
    href: { pathname: "/trips/[slug]", params: { slug: trip.slug } },
  });

  return {
    title: `${trip.title} | Wonder Travel`,
    description: trip.shortDescription,
    openGraph: {
      title: `${trip.title} | Wonder Travel`,
      description: trip.shortDescription,
      url: absoluteUrl(pathname),
      images: [ogImage],
    },
  };
}

async function TripFacts({
  trip,
  locale,
}: {
  trip: LocalizedTrip;
  locale: Locale;
}) {
  const t = await getTranslations({
    locale,
    namespace: "trips.detail.facts",
  });
  const currency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  return (
    <div className="grid gap-3 rounded-2xl border border-border/70 bg-white p-4 shadow-sm sm:grid-cols-3">
      <Fact label={t("duration")} value={trip.duration} />
      <Fact label={t("difficulty")} value={trip.difficulty} />
      <Fact label={t("from")} value={currency.format(trip.price)} />
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-foreground">
      <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
        {label}
      </p>
      <p>{value}</p>
    </div>
  );
}

async function Itinerary({
  trip,
  locale,
}: {
  trip: LocalizedTrip;
  locale: Locale;
}) {
  const t = await getTranslations({
    locale,
    namespace: "trips.detail",
  });

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">
        {t("itineraryTitle")}
      </h3>
      <div className="space-y-3">
        {trip.itinerary.map((day) => (
          <div
            key={day.day}
            className="rounded-2xl border border-border/70 bg-secondary/60 p-4"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
              {t("itineraryDay", { day: day.day })}
            </p>
            <p className="text-base font-semibold text-foreground">{day.title}</p>
            <p className="text-sm text-foreground/70">{day.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function TripDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const trip = getTripBySlug(locale, slug);
  if (!trip) return notFound();

  const cover = trip.images?.[0] ?? "/brand/wonder.png";
  const t = await getTranslations({
    locale,
    namespace: "trips.detail",
  });
  const tWhatsApp = await getTranslations({
    locale,
    namespace: "whatsapp",
  });
  const whatsapp = getWhatsAppHref({
    contactType: "signature",
    message: tWhatsApp("interestTrip", { trip: trip.title }),
  });
  const related = getRelatedTrips(locale, trip.slug, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:max-w-7xl">
      <div className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
            {t("eyebrow")}
          </p>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
            {trip.title}
          </h1>
          <p className="text-base text-foreground/70">{trip.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {trip.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground"
              >
                {cat}
              </span>
            ))}
          </div>
          <TripFacts trip={trip} locale={locale} />
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg"
            >
              {t("ctaWhatsapp")}
            </a>
            <a
              href="#itinerario"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-foreground"
            >
              {t("ctaItinerary")}
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-orange-50 via-white to-orange-100 shadow-lg">
          <Image
            src={cover}
            alt={trip.title}
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
            {trip.duration}
          </span>
        </div>
      </div>

      <div id="itinerario" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Itinerary trip={trip} locale={locale} />
        <TripGallery trip={trip} />
      </div>

      <div className="mt-12">
        <RelatedTrips related={related} />
      </div>

      <div className="fixed inset-x-0 bottom-4 z-30 px-4 sm:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition active:translate-y-[1px]"
        >
          {t("stickyWhatsapp")}
        </a>
      </div>
    </div>
  );
}
