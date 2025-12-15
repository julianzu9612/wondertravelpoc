/**
 * Sistema de contacto multi-canal para Wonder Travel
 * - signature: B2C viajeros individuales
 * - groups: B2B universidades y grupos académicos
 * - corporate: B2B empresas y corporativo
 */

export type ContactType = "signature" | "groups" | "corporate";

interface ContactInfo {
  number: string;
  email: string;
  label: string;
}

export const CONTACTS: Record<ContactType, ContactInfo> = {
  signature: {
    number: "573143055465",
    email: "travelbuddy@wondertravel.co",
    label: "Wonder Signature",
  },
  groups: {
    number: "573102361480",
    email: "travelbuddygroups@wondertravel.co",
    label: "Wonder Groups",
  },
  corporate: {
    number: "573102361480",
    email: "travelbuddygroups@wondertravel.co",
    label: "Wonder Corporate",
  },
};

// Mantener compatibilidad con código existente
const DEFAULT_CONTACT: ContactType = "signature";

export const WHATSAPP_NUMBER = CONTACTS[DEFAULT_CONTACT].number;
export const WHATSAPP_EMAIL = CONTACTS[DEFAULT_CONTACT].email;

/**
 * Genera URL de WhatsApp con mensaje personalizado
 * @param tripTitle - Título del viaje (opcional)
 * @param contactType - Tipo de contacto: signature, groups, corporate
 */
export function getWhatsAppHref(
  tripTitle?: string,
  contactType: ContactType = DEFAULT_CONTACT
): string {
  const contact = CONTACTS[contactType];
  const message = tripTitle
    ? `Hola, me interesa el viaje ${tripTitle} de Wonder Travel`
    : `Hola, me interesa una experiencia de viaje con ${contact.label}`;

  return `https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Obtiene información de contacto por tipo
 */
export function getContactInfo(type: ContactType): ContactInfo {
  return CONTACTS[type];
}
