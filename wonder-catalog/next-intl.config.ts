import { routing } from "./src/i18n/routing";

const nextIntlConfig = {
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: routing.localePrefix,
};

export default nextIntlConfig;
