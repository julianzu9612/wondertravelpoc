"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { type ContactType, getWhatsAppHref } from "@/lib/whatsapp";

type NavLink = { href: string; label: string };

const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/trips", label: "Wonder Signature" },
  { href: "/universidades", label: "Universidades" },
  { href: "/empresas", label: "Empresas" },
  { href: "/contacto", label: "Contacto" },
];

function getContactTypeForPathname(pathname: string): ContactType {
  if (pathname.startsWith("/universidades")) return "groups";
  if (pathname.startsWith("/empresas")) return "corporate";
  return "signature";
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.48 0 .14 5.33.14 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.32-1.66a11.86 11.86 0 0 0 5.73 1.46h.01c6.57 0 11.91-5.33 11.91-11.9 0-3.18-1.24-6.17-3.45-8.42ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.75.98 1-3.65-.23-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.45 4.44-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.9 9.9Z" />
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.78-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.09 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function MobileMenu({ navLinks }: { navLinks: NavLink[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground/80 shadow-sm backdrop-blur transition hover:bg-background sm:hidden"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 sm:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`absolute left-0 right-0 top-0 border-b border-border/70 bg-background/95 backdrop-blur transition-transform duration-200 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-3"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mx-auto max-w-6xl px-4 pb-6 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Menú</span>
              <button
                type="button"
                className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold text-foreground/80 shadow-sm transition hover:bg-background"
                onClick={() => setIsMenuOpen(false)}
              >
                Cerrar
              </button>
            </div>

            <nav className="mt-4 grid gap-2 text-sm font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-border/70 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export function Navbar() {
  const pathname = usePathname();

  const whatsappHref = useMemo(() => {
    const contactType = getContactTypeForPathname(pathname ?? "/");
    return getWhatsAppHref(undefined, contactType);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:max-w-7xl">
        <Link href="/" className="flex items-center gap-3 text-base font-semibold">
          <Image
            src="/brand/wonder-logo.svg"
            alt="Wonder Travel"
            width={140}
            height={40}
            className="h-8 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-foreground/80 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MobileMenu key={pathname ?? "root"} navLinks={navLinks} />

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-md"
          >
            <span className="sr-only">WhatsApp</span>
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
