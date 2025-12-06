import { notFound } from "next/navigation";
import Image from "next/image";
import { getRelatedTrips, getTripBySlug, trips } from "@/data/trips";
import type { Trip } from "@/data/types";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { TripGallery } from "@/components/trips/gallery";
import { RelatedTrips } from "@/components/trips/related-trips";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return trips.map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) return {};
  return {
    title: `${trip.title} | Wonder Travel`,
    description: trip.shortDescription,
  };
}

const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

function TripFacts({ trip }: { trip: Trip }) {
  return (
    <div className="grid gap-3 rounded-2xl border border-border/70 bg-white p-4 shadow-sm sm:grid-cols-3">
      <Fact label="Duración" value={trip.duration} />
      <Fact label="Dificultad" value={trip.difficulty} />
      <Fact label="Desde" value={currency.format(trip.price)} />
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

function Itinerary({ trip }: { trip: Trip }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">Itinerario</h3>
      <div className="space-y-3">
        {trip.itinerary.map((day) => (
          <div
            key={day.day}
            className="rounded-2xl border border-border/70 bg-secondary/60 p-4"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
              Día {day.day}
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
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) return notFound();

  const cover = trip.images?.[0] ?? "/brand/wonder.png";
  const whatsapp = getWhatsAppHref(trip.title);
  const related = getRelatedTrips(trip.slug, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:max-w-7xl">
      <div className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
            Viaje
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
          <TripFacts trip={trip} />
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="#itinerario"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-foreground"
            >
              Ver itinerario
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
        <Itinerary trip={trip} />
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
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}
