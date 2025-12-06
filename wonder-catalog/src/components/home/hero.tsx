import { getWhatsAppHref } from "@/lib/whatsapp";
import Image from "next/image";

export function Hero() {
  const whatsapp = getWhatsAppHref();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-orange-50 via-white to-orange-100 px-5 py-14 sm:px-10 lg:px-14">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/brand/pattern-web.svg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
            Wonder Travel · Colombia y LatAm
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            El alma aventurera de Latinoamérica
          </h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            Catálogo visual de experiencias únicas. Inspírate, filtra por
            categoría y habla directo por WhatsApp con nuestro equipo.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="#featured"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-foreground"
            >
              Ver viajes destacados
            </a>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-border/70 shadow-lg">
          <video
            className="h-full w-full object-cover"
            poster="/hero/captureVideo.webp"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero/video-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
          <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
            Naturaleza · Aventura
          </div>
        </div>
      </div>
    </section>
  );
}
