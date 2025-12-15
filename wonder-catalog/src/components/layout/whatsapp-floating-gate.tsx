"use client";

import { usePathname } from "next/navigation";
import { WhatsAppFloating } from "./whatsapp-floating";
import type { ContactType } from "@/lib/whatsapp";

// Detecta la ruta y determina el tipo de contacto apropiado
function getContactTypeFromPath(pathname: string | null): ContactType {
  if (pathname?.startsWith("/universidades")) return "groups";
  if (pathname?.startsWith("/empresas")) return "corporate";
  return "signature";
}

// Oculta el flotante en detalle de viaje para evitar solaparlo con el CTA sticky
export function WhatsAppFloatingGate() {
  const pathname = usePathname();

  const isTripDetail =
    pathname?.startsWith("/trips/") && pathname !== "/trips";

  if (isTripDetail) return null;

  const contactType = getContactTypeFromPath(pathname);

  return <WhatsAppFloating contactType={contactType} />;
}
