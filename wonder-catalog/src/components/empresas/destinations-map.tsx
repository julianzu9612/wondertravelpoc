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

        <div className="rounded-3xl border border-border/70 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Destinos
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Hover para preview; click para fijar.
              </p>
            </div>
            <p className="text-xs font-semibold text-foreground/60">
              {destinations.length} destinos
            </p>
          </div>

          <div
            className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:overflow-visible"
            onMouseLeave={() => setHoveredId(null)}
          >
            {destinations.map((destination) => {
              const isSelected = destination.id === selectedId;
              const isActive = destination.id === activeId;

              return (
                <button
                  key={destination.id}
                  type="button"
                  onClick={() => setSelectedId(destination.id)}
                  onMouseEnter={() => setHoveredId(destination.id)}
                  onFocus={() => setHoveredId(destination.id)}
                  onBlur={() => setHoveredId(null)}
                  className={`group inline-flex flex-none items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                    isSelected
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : isActive
                        ? "border-primary/30 bg-muted/40 text-foreground"
                        : "border-border/70 bg-white text-foreground/80"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isSelected ? "bg-primary" : "bg-muted-foreground/40"
                    }`}
                    aria-hidden="true"
                  />
                  {destination.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-background via-background to-primary/5 shadow-sm lg:col-span-5 lg:h-[720px]">
            <div className="relative aspect-[16/10] p-4 sm:aspect-[16/9] sm:p-6 lg:aspect-auto lg:h-full">
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

          <aside className="lg:col-span-7 lg:h-[720px]">
            <div className="h-full min-h-0">
              {selected ? <DestinationDetailPanel destination={selected} /> : null}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
