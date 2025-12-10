# Wonder Catalog (Next 14 + Tailwind + shadcn)

Catálogo estático para Wonder Travel, con CTA a WhatsApp y datos en JSON.

## Comandos
```bash
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
npm run lint
```

## Despliegue en Vercel (monorepo)
- El repo completo incluye documentación y otras carpetas; el proyecto Next vive en `v2.0/wonder-catalog`. En Vercel, selecciona esa ruta como **Root Directory** al importar.
- Variables: `NEXT_PUBLIC_SITE_URL` con la URL pública (la que asigne Vercel o el dominio final).
- Build: `npm run build` (install: `npm install`). Framework: Next.js (detección automática). Output: `.next`.
- Assets: video de hero ~5MB en `public/hero/video-hero.mp4`; servido estático por Vercel.

## Estructura relevante
- `src/app/page.tsx`: Home (hero, campaña, destacados, buscador, testimonios, confianza).
- `src/app/trips/page.tsx`: listado completo.
- `src/app/trips/[slug]/page.tsx`: detalle con facts, itinerario, galería, relacionados y CTA WhatsApp.
- `src/app/contacto/page.tsx`: contacto con CTA y datos.
- `src/data/trips.json`: fuente única de viajes.
- `public/images/trips/`: imágenes por `slug`.
- `src/lib/whatsapp.ts`: link a WhatsApp (**pendiente número/copy final**).

## Pendientes críticos
- **WhatsApp**: actualizar número y mensaje en `src/lib/whatsapp.ts` antes de release.
- **Imágenes**: reemplazar placeholders en `public/images/trips/*.jpg` por fotos reales y actualizar rutas en `src/data/trips.json`.
- **Partners**: añadir logos reales en `public/partners` y apuntarlos en la sección de partners (cuando se implemente).
- **Dominio**: configurar `NEXT_PUBLIC_SITE_URL` para OG/canonicals antes de desplegar.

## Assets reutilizados (repo original)
- Video/póster de hero: `public/hero/video-hero.mp4`, `public/hero/captureVideo.webp`.
- Logos de partners (ProColombia, TourCert, Acotur, Sello de Paz) en `public/partners`.
- Placeholders de trips tomados de `/wonder-main-main/public/assets/images/homepage/Card*.webp` y `cano-cristales.jpg`.

## Despliegue
- Vercel (recomendado) o `next export` para GitHub Pages; no hay backend ni llamadas externas.
- Para `next export`: setear `OUTPUT=export` en Next 14 o usar `next.config.ts` con `output: 'export'` si se desea modo estático. Configurar `NEXT_PUBLIC_SITE_URL` para OG.
