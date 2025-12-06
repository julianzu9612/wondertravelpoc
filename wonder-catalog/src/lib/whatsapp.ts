const DEFAULT_NUMBER = "573124501242"; // TODO: actualizar con el número oficial de WhatsApp
const DEFAULT_MESSAGE =
  "Hola, me interesa una experiencia de viaje con Wonder Travel";

export const WHATSAPP_NUMBER = DEFAULT_NUMBER;
export const WHATSAPP_MESSAGE = DEFAULT_MESSAGE;

export function getWhatsAppHref(tripTitle?: string) {
  const message = tripTitle
    ? `Hola, me interesa el viaje ${tripTitle} de Wonder Travel`
    : DEFAULT_MESSAGE;

  return `https://wa.me/${DEFAULT_NUMBER}?text=${encodeURIComponent(message)}`;
}
