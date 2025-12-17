"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Destination = {
  city: string;
  description: string;
  top: number;
  left: number;
};

const destinations: Destination[] = [
  { city: "Cartagena", description: "Historia y mar Caribe", top: 22, left: 58 },
  { city: "Santa Marta", description: "Sierra Nevada y playas", top: 20, left: 64 },
  { city: "San Andrés", description: "Mar de los siete colores", top: 26, left: 26 },
  { city: "Medellín", description: "Innovación y transformación", top: 36, left: 50 },
  { city: "Eje Cafetero", description: "Paisaje cultural cafetero", top: 47, left: 50 },
  { city: "Cali", description: "Salsa y alegría", top: 57, left: 47 },
  { city: "Bogotá", description: "Capital cultural y empresarial", top: 49, left: 60 },
  { city: "Villa de Leyva", description: "Pueblo colonial mágico", top: 44, left: 61 },
];

type Props = {
  title?: string;
  description?: string;
};

export function DestinationsMap({
  title = "Destinos en toda Colombia",
  description = "Operamos en los destinos más icónicos del país, con conocimiento local y red de aliados en cada región.",
}: Props) {
  const [selectedCity, setSelectedCity] = useState<string>(destinations[0]?.city ?? "");
  const selected = useMemo(
    () => destinations.find((destination) => destination.city === selectedCity) ?? null,
    [selectedCity]
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
            <div className="relative aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src="/b2b/corporate/colombia-destinations-map.png"
                alt="Mapa de Colombia"
                fill
                priority={false}
                className="object-cover origin-right scale-[1.35]"
              />

              {destinations.map((destination) => {
                const isSelected = destination.city === selectedCity;

                return (
                  <button
                    key={destination.city}
                    type="button"
                    title={destination.city}
                    aria-label={`Seleccionar ${destination.city}`}
                    onClick={() => setSelectedCity(destination.city)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border shadow-sm transition ${
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-white/70 bg-white/90 text-foreground hover:bg-white"
                    }`}
                    style={{ top: `${destination.top}%`, left: `${destination.left}%` }}
                  >
                    <span className="block h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-current opacity-90" />
                  </button>
                );
              })}
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
                  key={destination.city}
                  type="button"
                  onClick={() => setSelectedCity(destination.city)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                    destination.city === selectedCity
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
