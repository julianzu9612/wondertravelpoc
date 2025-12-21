import Image from "next/image";
import { useTranslations } from "next-intl";

type Service = {
  image: string;
  title: string;
  description: string;
  features: string[];
};

const SERVICE_CONTENT = [
  {
    id: "teamBuilding",
    image: "/b2b/corporate/team-collaboration.jpg",
  },
  {
    id: "incentives",
    image: "/b2b/corporate/adventure-activities.jpg",
  },
  {
    id: "logistics",
    image: "/b2b/corporate/transportation.jpg",
  },
] as const;

type Props = {
  title?: string;
  description?: string;
};

export function ServicesCards({
  title,
  description,
}: Props) {
  const t = useTranslations("corporate.services");
  const services: Service[] = SERVICE_CONTENT.map((service) => ({
    image: service.image,
    title: t(`items.${service.id}.title`),
    description: t(`items.${service.id}.description`),
    features: t.raw(`items.${service.id}.features`) as string[],
  }));
  const resolvedTitle = title ?? t("title");
  const resolvedDescription = description ?? t("description");

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {resolvedTitle}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {resolvedDescription}
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
