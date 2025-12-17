import { MessageCircle } from "lucide-react";
import { getWhatsAppHref, ContactType } from "@/lib/whatsapp";

type Props = {
  contactType?: ContactType;
};

export function WhatsAppFloating({ contactType = "signature" }: Props) {
  const whatsappHref = getWhatsAppHref(undefined, contactType);

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
    </a>
  );
}
