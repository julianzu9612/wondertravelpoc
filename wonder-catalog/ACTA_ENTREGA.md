# Acta de Entrega (Wonder Travel Catálogo v2.0)

## Alcance entregado
- **Páginas**: Home, `/trips`, `/trips/[slug]`, `/contacto`, `not-found`.
- **Home**: Hero full-bleed con video y CTA WhatsApp, banner de campaña, destacados, buscador por texto/categoría, testimonios, confianza, partners (logos ProColombia/TourCert/Acotur/Sello de Paz).
- **Listado** `/trips`: cards con precio “Desde”, duración, dificultad y categorías.
- **Detalle** `/trips/[slug]`: hero imagen, facts (duración/dificultad/precio), categorías, itinerario, galería, relacionados y CTA sticky móvil; flotante de WhatsApp oculto aquí para evitar solape.
- **Contacto**: CTA WhatsApp, email/tel/dirección.
- **Datos**: viajes mock en `src/data/trips.ts` (Ciudad Perdida, Amazonas, Tatacoa, Mavicure, Caño Cristales) con imágenes del repo original; Tatacoa usa placeholder de desierto.
- **Branding/Assets**: Video hero, logos partners y fotos de trips desde el repo original en `public/*`. Paleta/tipografía definidas, motion suave.
- **SEO base**: `siteConfig` con meta OG/Twitter, helper `absoluteUrl`; `NEXT_PUBLIC_SITE_URL` pendiente de dominio final.

## Limitaciones y pendientes
- **WhatsApp**: falta número/copy final en `src/lib/whatsapp.ts`.
- **Imágenes**: Tatacoa requiere foto real; reemplazar si hay mejores fotos oficiales para los trips.
- **Dominio**: setear `NEXT_PUBLIC_SITE_URL` antes de prod para OG/canonicals.
- **API real**: el sitio original consume un API de trips; aquí usamos mock JSON (5 viajes). Para catálogo completo, se necesita endpoint/dump oficial.
- **QA**: Lighthouse móvil pendiente (Chrome no disponible en entorno actual); revisar contrastes/focus tras contenido final.

## Instrucciones de uso
- Dev server: `npm run dev -- --hostname 0.0.0.0 --port 3000` (p. ej. PID 178510 en última ejecución).
- Lint: `npm run lint`.
- Despliegue: Vercel recomendado. Para GitHub Pages/estático, configurar `output: 'export'` y `NEXT_PUBLIC_SITE_URL`.
- Assets: `public/hero/*`, `public/images/trips/*`, `public/partners/*`. Datos en `src/data/trips.ts`.
- Idiomas: rutas con prefijo (`/en`, `/es`, `/fr`), default `en`. Cambiar idioma desde el switcher en navbar.
- Traducciones UI: `src/messages/en.json`, `src/messages/es.json`, `src/messages/fr.json`.

## Observaciones finales
- Hero y layout ajustados para full-bleed e inmersión; copy comercial aplicado.
- Flotante de WhatsApp se oculta en detalle (CTA sticky activo).
- Partners cargados con logos reales del pack; se pueden añadir más si se proveen.

## Quick Wins - 2025-12-10

### Completado
- [x] Google Maps embed en `/contacto` (iframe responsive con dirección Calle 98 # 10 - 32, Bogotá).
- [x] Trustpilot badge en Home (link a reviews 4.7/5, 29 reviews) con estilo destacado (gradiente verde, CTA “Ver reseñas”).

### Detalles de implementación
- Archivos modificados: `src/app/contacto/page.tsx` (bloque Encuéntranos + iframe), `src/components/home/trustpilot-badge.tsx`, `src/app/page.tsx` (se agrega badge en Home).
- Ubicación del mapa: bloque “Encuéntranos” al final de la página de contacto, altura 320–400 px responsive.
- Ubicación Trustpilot: debajo de testimonios en Home, badge estático que enlaza a Trustpilot.
- URL de preview verificada: local (`http://localhost:3000`); pendiente deploy en Vercel para preview público.

### Deploy en Vercel
- Proyecto previo: `axis-wondertravel` (root `wonder-catalog`). Al hacer push a la rama principal, Vercel redeploya.
- Configurar `NEXT_PUBLIC_SITE_URL` en Vercel antes de producción para OG/canonicals.
- Si se usa `next export`/GitHub Pages, setear `output: 'export'` y `NEXT_PUBLIC_SITE_URL` acorde al dominio de Pages.

---

## Secciones B2B - 2025-12-14

### Wonder Groups (`/universidades`)
Landing completa para programas académicos (MBA, LLM, MPA, Executive Education).

**Estructura:**
- Hero con video Veo 3 (profesionales jóvenes en mercado latinoamericano)
- Pilares: Servicio 24/7, Experiencias Únicas, Seguridad Garantizada
- Program Types: MBA, LLM, MPA cards
- Stats: +7,000 viajeros, +25 destinos, 15+ años, 4.9/5
- Logo Grid: Harvard, MIT, Stanford, Chicago, Berkeley, Wharton, Columbia, YPO
- Gallery: 7 fotos de grupos
- Certificaciones: TourCert, Sello Paz, ACOTUR
- Testimonios: 3 coordinadores universitarios
- CTA: WhatsApp grupos (+57 310 236 1480)

### Wonder Corporate (`/empresas`)
Landing para experiencias corporativas (Team Building, Incentivos, Integraciones).

**Estructura:**
- Hero con video Veo 3 (colaboración de equipos corporativos)
- Pilares: Team Building, Incentivos, Logística
- Stats: +50 empresas, +80 NPS, 8 destinos, 100% satisfacción
- Services Cards: 3 cards con imagen (Team Building, Viajes Incentivo, Retiros)
- Destinations Map: Mapa Colombia interactivo con 8 ciudades
- CTA: WhatsApp corporativo (+57 310 236 1480)

### Videos Hero (Veo 3 + FFmpeg)

| Archivo | Formato | Tamaño | Uso |
|---------|---------|--------|-----|
| hero-universidades.webm | VP9 | 1.4 MB | Navegadores modernos |
| hero-universidades.mp4 | H.264 | 2.2 MB | Safari fallback |
| hero-empresas.webm | VP9 | 1.3 MB | Navegadores modernos |
| hero-empresas.mp4 | H.264 | 966 KB | Safari fallback |

**Técnica watermark:** Video escalado 110% con `object-position: left top` para ocultar marca Veo.

### Sistema WhatsApp Multi-Contacto

| Sección | Número | Email |
|---------|--------|-------|
| Wonder Signature | +57 314 305 5465 | travelbuddy@wondertravel.co |
| Universidades | +57 310 236 1480 | travelbuddygroups@wondertravel.co |
| Empresas | +57 310 236 1480 | travelbuddygroups@wondertravel.co |

El WhatsApp flotante detecta la ruta y usa el contacto apropiado automáticamente.

### Archivos creados

```
src/components/b2b/           # 7 componentes reutilizables
src/components/universidades/ # 2 componentes específicos
src/components/empresas/      # 2 componentes específicos
src/app/universidades/page.tsx
src/app/empresas/page.tsx
public/b2b/                   # Logos, fotos, videos (~15MB)
```

### Pendientes B2B (bloqueados)
- Landings por ciudad `/empresas/[ciudad]` — esperando contenido JP
- Nuevas experiencias Signature — esperando contenido JP
- Links WeTravel — esperando URLs JP

---

## Internacionalización (i18n) - 2025-12-20

### Alcance entregado
- **Idiomas**: inglés (default), español y francés con rutas prefijadas `/en`, `/es`, `/fr`.
- **Switch de idioma**: cambia idioma preservando ruta actual y query params (sin duplicar prefijos).
- **Traducciones UI**: todo el copy visible se mueve a `src/messages/*.json` (home, corporate, universidades, trips, contacto, navbar, footer).
- **Datos traducidos**:
  - **Trips**: `src/data/trips.ts` con `translations` por locale (slug/títulos/itinerario/categorías).
  - **Corporate Destinations**: `src/data/empresas/destinations.ts` con base EN desde Lovable + overrides ES/FR.
- **Validación de contenido**: si se agrega un destino corporativo nuevo sin traducciones ES/FR, el build falla (fail-fast).

### Cambios técnicos clave
- **Next-intl** configurado con routing y middleware:
  - `next-intl.config.ts`, `src/i18n/routing.ts`, `src/i18n/request.ts`, `src/i18n/navigation.ts`.
  - `middleware.ts` para manejo de locale.
- **Server Components**: se fuerza locale con `setRequestLocale(locale)` y `getTranslations({ locale })` en páginas SSR.
- **Home**: refactor de secciones para recibir `locale` desde `src/app/[locale]/page.tsx` y traducir con `getTranslations`.

### Archivos principales tocados
- `src/app/[locale]/page.tsx`
- `src/app/[locale]/empresas/page.tsx`
- `src/app/[locale]/universidades/page.tsx`
- `src/app/[locale]/trips/page.tsx`
- `src/app/[locale]/trips/[slug]/page.tsx`
- `src/app/[locale]/contacto/page.tsx`
- `src/components/home/*` (Hero, Campaign, Featured, Testimonials, Trustpilot, TrustBand, Partners)
- `src/components/layout/locale-switcher.tsx`
- `src/messages/en.json`, `src/messages/es.json`, `src/messages/fr.json`
- `src/data/empresas/destinations.ts`

### Guía para escalar traducciones
- **Agregar nuevo texto UI**: insertar en `src/messages/en.json` y traducir en `es.json`/`fr.json`.
- **Agregar nueva sección Home/B2B**: usar `getTranslations({ locale })` en server o `useTranslations` en client.
- **Agregar destino corporativo**:
  1) Añadir en `lovable-corporate-destinations.json` / `ENABLED_DESTINATION_IDS`.
  2) Agregar traducciones ES/FR en `DESTINATION_TRANSLATIONS`.
  3) El build fallará si faltan traducciones (validación automática).

### Resolución de incidentes (resumen)
- **Problema**: Home/hero y algunas secciones quedaban en inglés aun con `/fr`/`/es`.
- **Causa**: server components usando `useTranslations` sin locale explícito (tomaba default EN).
- **Solución**: `setRequestLocale(locale)` + `getTranslations({ locale })` y pasar `locale` desde la página.

### Build en Vercel (compatibilidad)
- **Problema**: `next/font/google` fallaba al no poder descargar fuentes desde Google Fonts.
- **Solución**: se removió `next/font/google` y se definieron stacks locales en `src/app/globals.css`.
- **Build**: `npm run build` ahora usa `next build --webpack` para evitar fallos de Turbopack en entornos restringidos.
