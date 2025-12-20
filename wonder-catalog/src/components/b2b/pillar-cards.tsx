import { LucideIcon } from "lucide-react";

type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  pillars: Pillar[];
  sectionTitle?: string;
  sectionDescription?: string;
};

export function PillarCards({
  pillars,
  sectionTitle,
  sectionDescription,
}: Props) {
  return (
    <section id="servicios" className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {(sectionTitle || sectionDescription) && (
          <div className="mb-12 text-center">
            {sectionTitle && (
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {sectionTitle}
              </h2>
            )}
            {sectionDescription && (
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {sectionDescription}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
