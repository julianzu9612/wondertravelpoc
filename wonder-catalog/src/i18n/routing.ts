import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "fr"],
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/trips": "/trips",
    "/trips/[slug]": "/trips/[slug]",
    "/universidades": "/universidades",
    "/empresas": "/empresas",
    "/contacto": "/contacto",
    "/politica-datos": "/politica-datos",
    "/terminos": "/terminos",
    "/sostenibilidad": "/sostenibilidad",
  },
});

export type Locale = (typeof routing.locales)[number];
