"use client";

import { usePathname } from "next/navigation";
import { WhatsAppFloating } from "./whatsapp-floating";

// Oculta el flotante en detalle de viaje para evitar solaparlo con el CTA sticky
export function WhatsAppFloatingGate() {
  const pathname = usePathname();

  const isTripDetail =
    pathname?.startsWith("/trips/") && pathname !== "/trips";

  if (isTripDetail) return null;

  return <WhatsAppFloating />;
}
