import { Mail, Phone, MessageCircle } from "lucide-react";
import { getWhatsAppHref, getContactInfo, ContactType } from "@/lib/whatsapp";

type Props = {
  contactType: ContactType;
  title?: string;
  description?: string;
  ctaText?: string;
};

export function ContactSectionB2B({
  contactType,
  title = "¿Listo para comenzar?",
  description = "Contáctanos y diseñemos juntos la experiencia perfecta para tu grupo.",
  ctaText = "Escribir por WhatsApp",
}: Props) {
  const contact = getContactInfo(contactType);
  const whatsappHref = getWhatsAppHref(undefined, contactType);

  // Format phone for display
  const phoneDisplay = `+${contact.number.slice(0, 2)} ${contact.number.slice(2, 5)} ${contact.number.slice(5, 8)} ${contact.number.slice(8)}`;

  return (
    <section id="contacto" className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="rounded-3xl border border-border/70 bg-white p-8 shadow-sm sm:p-12">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              {description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-border/70 p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <div className="rounded-full bg-green-100 p-3">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <span className="mt-3 font-semibold">WhatsApp</span>
              <span className="mt-1 text-sm text-muted-foreground">
                {phoneDisplay}
              </span>
            </a>

            <a
              href={`tel:${contact.number}`}
              className="group flex flex-col items-center rounded-2xl border border-border/70 p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-3 font-semibold">Llamar</span>
              <span className="mt-1 text-sm text-muted-foreground">
                {phoneDisplay}
              </span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="group flex flex-col items-center rounded-2xl border border-border/70 p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <div className="rounded-full bg-blue-100 p-3">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <span className="mt-3 font-semibold">Email</span>
              <span className="mt-1 text-sm text-muted-foreground">
                {contact.email}
              </span>
            </a>
          </div>

          <div className="mt-10 text-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
