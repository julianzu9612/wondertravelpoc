import type { Metadata } from "next";
import { trips } from "@/data/trips";
import { TripCard } from "@/components/trips/trip-card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Viajes | Wonder Travel",
  description:
    "Explora todas las experiencias del catálogo Wonder Travel. Aventuras curadas, listas para inspirarte.",
  openGraph: {
    title: "Viajes | Wonder Travel",
    description:
      "Explora todas las experiencias del catálogo Wonder Travel. Aventuras curadas, listas para inspirarte.",
    url: `${siteConfig.url}/trips`,
    images: [siteConfig.ogImage],
  },
};

export default function TripsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:max-w-7xl">
      <div className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
          Catálogo completo
        </p>
        <h1 className="text-3xl font-semibold text-foreground">
          Todas las experiencias
        </h1>
        <p className="text-sm text-foreground/70">
          Filtra por nombre o explora las tarjetas. Próximamente: filtros más
          avanzados.
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
