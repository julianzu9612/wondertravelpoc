# Acta de Entrega (Wonder Travel Catálogo v2.0)

## Alcance entregado
- **Páginas**: Home, `/trips`, `/trips/[slug]`, `/contacto`, `not-found`.
- **Home**: Hero full-bleed con video y CTA WhatsApp, banner de campaña, destacados, buscador por texto/categoría, testimonios, confianza, partners (logos ProColombia/TourCert/Acotur/Sello de Paz).
- **Listado** `/trips`: cards con precio “Desde”, duración, dificultad y categorías.
- **Detalle** `/trips/[slug]`: hero imagen, facts (duración/dificultad/precio), categorías, itinerario, galería, relacionados y CTA sticky móvil; flotante de WhatsApp oculto aquí para evitar solape.
- **Contacto**: CTA WhatsApp, email/tel/dirección.
- **Datos**: 5 viajes mock en `src/data/trips.json` (Ciudad Perdida, Amazonas, Tatacoa, Mavicure, Caño Cristales) con imágenes del repo original; Tatacoa usa placeholder de desierto.
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
- Despliegue: Vercel recomendado. Para GitHub Pages/estático, configurar `output: 'export'` (Next 14) y `NEXT_PUBLIC_SITE_URL`.
- Assets: `public/hero/*`, `public/images/trips/*`, `public/partners/*`. Datos en `src/data/trips.json`.

## Observaciones finales
- Hero y layout ajustados para full-bleed e inmersión; copy comercial aplicado.
- Flotante de WhatsApp se oculta en detalle (CTA sticky activo).
- Partners cargados con logos reales del pack; se pueden añadir más si se proveen.
