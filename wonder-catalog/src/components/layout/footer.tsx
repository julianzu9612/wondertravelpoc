"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import {
  getContactInfo,
  getWhatsAppHref,
  type ContactType,
} from "@/lib/whatsapp";
import { Link } from "@/i18n/navigation";

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

export function Footer() {
  const t = useTranslations("footer");
  const tWhatsApp = useTranslations("whatsapp");
  const pathname = usePathname();
  const contactType = getContactTypeFromPath(pathname);
  const contact = getContactInfo(contactType);
  const whatsappHref = getWhatsAppHref({
    contactType,
    message: tWhatsApp("interestGeneral", { label: contact.label }),
  });

  return (
    <footer className="border-t border-border/80 bg-secondary/50 text-sm text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:max-w-7xl">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.08em] text-foreground/60">
            {t("eyebrow")}
          </p>
          <h3 className="text-xl font-semibold text-foreground">
            {t("title")}
          </h3>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-md"
          >
            {t("cta")}
          </a>
          <p className="text-foreground/70">
            {t("contactLine", { phone: contact.number })}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            {contact.email}
          </a>
          <p className="text-foreground/60">{t("address")}</p>
        </div>

        <div className="grid gap-6 sm:gap-10">
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.08em] text-foreground/60">
              {t("explore")}
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="transition-colors hover:text-foreground">
                {t("links.home")}
              </Link>
              <Link
                href="/trips"
                className="transition-colors hover:text-foreground"
              >
                {t("links.trips")}
              </Link>
              <Link
                href="/universidades"
                className="transition-colors hover:text-foreground"
              >
                {t("links.universities")}
              </Link>
              <Link
                href="/empresas"
                className="transition-colors hover:text-foreground"
              >
                {t("links.corporate")}
              </Link>
              <Link
                href="/contacto"
                className="transition-colors hover:text-foreground"
              >
                {t("links.contact")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 bg-secondary/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-foreground/60 sm:px-6 lg:max-w-7xl">
          <span>{t("copyright", { year: new Date().getFullYear() })}</span>
          <span>{t("catalogVersion")}</span>
        </div>
      </div>
    </footer>
  );
}
