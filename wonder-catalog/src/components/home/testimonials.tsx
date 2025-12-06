const testimonials = [
  {
    name: "Amanda N.",
    country: "Classic Colombia",
    quote:
      "El viaje fue impecable: logística, guías y experiencias auténticas. 11/10.",
  },
  {
    name: "Camila V.",
    country: "Tesoro Escondido",
    quote:
      "Superó todas las expectativas. Cada experiencia fue mágica y bien cuidada.",
  },
  {
    name: "Michael A.",
    country: "Amazonas 3 fronteras",
    quote: "Simplemente increíble. Atención al detalle y seguridad en ruta.",
  },
];

export function Testimonials() {
  return (
    <section className="rounded-3xl border border-border/70 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
            Testimonios
          </p>
          <h3 className="text-2xl font-semibold text-foreground">
            Lo que dicen los viajeros
          </h3>
          <p className="text-sm text-foreground/70">
            Historias reales de experiencias Wonder.
          </p>
        </div>
        <span className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-foreground">
          4.9/5 · 30 reseñas
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex h-full flex-col gap-3 rounded-2xl border border-border/70 bg-secondary/60 p-4 text-sm text-foreground/80 transition transform-gpu hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground/60">
              <span>{t.country}</span>
              <span>★ ★ ★ ★ ★</span>
            </div>
            <p className="text-base font-semibold text-foreground">{t.name}</p>
            <p className="text-sm text-foreground/70">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
