import Image from "next/image";

type Service = {
  image: string;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    image: "/b2b/corporate/team-collaboration.jpg",
    title: "Team Building",
    description:
      "Actividades diseñadas para fortalecer la cohesión del equipo, mejorar la comunicación y crear lazos duraderos.",
    features: [
      "Dinámicas de integración",
      "Retos colaborativos",
      "Workshops de liderazgo",
    ],
  },
  {
    image: "/b2b/corporate/adventure-activities.jpg",
    title: "Viajes de Incentivo",
    description:
      "Recompensa a tu equipo con experiencias memorables que celebran sus logros y motivan nuevas metas.",
    features: [
      "Destinos exclusivos",
      "Experiencias premium",
      "Reconocimiento personalizado",
    ],
  },
  {
    image: "/b2b/corporate/transportation.jpg",
    title: "Logística Integral",
    description:
      "Nos encargamos de todos los detalles: transporte, hospedaje, alimentación y actividades.",
    features: [
      "Coordinación punto a punto",
      "Flota de vehículos propia",
      "Soporte 24/7",
    ],
  },
];

type Props = {
  title?: string;
  description?: string;
};

export function ServicesCards({
  title = "Nuestros Servicios Corporativos",
  description = "Soluciones integrales para cada necesidad de tu empresa.",
}: Props) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
