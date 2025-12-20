import Link from "next/link";
import { getWhatsAppHref } from "@/lib/whatsapp";

export function CampaignBanner() {
  const whatsapp = getWhatsAppHref();

  return (
    <section className="overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-r from-[#0b1220] via-[#111827] to-[#0b1220] text-white shadow-lg">
      <div className="mx-auto flex flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.14em] text-white/60">
            Campaña
          </p>
          <h3 className="text-2xl font-semibold leading-tight">
            Expediciones Wonder · temporada vigente
          </h3>
          <p className="max-w-2xl text-sm text-white/80">
            Salidas curadas con logística lista. Habla con el equipo para cupos y
            fechas disponibles.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg"
          >
            Consultar cupos
          </Link>
          <Link
            href="/trips"
            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}
