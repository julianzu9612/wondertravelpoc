# Acta de Entrega — Wonder Travel (Dic 2025)

## Alcance y estado
- Catálogo estático Next.js 16 + Tailwind v4 + TS (App Router) ubicado en `v2.0/wonder-catalog`.
- Páginas: Home, `/trips`, `/trips/[slug]`, `/contacto`, `not-found`. Data local en `src/data/trips.json`, assets en `public/hero`, `public/images/trips`, `public/partners`.
- UI: hero en video, CTA WhatsApp, destacados, buscador client-side, testimonios/partners; detalle con facts, itinerario, galería y CTA sticky móvil.
- Últimos ajustes: hero reequilibrado (centrado, jerarquía reforzada), .vercelignore, docs de despliegue (DEPLOYMENT.md) y README de wonder-catalog con instrucciones.

## Despliegue (Vercel, repo público)
- Repo público: `https://github.com/julianzu9612/wondertravelpoc` (raíz = proyecto).
- Proyecto Vercel: `axis-wondertravel` (Hobby). Root Directory: `wonder-catalog`.
- Comandos: Install `npm install`; Build `npm run build`; Output default Next.js.
- Env vars: `NEXT_PUBLIC_SITE_URL` (usar dominio Vercel: `https://axis-wondertravel.vercel.app` o el asignado).
- Dominio actual de deploy: `https://wondertravelpoc-s1uz-9mupihli8-julianzu9612s-projects.vercel.app/` (preview). Si se desea dominio limpio, asignar el principal del proyecto o custom domain y actualizar `NEXT_PUBLIC_SITE_URL`.

## Repos y ramas relevantes
- Repo privado original (contexto/documentos): `/home/jzuluaga/code/business-projects/orbital/orbitalconsultancy/wondertravel` (rama main, contiene v2.0).
- Repo app: `v2.0/wonder-catalog` (rama master, commits recientes `9ad9eaf` “chore: prep vercel deployment and balance hero”).
- Repo público para deploy: `julianzu9612/wondertravelpoc` (push de `v2.0/wonder-catalog`).

## Pendientes conocidos
- Definir número y copy final de WhatsApp (`src/lib/whatsapp.ts` usa `573124501242` placeholder).
- `NEXT_PUBLIC_SITE_URL`: fijar con dominio final y redeploy (afecta OG/canonicals).
- Imágenes: Tatacoa usa placeholder; reemplazar cuando se tenga la foto oficial. Revisar calidad/peso del mp4 de hero si se quiere optimizar más.
- Partners/logos: se pueden ampliar o sustituir en `public/partners` y sección de partners.
- QA: correr Lighthouse móvil y revisar contrastes/focus en entorno con Chrome disponible.

## Cómo trabajar local
```bash
cd v2.0/wonder-catalog
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
npm run lint
```

## Referencias de diseño y data
- Brief y alcance: `v2.0/BRIEF.md`, `PROJECT_SCOPE.md`, `ROADMAP.md`.
- Tracking/pendientes: `PROCESS_TRACKING.md`, `DELIVERABLE_NOTES.md`, `ACTA_ENTREGA.md` dentro de `v2.0/wonder-catalog`.
- Data de ejemplo: `v2.0/wonder-catalog/src/data/trips.json` (5 viajes mock); assets de marca en `public/brand`, video hero en `public/hero`.

## Notas operativas
- Monorepo: el proyecto desplegable está en la subcarpeta `wonder-catalog`; otros folders son contexto/histórico.
- Si Vercel muestra 404 de plataforma, verificar Root Directory en settings y redeploy.
- El video de hero pesa ~5 MB; Vercel lo sirve como asset estático sin problema en Hobby.
