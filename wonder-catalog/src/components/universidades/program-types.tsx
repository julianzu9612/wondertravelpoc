import { GraduationCap, Scale, Building2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

type Program = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
};

const programs: Program[] = [
  {
    icon: GraduationCap,
    title: "MBA",
    subtitle: "Master in Business Administration",
    description:
      "Viajes inmersivos para programas de negocios que combinan visitas a empresas líderes, networking con ejecutivos y experiencias culturales únicas.",
    highlights: [
      "Visitas a startups y corporaciones",
      "Networking con C-level executives",
      "Casos de estudio en terreno",
    ],
  },
  {
    icon: Scale,
    title: "LLM",
    subtitle: "Master of Laws",
    description:
      "Experiencias diseñadas para futuros abogados que incluyen visitas a cortes, bufetes internacionales y organismos multilaterales.",
    highlights: [
      "Visitas a tribunales y cortes",
      "Sesiones con firmas de abogados",
      "Encuentros con ONGs y organismos",
    ],
  },
  {
    icon: Building2,
    title: "MPA",
    subtitle: "Master in Public Administration",
    description:
      "Programas enfocados en políticas públicas con acceso a instituciones gubernamentales, think tanks y proyectos de impacto social.",
    highlights: [
      "Reuniones con funcionarios públicos",
      "Visitas a proyectos sociales",
      "Análisis de políticas locales",
    ],
  },
];

type Props = {
  title?: string;
  description?: string;
};

export function ProgramTypes({
  title = "Programas Académicos",
  description = "Diseñamos experiencias a la medida de cada programa académico, entendiendo las necesidades específicas de cada disciplina.",
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
