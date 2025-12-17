import Image from "next/image";
import type { Trip } from "@/data/types";

type Props = {
  trip: Trip;
};

export function TripGallery({ trip }: Props) {
  const images = trip.images.length > 0 ? trip.images : ["/brand/wonder.png"];
  const [hero, ...rest] = images;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">Galería</h3>
      <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border/70 bg-muted">
          <Image
            src={hero}
            alt={trip.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {rest.slice(0, 4).map((img) => (
            <div
              key={img}
              className="relative aspect-square overflow-hidden rounded-2xl border border-border/70 bg-muted"
            >
              <Image
                src={img}
                alt={trip.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          ))}
          {rest.length === 0 && (
            <div className="col-span-2 rounded-2xl border border-dashed border-border/70 bg-secondary/60 p-4 text-sm text-foreground/70">
              Añade más imágenes en <code>/public/images/trips</code> y actualiza
              el array en el JSON.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
