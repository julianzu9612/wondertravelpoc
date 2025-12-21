import { GraduationCap, Scale, Building2 } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type Program = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
};

type Props = {
  title?: string;
  description?: string;
};

export function ProgramTypes({
  title,
  description,
}: Props) {
  const t = useTranslations("universities.programs");
  const programs: Program[] = [
    {
      icon: GraduationCap,
      title: t("items.mba.title"),
      subtitle: t("items.mba.subtitle"),
      description: t("items.mba.description"),
      highlights: t.raw("items.mba.highlights") as string[],
    },
    {
      icon: Scale,
      title: t("items.llm.title"),
      subtitle: t("items.llm.subtitle"),
      description: t("items.llm.description"),
      highlights: t.raw("items.llm.highlights") as string[],
    },
    {
      icon: Building2,
      title: t("items.mpa.title"),
      subtitle: t("items.mpa.subtitle"),
      description: t("items.mpa.description"),
      highlights: t.raw("items.mpa.highlights") as string[],
    },
  ];
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
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className="group rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      {program.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {program.subtitle}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {program.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {program.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
