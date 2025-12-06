import type { Trip } from "@/data/types";
import { TripCard } from "@/components/trips/trip-card";

type Props = {
  related: Trip[];
};

export function RelatedTrips({ related }: Props) {
  if (related.length === 0) return null;

  return (
    <section className="space-y-3">
      <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
        También te puede gustar
      </p>
      <h3 className="text-xl font-semibold text-foreground">
        Viajes relacionados
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </section>
  );
}
