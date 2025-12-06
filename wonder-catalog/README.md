# Wonder Catalog (Next 14 + Tailwind + shadcn)

Catálogo estático para Wonder Travel, con CTA a WhatsApp y datos en JSON.

## Comandos
```bash
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
npm run lint
```

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

## Despliegue
- Vercel (recomendado) o `next export` para GitHub Pages; no hay backend ni llamadas externas.
