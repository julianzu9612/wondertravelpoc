import type { Metadata } from "next";
import { getWhatsAppHref, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto | Wonder Travel",
  description:
    "Hablemos por WhatsApp o email para planear tu próxima aventura con Wonder Travel.",
  openGraph: {
    title: "Contacto | Wonder Travel",
    description:
      "Hablemos por WhatsApp o email para planear tu próxima aventura con Wonder Travel.",
    url: `${siteConfig.url}/contacto`,
    images: [siteConfig.ogImage],
  },
};

export default function ContactoPage() {
  const whatsapp = getWhatsAppHref();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
          Contacto
        </p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          ¿Listo para viajar?
        </h1>
        <p className="text-base text-foreground/70">
          Escríbenos por WhatsApp para una respuesta inmediata o déjanos tu
          mensaje por email.
        </p>
      </div>

      <div className="mt-6 space-y-4 rounded-3xl border border-border/70 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg"
          >
            Hablar por WhatsApp
          </a>
          <a
            href="mailto:travelbuddy@wondertravel.co"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-foreground"
          >
            travelbuddy@wondertravel.co
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/70 bg-secondary/60 p-4 text-sm text-foreground/80">
            <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
              Teléfono
            </p>
            <p className="text-base font-semibold text-foreground">
              +{WHATSAPP_NUMBER}
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-secondary/60 p-4 text-sm text-foreground/80">
            <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
              Dirección
            </p>
            <p className="text-base font-semibold text-foreground">
              Calle 98 # 10 - 32 · Bogotá, Colombia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
