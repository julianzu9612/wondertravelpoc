import Link from "next/link";
import { getWhatsAppHref, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function Footer() {
  const whatsappHref = getWhatsAppHref();

  return (
    <footer className="border-t border-border/80 bg-secondary/50 text-sm text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:max-w-7xl">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.08em] text-foreground/60">
            Wonder Travel
          </p>
          <h3 className="text-xl font-semibold text-foreground">
            ¿Listo para viajar?
          </h3>
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-md"
          >
            Escríbenos por WhatsApp
          </Link>
          <p className="text-foreground/70">
            Tel: +{WHATSAPP_NUMBER} · travelbuddy@wondertravel.co
          </p>
          <p className="text-foreground/60">
            Calle 98 # 10 - 32 · Bogotá, Colombia
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-10">
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.08em] text-foreground/60">
              Explora
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <Link
                href="/trips"
                className="transition-colors hover:text-foreground"
              >
                Wonder Signature
              </Link>
              <Link
                href="/universidades"
                className="transition-colors hover:text-foreground"
              >
                Universidades
              </Link>
              <Link
                href="/empresas"
                className="transition-colors hover:text-foreground"
              >
                Empresas
              </Link>
              <Link
                href="/contacto"
                className="transition-colors hover:text-foreground"
              >
                Contacto
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.08em] text-foreground/60">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/politica-datos" className="transition-colors hover:text-foreground">
                Datos personales
              </Link>
              <Link href="/terminos" className="transition-colors hover:text-foreground">
                Términos y condiciones
              </Link>
              <Link href="/sostenibilidad" className="transition-colors hover:text-foreground">
                Sostenibilidad
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 bg-secondary/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-foreground/60 sm:px-6 lg:max-w-7xl">
          <span>© {new Date().getFullYear()} Wonder Travel.</span>
          <span>Catálogo estático v2.0</span>
        </div>
      </div>
    </footer>
  );
}
