"use client";

import { useMemo, useState } from "react";
import { ColombiaMap } from "@/components/empresas/colombia-map";
import { DestinationDetailPanel } from "@/components/empresas/destination-detail-panel";
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
  const activeId = hoveredId ?? selectedId;
  const selected = useMemo(() => {
    const byId = new Map(destinations.map((destination) => [destination.id, destination]));
    return byId.get(activeId) ?? byId.get(selectedId) ?? null;
  }, [activeId, selectedId]);

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-background via-background to-primary/5 shadow-sm">
            <div className="relative aspect-[16/10] p-4 sm:aspect-[16/9] sm:p-6 lg:aspect-auto lg:h-[640px]">
              <ColombiaMap
                markers={destinations.map((destination) => ({
                  id: destination.id,
                  label: destination.name,
                  description: destination.tagline,
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

          <aside className="lg:sticky lg:top-24 lg:h-[640px]">
            <div className="grid h-full gap-4 lg:grid-rows-[minmax(0,1fr)_240px]">
              <div className="min-h-0">
                {selected ? <DestinationDetailPanel destination={selected} /> : null}
              </div>

              <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-border/70 bg-white p-4 shadow-sm sm:p-5">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Destinos (hover para preview)
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pasa el mouse por el mapa o la lista; haz click para fijar.
                  </p>
                </div>

                <div className="grid min-h-0 flex-1 gap-3 overflow-auto pr-1">
                  {destinations.map((destination) => {
                    const isSelected = destination.id === selectedId;
                    const isActive = destination.id === activeId;

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
                            : isActive
                              ? "border-primary/30 bg-muted/30"
                              : "border-border/70 bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="font-semibold">{destination.name}</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {destination.tagline}
                            </p>
                          </div>

                          <span
                            className={`mt-0.5 inline-flex h-2.5 w-2.5 rounded-full ${
                              isSelected ? "bg-primary" : "bg-muted-foreground/40"
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
