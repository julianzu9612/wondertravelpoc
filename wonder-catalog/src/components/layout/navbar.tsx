import Image from "next/image";
import Link from "next/link";
import { getWhatsAppHref } from "@/lib/whatsapp";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/trips", label: "Viajes" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const whatsappHref = getWhatsAppHref();

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
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-md"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
