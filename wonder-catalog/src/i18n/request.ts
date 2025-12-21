import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale =
    locale && routing.locales.includes(locale as typeof routing.locales[number])
      ? (locale as typeof routing.locales[number])
      : routing.defaultLocale;

  if (!routing.locales.includes(resolvedLocale)) {
    notFound();
  }

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});
