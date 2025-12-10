const stars = Array.from({ length: 5 });

export function TrustpilotBadge() {
  return (
    <a
      href="https://ca.trustpilot.com/review/wondertravel.co"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 rounded-2xl border border-border/70 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
          Trustpilot
        </p>
        <p className="text-lg font-semibold text-foreground">4.7/5</p>
        <p className="text-xs text-foreground/70">29 reviews</p>
      </div>
      <div className="flex items-center gap-1 text-lg text-green-500" aria-hidden="true">
        {stars.map((_, idx) => (
          <span key={idx}>★</span>
        ))}
      </div>
    </a>
  );
}
