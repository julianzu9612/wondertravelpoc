"use client";

import { usePathname } from "next/navigation";
import { WhatsAppFloating } from "./whatsapp-floating";
import type { ContactType } from "@/lib/whatsapp";

// Detecta la ruta y determina el tipo de contacto apropiado
function getContactTypeFromPath(pathname: string | null): ContactType {
  const normalized = pathname?.toLowerCase() ?? "";
  if (
    normalized.includes("/universidades") ||
    normalized.includes("/universities") ||
    normalized.includes("/universites")
  ) {
    return "groups";
  }
  if (
    normalized.includes("/empresas") ||
    normalized.includes("/corporate") ||
    normalized.includes("/entreprises")
  ) {
    return "corporate";
  }
  return "signature";
}

// Oculta el flotante en detalle de viaje para evitar solaparlo con el CTA sticky
export function WhatsAppFloatingGate() {
  const pathname = usePathname();

  const isTripDetail =
    (pathname?.includes("/trips/") ||
      pathname?.includes("/viajes/") ||
      pathname?.includes("/voyages/")) &&
    !pathname?.endsWith("/trips") &&
    !pathname?.endsWith("/viajes") &&
    !pathname?.endsWith("/voyages");

  if (isTripDetail) return null;

  const contactType = getContactTypeFromPath(pathname);

  return <WhatsAppFloating contactType={contactType} />;
}
