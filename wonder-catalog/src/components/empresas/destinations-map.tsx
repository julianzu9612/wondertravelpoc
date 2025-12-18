"use client";

import { useMemo, useState } from "react";
import { ColombiaMap } from "@/components/empresas/colombia-map";
import { CORPORATE_DESTINATIONS } from "@/data/empresas/destinations";

const destinations = CORPORATE_DESTINATIONS;

type Props = {
  title?: string;
  description?: string;
};

export function DestinationsMap({
  title = "Destinos en toda Colombia",
  description = "Operamos en los destinos más icónicos del país, con conocimiento local y red de aliados en cada región.",
}: Props) {
  const [selectedId, setSelectedId] = useState<string>(destinations[0]?.id ?? "");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const selected = useMemo(
    () => destinations.find((destination) => destination.id === selectedId) ?? null,
    [selectedId]
  );

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-background via-background to-primary/5 shadow-sm">
            <div className="relative aspect-[16/10] p-4 sm:aspect-[16/9] sm:p-6 lg:aspect-auto lg:min-h-[520px]">
              <ColombiaMap
                markers={destinations.map((destination) => ({
                  id: destination.id,
                  label: destination.city,
                  description: destination.description,
                  lat: destination.lat,
                  lon: destination.lon,
                }))}
                selectedId={selectedId}
                hoveredId={hoveredId}
                textureHref="/b2b/corporate/colombia-map-ai.webp"
                showRoutes={false}
                onSelect={setSelectedId}
                onHover={setHoveredId}
              />
            </div>
          </div>

          <aside className="rounded-3xl border border-border/70 bg-white p-4 shadow-sm sm:p-5">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Destinos
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold">
                {selected?.city ?? "Explora Colombia"}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Pasa el mouse por el mapa o la lista para ver detalles.
              </p>
            </div>

            <div className="grid gap-3">
              {destinations.map((destination) => {
                const isSelected = destination.id === selectedId;

                return (
                  <button
                    key={destination.id}
                    type="button"
                    onClick={() => setSelectedId(destination.id)}
                    onMouseEnter={() => setHoveredId(destination.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setHoveredId(destination.id)}
                    onBlur={() => setHoveredId(null)}
                    className={`rounded-2xl border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                      isSelected
                        ? "border-primary/40 bg-primary/5"
                        : "border-border/70 bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{destination.city}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {destination.description}
                        </p>
                      </div>

                      <span
                        className={`mt-0.5 inline-flex h-2.5 w-2.5 rounded-full ${
                          isSelected ? "bg-primary" : "bg-muted-foreground/40"
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    {isSelected && destination.highlights?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {destination.highlights.slice(0, 3).map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-full border border-border/70 bg-white px-2.5 py-1 text-[11px] font-semibold text-foreground/80"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
