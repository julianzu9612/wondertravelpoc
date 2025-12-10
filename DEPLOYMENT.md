# Despliegue en Vercel (monorepo con contexto)

El repositorio `v2.0` incluye documentos y otras carpetas de referencia. El proyecto que se despliega es `v2.0/wonder-catalog`. Para evitar que Vercel lea la raíz completa, selecciona esa carpeta como **Root Directory** al crear el proyecto.

## Pasos rápidos
1. Conecta el repo en Vercel y, en “Root Directory”, elige `v2.0/wonder-catalog`.
2. Variables de entorno:
   - `NEXT_PUBLIC_SITE_URL`: la URL pública (p. ej. la que asigne Vercel: `https://<proyecto>.vercel.app`).
3. Configuración de build:
   - Install: `npm install`
   - Build command: `npm run build`
   - Output: `.next` (detecto automático por framework Next.js)
4. Deploy.

## Notas
- El sitio es SSG puro: datos en `src/data/trips.json`; sin llamadas externas.
- El video de hero (`public/hero/video-hero.mp4`, ~5MB) se incluye en el repo; Vercel lo sirve como asset estático.
- Antes de prod, confirma número/copy en `src/lib/whatsapp.ts` y el valor final de `NEXT_PUBLIC_SITE_URL` para OG/canonicals.
