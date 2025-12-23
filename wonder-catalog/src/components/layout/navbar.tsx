"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ComponentProps } from "react";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Link } from "@/i18n/navigation";

type NavLink = { href: ComponentProps<typeof Link>["href"]; labelKey: string };

const navLinks: NavLink[] = [
  { href: "/", labelKey: "links.home" },
  { href: "/trips", labelKey: "links.trips" },
  { href: "/universidades", labelKey: "links.universities" },
  { href: "/empresas", labelKey: "links.corporate" },
  { href: "/contacto", labelKey: "links.contact" },
];

function MobileMenu({ navLinks }: { navLinks: NavLink[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("nav");

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
        aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
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
              <span className="text-sm font-semibold">{t("menuTitle")}</span>
              <button
                type="button"
                className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-semibold text-foreground/80 shadow-sm transition hover:bg-background"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("close")}
              </button>
            </div>

            <nav className="mt-4 grid gap-2 text-sm font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.labelKey}
                  href={link.href}
                  className="rounded-xl border border-border/70 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.labelKey)}
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
  const t = useTranslations("nav");

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
              key={link.labelKey}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MobileMenu key={pathname ?? "root"} navLinks={navLinks} />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
