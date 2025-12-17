import Image from "next/image";
import { MapPin } from "lucide-react";

type Destination = {
  city: string;
  description: string;
};

const destinations: Destination[] = [
  { city: "Bogotá", description: "Capital cultural y empresarial" },
  { city: "Medellín", description: "Innovación y transformación" },
  { city: "Cartagena", description: "Historia y mar Caribe" },
  { city: "Santa Marta", description: "Sierra Nevada y playas" },
  { city: "San Andrés", description: "Mar de los siete colores" },
  { city: "Eje Cafetero", description: "Paisaje cultural cafetero" },
  { city: "Cali", description: "Salsa y alegría" },
  { city: "Villa de Leyva", description: "Pueblo colonial mágico" },
];

type Props = {
  title?: string;
  description?: string;
};

export function DestinationsMap({
  title = "Destinos en toda Colombia",
  description = "Operamos en los destinos más icónicos del país, con conocimiento local y red de aliados en cada región.",
}: Props) {
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

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Mapa */}
          <div className="relative aspect-square rounded-3xl border border-border/70 bg-white p-4 shadow-sm">
            <Image
              src="/b2b/corporate/colombia-destinations-map.png"
              alt="Mapa de destinos en Colombia"
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Lista de destinos */}
          <div className="grid grid-cols-2 gap-4">
            {destinations.map((dest) => (
              <div
                key={dest.city}
                className="flex items-start gap-3 rounded-xl border border-border/70 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="rounded-lg bg-primary/10 p-2">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{dest.city}</h3>
                  <p className="text-xs text-muted-foreground">
                    {dest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
