import { siteConfig } from "@/config/site";

export function absoluteUrl(path: string) {
  try {
    return new URL(path, siteConfig.url).toString();
  } catch {
    return path;
  }
}
