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

        <div className="space-y-3 pt-4">
          <h2 className="text-xl font-semibold text-foreground">Encuéntranos</h2>
          <div className="overflow-hidden rounded-2xl border border-border/80 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9938.824674862806!2d-74.0570937!3d4.676965699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a9669a3336d%3A0xaea082ba25f4373a!2sCalle%2098%20%2310-32%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[320px] w-full sm:h-[400px]"
              title="Mapa Wonder Travel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
