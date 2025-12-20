const partners = [
  "ProColombia",
  "TourCert",
  "Acotur",
  "Destino de Paz",
];

export function TrustBand() {
  return (
    <section className="rounded-3xl border border-border/70 bg-gradient-to-r from-orange-50 via-white to-orange-100 p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
            Confianza
          </p>
          <h3 className="text-xl font-semibold text-foreground">
            4.9/5 viajeros felices · Partners de confianza
          </h3>
          <p className="text-sm text-foreground/70">
            Ratings referenciales y certificaciones claves para viajar tranquilo.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-foreground/70">
          {partners.map((p) => (
            <span
              key={p}
              className="rounded-full border border-border/70 bg-white px-3 py-1 shadow-sm"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
