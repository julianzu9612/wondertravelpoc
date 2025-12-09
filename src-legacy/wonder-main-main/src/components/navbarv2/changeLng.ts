export function changeLanguageUrl(url: string, newLanguage: string): string {
  const pattern = /\/(en|es)\/?/;
  return url.replace(pattern, `/${newLanguage}/`);
}