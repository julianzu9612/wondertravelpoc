type Stat = {
  value: string;
  label: string;
};

type Props = {
  stats: Stat[];
  title?: string;
  description?: string;
};

export function StatsSection({ stats, title, description }: Props) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/70 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
