# Wonder Catalog (Next 16 + Tailwind + next-intl)

Catálogo estático para Wonder Travel, con CTA a WhatsApp y datos en JSON.

## Comandos
```bash
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
npm run lint
npm run build
```

## Troubleshooting (dev server)

Si `next dev` no levanta:
- **EPERM / operation not permitted**: el entorno puede bloquear puertos. Prueba cerrar procesos previos y reintentar.
- **Lock error** (`.next/dev/lock`): hay otra instancia corriendo.

Pasos rápidos:
```bash
# Ver procesos en el puerto 3000
lsof -i :3000

# Ver procesos de Next
ps -ef | rg "next dev"

# Detener el proceso (reemplaza PID)
kill <PID>

# Borrar lock si quedó colgado
rm -f .next/dev/lock

# Reintentar
npm run dev -- --hostname 0.0.0.0 --port 3000
```

## Secciones del Sitio

### Wonder Signature (`/en`, `/es`, `/fr`)
Catálogo principal de viajes para viajeros individuales. Hero con video, buscador, testimonios.

### Wonder Groups (`/{locale}/universidades`)
Landing B2B para programas académicos (MBA, LLM, MPA, Executive Education).
- **Hero**: Video generado con IA (Veo 3) de profesionales jóvenes en mercado latinoamericano
- **Pilares**: Servicio 24/7, Experiencias Únicas, Seguridad Garantizada
- **Logos**: Harvard, MIT, Stanford, Chicago, Berkeley, Wharton, Columbia, YPO
- **Contacto**: WhatsApp dedicado a grupos (+57 310 236 1480)

### Wonder Corporate (`/{locale}/empresas`)
Landing B2B para experiencias corporativas (Team Building, Incentivos, Integraciones).
- **Hero**: Video generado con IA (Veo 3) de colaboración de equipos corporativos
- **Servicios**: Team Building, Viajes de Incentivo, Retiros Ejecutivos
- **Destinos**: Mapa interactivo con 8 ciudades de Colombia
- **Contacto**: WhatsApp corporativo (+57 310 236 1480)

## Arquitectura de Componentes B2B

```
src/components/b2b/
├── hero-b2b.tsx          # Hero con soporte video/imagen
├── stats-section.tsx     # Grid de estadísticas
├── pillar-cards.tsx      # Cards de pilares/servicios
├── logo-grid.tsx         # Grid de logos clientes
├── contact-section-b2b.tsx
├── testimonials-b2b.tsx
└── certifications-grid.tsx

src/components/universidades/
├── program-types.tsx     # Cards MBA/LLM/MPA
└── gallery-section.tsx

src/components/empresas/
├── services-cards.tsx    # Cards con imagen
└── destinations-map.tsx  # Mapa Colombia interactivo
```

## Videos Hero (Veo 3 + FFmpeg)

Los videos del hero B2B fueron generados con Google Veo 3 y optimizados con FFmpeg:

| Archivo | Formato | Tamaño | Uso |
|---------|---------|--------|-----|
| hero-universidades.webm | VP9 | 1.4 MB | Navegadores modernos |
| hero-universidades.mp4 | H.264 | 2.2 MB | Safari fallback |
| hero-empresas.webm | VP9 | 1.3 MB | Navegadores modernos |
| hero-empresas.mp4 | H.264 | 966 KB | Safari fallback |

### Comandos de optimización usados:
```bash
# WebM (principal, más liviano)
ffmpeg -y -i input.mp4 -c:v libvpx-vp9 -crf 35 -b:v 1200k -an -t 8 output.webm

# MP4 (fallback Safari)
ffmpeg -y -i input.mp4 -c:v libx264 -crf 28 -preset slow -b:v 1500k -an -t 8 output.mp4
```

### Técnica de ocultamiento de watermark:
El componente `HeroB2B` escala el video 110% y lo ancla arriba-izquierda para empujar el watermark de Veo fuera del viewport:
```tsx
<video className="h-[110%] w-[110%] object-cover" style={{ objectPosition: "left top" }}>
```

## Sistema de Contactos WhatsApp

**Archivo:** `src/lib/whatsapp.ts`

| Tipo | Número | Email |
|------|--------|-------|
| signature | +57 314 305 5465 | travelbuddy@wondertravel.co |
| groups | +57 310 236 1480 | travelbuddygroups@wondertravel.co |
| corporate | +57 310 236 1480 | travelbuddygroups@wondertravel.co |

## Internacionalización (i18n)
- **Locales**: `en` (default), `es`, `fr` con prefijo en ruta (`/en`, `/es`, `/fr`).
- **Root**: `/` redirige al locale default (`/en`).
- **Mensajes**: `src/messages/en.json`, `src/messages/es.json`, `src/messages/fr.json`.
- **Routing**: `src/i18n/routing.ts` + `middleware.ts`.
- **Server components**: usar `setRequestLocale(locale)` y `getTranslations({ locale })` cuando se renderiza en servidor.

### Datos traducidos
- **Trips**: `src/data/trips.ts` contiene `translations` por idioma (slugs, títulos e itinerarios).
- **Corporate Destinations**: `src/data/empresas/destinations.ts` usa EN como base y overrides ES/FR. Hay validación que falla si falta traducción de un destino habilitado.

## Fuentes (sin fetch remoto)
- Se removió `next/font/google` para evitar fallos de build cuando no hay acceso a Google Fonts.
- Los stacks se definen en `src/app/globals.css` usando variables `--font-sans`, `--font-display`, `--font-mono`.
- Si se quieren fuentes exactas, agregar archivos locales y migrar a `next/font/local`.

## Despliegue en Vercel (monorepo)
- El repo completo incluye documentación y otras carpetas; el proyecto Next vive en `wonder-catalog`. En Vercel, selecciona esa ruta como **Root Directory** al importar.
- Variables: `NEXT_PUBLIC_SITE_URL` con la URL pública (la que asigne Vercel o el dominio final).
- Build: `npm run build` (install: `npm install`). Framework: Next.js (detección automática). Output: `.next`.
- Assets: videos de hero ~5MB total en `public/b2b/videos/`; servidos estáticos por Vercel.

## Estructura de Archivos
- `src/app/[locale]/page.tsx`: Home (hero, campaña, destacados, buscador, testimonios, confianza).
- `src/app/[locale]/trips/page.tsx`: listado completo.
- `src/app/[locale]/trips/[slug]/page.tsx`: detalle con facts, itinerario, galería, relacionados y CTA WhatsApp.
- `src/app/[locale]/universidades/page.tsx`: Landing Wonder Groups (B2B académico).
- `src/app/[locale]/empresas/page.tsx`: Landing Wonder Corporate (B2B empresarial).
- `src/app/[locale]/contacto/page.tsx`: contacto con CTA y datos.
- `src/data/trips.ts`: fuente única de viajes con traducciones por idioma.
- `src/data/empresas/destinations.ts`: destinos corporativos con traducciones ES/FR.
- `public/images/trips/`: imágenes por `slug`.
- `public/b2b/`: assets de secciones B2B (logos, videos, imágenes).
- `src/lib/whatsapp.ts`: sistema multi-contacto WhatsApp.

## Pendientes críticos
- **WhatsApp**: actualizar número y mensaje en `src/lib/whatsapp.ts` antes de release.
- **Imágenes**: reemplazar placeholders en `public/images/trips/*.jpg` por fotos reales y actualizar rutas en `src/data/trips.ts`.
- **Partners**: añadir logos reales en `public/partners` y apuntarlos en la sección de partners (cuando se implemente).
- **Dominio**: configurar `NEXT_PUBLIC_SITE_URL` para OG/canonicals antes de desplegar.

## Assets reutilizados (repo original)
- Video/póster de hero: `public/hero/video-hero.mp4`, `public/hero/captureVideo.webp`.
- Logos de partners (ProColombia, TourCert, Acotur, Sello de Paz) en `public/partners`.
- Placeholders de trips tomados de `/wonder-main-main/public/assets/images/homepage/Card*.webp` y `cano-cristales.jpg`.

## Despliegue
- Vercel (recomendado) o `next export` para GitHub Pages; no hay backend ni llamadas externas.
- Para `next export`: setear `OUTPUT=export` en Next 14 o usar `next.config.ts` con `output: 'export'` si se desea modo estático. Configurar `NEXT_PUBLIC_SITE_URL` para OG.
