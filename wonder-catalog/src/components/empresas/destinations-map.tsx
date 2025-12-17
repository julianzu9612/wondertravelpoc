"use client";

import { useMemo, useState } from "react";
import { ColombiaMap } from "@/components/empresas/colombia-map";

type Destination = {
  id: string;
  city: string;
  description: string;
  lat: number;
  lon: number;
};

const destinations: Destination[] = [
  {
    id: "cartagena",
    city: "Cartagena",
    description: "Historia, Caribe y experiencias premium.",
    lat: 10.391,
    lon: -75.4794,
  },
  {
    id: "santa-marta",
    city: "Santa Marta",
    description: "Sierra Nevada, Tayrona y naturaleza.",
    lat: 11.2408,
    lon: -74.199,
  },
  {
    id: "san-andres",
    city: "San Andrés",
    description: "Mar de los siete colores.",
    lat: 12.5847,
    lon: -81.7006,
  },
  {
    id: "medellin",
    city: "Medellín",
    description: "Innovación, cultura y transformación.",
    lat: 6.2442,
    lon: -75.5812,
  },
  {
    id: "eje-cafetero",
    city: "Eje Cafetero",
    description: "Paisaje cultural cafetero.",
    lat: 4.5339,
    lon: -75.6811,
  },
  {
    id: "cali",
    city: "Cali",
    description: "Salsa, alegría y buen clima.",
    lat: 3.4516,
    lon: -76.532,
  },
  {
    id: "bogota",
    city: "Bogotá",
    description: "Capital cultural y empresarial.",
    lat: 4.711,
    lon: -74.0721,
  },
  {
    id: "villa-de-leyva",
    city: "Villa de Leyva",
    description: "Pueblo colonial mágico.",
    lat: 5.6333,
    lon: -73.5231,
  },
];

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
  const hovered = useMemo(
    () => destinations.find((destination) => destination.id === hoveredId) ?? null,
    [hoveredId]
  );

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-white shadow-sm">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] p-4 sm:p-6">
              <ColombiaMap
                markers={destinations.map((destination) => ({
                  id: destination.id,
                  label: destination.city,
                  description: destination.description,
                  lat: destination.lat,
                  lon: destination.lon,
                }))}
                selectedId={selectedId}
                onSelect={setSelectedId}
                onHover={setHoveredId}
              />

              <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-border/60 bg-background/90 px-4 py-3 text-left shadow-sm backdrop-blur sm:left-6 sm:top-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {hovered ? "Explorar" : "Seleccionado"}
                </p>
                <p className="mt-1 font-display text-lg font-semibold leading-tight">
                  {(hovered ?? selected)?.city ?? "—"}
                </p>
                <p className="mt-0.5 max-w-[18rem] text-xs text-muted-foreground">
                  {(hovered ?? selected)?.description ?? ""}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-border/70 bg-white p-5 text-center shadow-sm sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Ciudad seleccionada
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold">
                {selected?.city ?? "—"}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {selected?.description ?? ""}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
              {destinations.map((destination) => (
                <button
                  key={destination.id}
                  type="button"
                  onClick={() => setSelectedId(destination.id)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                    destination.id === selectedId
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/70 bg-white text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {destination.city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
