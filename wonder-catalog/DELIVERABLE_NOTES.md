# Entregable y Hallazgos

## Estado actual (v2.0)
- Sitio estático con Next 14 + Tailwind + shadcn: Home, `/trips`, `/trips/[slug]`, `/contacto`, `not-found`.
- UI: Hero con video, campaña, destacados, buscador texto/categoría, testimonios, confianza y partners con logos del repo original; detalle con facts, itinerario, galería, relacionados y CTA sticky móvil; contacto con CTA WhatsApp y datos.
- Assets reutilizados del repo original: video/póster hero, logos partners (ProColombia, TourCert, Acotur, Sello de Paz), imágenes para trips (Ciudad Perdida, Amazonas, Mavicure, Caño Cristales). Tatacoa usa placeholder de desierto.
- Metadata base y OG/Twitter configurados con `siteConfig`; helper `absoluteUrl`; not-found custom.

## Pendientes críticos
- **WhatsApp**: definir número y copy final en `src/lib/whatsapp.ts`.
- **Imágenes**: Tatacoa requiere foto real. Si hay mejores fotos oficiales para los otros trips, reemplazar en `public/images/trips` y actualizar `src/data/trips.json`.
- **Dominio**: fijar `siteConfig.url` con el dominio final para OG/canonicals.
- **Partners**: añadir logos adicionales si aplica.
- **QA**: pasar Lighthouse móvil + revisión de contrastes/focus; ajustar copy final en hero/CTAs.

### QA/Lighthouse
- Intenté correr Lighthouse con `npx lighthouse http://localhost:3000` (headless Chrome), pero falló por falta de Chrome en el entorno. Al correr en local/CI con Chrome disponible, revisar especialmente:
  - Pesos de imágenes (optimizar si suben fotos nuevas)
  - Lazy-loading en galerías (ya se usa `next/image`)
  - Contraste en chips/badges sobre fondos claros

## Limitantes / hallazgos
- El repo original no trae datos de viajes en archivos estáticos; el sitio productivo consulta un API (`API_ENDPOINTS.TRIPS` / `LIST_TRIPS` vía `NEXT_PUBLIC_API_WOUNDER_ROOT`). Sin ese endpoint/dump, solo podemos usar el mock de `src/data/trips.json` (5 viajes del brief).
- Imágenes de trips en el repo original son escasas y genéricas (carpetas de países/ciudades). No hay foto específica para Tatacoa en el asset pack.
- Si se requieren más experiencias o data real (itinerarios, precios, duración), hay que consumir el API o recibir un export/JSON oficial.

## Qué falta para “página completa”
- Confirmar número/copy WhatsApp.
- Cargar fotos finales (especialmente Tatacoa) y cualquier viaje adicional.
- Integrar data real desde el API o un dump para poblar `trips.json` con todas las experiencias (sin inventar datos).
- Ajustar SEO (url final en `siteConfig`, OG por página si aplica) y QA final.
