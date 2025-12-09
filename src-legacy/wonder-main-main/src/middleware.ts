import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages } from './app/i18n/settings';

/**
 * npm paquete https://www.npmjs.com/package/accept-language
 *  parses HTTP Accept-Language header and returns a matched defined language.
 */
acceptLanguage.languages(languages);

export const DEFAULT_CURRENCY = 'COP';

const I18NEXT_COOKIE_NAME = 'i18next';

// aqui solo se va a llamar si viene con la cookie de i18next
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|sitemap).*)'],
};

const validateSupportRequestLanguage = (req: NextRequest) => {
  // obtenemos el idioma por default del query
  const languageDefaultHeader = req.headers.get('Accept-Language') ?? '';
  // obtenenemos el idioma de la cookie i18next
  const languageCookieI18next = req.cookies?.get(I18NEXT_COOKIE_NAME)?.value;
  // le damos prioridad a la cookie si viene, si no la de header en
  // caso de ninguna de las dos 'en' que es poco probable
  const language = languageCookieI18next ?? languageDefaultHeader;
  // busca si soportamos el idioma que configuramos, primer valida la cookie
  // si no hay en cookie, el idioma de los headers  si no soportamos
  // ninguno o no existe idioma devuelve undefined
  const languageSupported = acceptLanguage.get(language);
  // si no lo soportamos dejamos por defecto en ingles
  // si lo soporta devolvemos el idioma de la cookie o header

  return languageSupported ?? fallbackLng;
};

export async function middleware(req: NextRequest) {
  const language = validateSupportRequestLanguage(req);

  const validateLngInPathname = languages.some((loc) =>
    req.nextUrl.pathname.startsWith(`/${loc}`)
  );

  // rewrite url if lng doesnt in path
  // function to site indexation 
  if (!validateLngInPathname) {
    return NextResponse.rewrite(
      new URL(`/${language}${req.nextUrl.pathname}`, req.url)
    );
  }

  /**
   * new response: this response continue
   * with de next.js flow 
   * */
  const newResponse = NextResponse.next();
  /**
   * si tenemos el idioma soportado, lo seteamos en
   * la cookie (de nuevo)
   * de I18next con el idioma encontrado en path '/'
   *  */
  // sin el param de max age el tiempo por default es session
  newResponse.cookies.set(I18NEXT_COOKIE_NAME, language);

  /**
   * validamos si la nueva respuesta que creamos
   * tiene cookie origin y currency
   * si no tiene origin seteamos el origina del req '
   */

  // TODO: ¿para que seteamos este origin?
  // const originCookie = req.cookies.get('origin')?.value;
  // if (!originCookie || origin !== originCookie) {
  //   newResponse.cookies.set('origin', origin);
  // }

  // aqui seteamos la currency por default si no tiene
  const hasCurrency = req.cookies.has('currency');
  if (!hasCurrency) {
    newResponse.cookies.set('currency', DEFAULT_CURRENCY);
  }

  return newResponse;
}
