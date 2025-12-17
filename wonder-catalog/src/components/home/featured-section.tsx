import { getFeaturedTrips } from "@/data/trips";
import { TripCard } from "@/components/trips/trip-card";

export function FeaturedSection() {
  const featured = getFeaturedTrips();

  return (
    <section id="featured" className="space-y-4">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
          Destacados
        </p>
        <h2 className="text-2xl font-semibold text-foreground">
          Aventuras curadas por Wonder
        </h2>
        <p className="max-w-2xl text-sm text-foreground/70">
          Experiencias con alta demanda, logística probada y feedback sobresaliente.
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
