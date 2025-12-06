const partners = [
  { name: "ProColombia", note: "Logo pendiente" },
  { name: "TourCert", note: "Logo pendiente" },
  { name: "Acotur", note: "Logo pendiente" },
  { name: "Destinos de Paz", note: "Logo pendiente" },
];

export function Partners() {
  return (
    <section className="rounded-3xl border border-border/70 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
            Partners y certificaciones
          </p>
          <h3 className="text-2xl font-semibold text-foreground">
            Alianzas de confianza
          </h3>
          <p className="text-sm text-foreground/70">
            Sustituye los placeholders por logos reales en <code>public/partners</code>.
          </p>
        </div>
        <span className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-foreground">
          Logos pendientes
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex h-full flex-col items-start justify-between gap-3 rounded-2xl border border-dashed border-border/70 bg-secondary/50 p-4 text-sm text-foreground/80 transition transform-gpu hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xs font-semibold text-foreground shadow-sm">
              Logo
            </div>
            <div className="space-y-1">
              <p className="text-base font-semibold text-foreground">
                {partner.name}
              </p>
              <p className="text-xs uppercase tracking-[0.1em] text-foreground/60">
                {partner.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
