---
task_id: "WT-2025-12-16-FASE1-CIERRE"
completed_at: 2025-12-18T18:55:00Z
executor: "agent"
actual_hours: 11.0
status: partial
---

# Acta de Entrega (Actualizada) — Cierre Fase 1 - Wonder Travel

## Resumen

Se dejó el repo en un estado limpio y ejecutable, manteniendo el protocolo `.orbital/` y la web activa en `wonder-catalog/`.
Se modernizó la sección de destinos corporativos: ahora el contenido se sincroniza desde Lovable (fuente de verdad) y se renderiza con un macrocomponente premium, escalable y 100% data-driven.

## Entregables Completados

- [x] E1.1 Hamburger Menu Mobile
- [x] E1.2 Cambiar Video Hero Empresas
- [x] E1.3 Cambiar Botón WhatsApp por Logo
- [x] E1.4 Simplificar Mapa Colombia
- [x] E1.5 Ajustar One-Liner Signature
- [ ] E2. Internacionalización (dimensionar + toggle)
- [ ] E3. Landings por Ciudad
- [ ] E4. Integraciones
- [ ] E5. Infraestructura (backup + dominio)
- [ ] E6. Cierre (deploy + entrega final)

## Cambios Principales (hasta ahora)

- `README.md` (root) — Repo minimizado: `.orbital/` + `wonder-catalog/`.
- `.gitignore` — Permite videos `*.mp4/*.webm` necesarios dentro de `wonder-catalog/public/`.
- `wonder-catalog/` — Proyecto web consolidado en el root (antes estaba bajo `v2.0/wonder-catalog`).
- `wonder-catalog/src/components/layout/navbar.tsx` — Menú hamburguesa mobile (overlay) + botón WhatsApp como ícono, con link dinámico por sección.
- `wonder-catalog/src/components/empresas/destinations-map.tsx` — Macrocomponente B2B “Destinos”: chips de destinos arriba (full-width), mapa interactivo y panel premium de detalle (hover/click sincronizados).
- `wonder-catalog/src/components/empresas/colombia-map.tsx` — Nuevo componente de mapa de Colombia con proyección y markers por coordenadas.
- `wonder-catalog/src/data/geo/colombia-110m.json` — Geometría Colombia (fuente: Natural Earth vía `world-atlas`).
- `wonder-catalog/src/components/empresas/colombia-map.tsx` — Mejora visual: gradientes + textura sutil, labels en hover/selección y animación del marker seleccionado.
- `wonder-catalog/src/components/empresas/colombia-map.tsx` — “Más vida”: capas de color (gradientes tipo biomas) y rutas animadas entre ciudades.
- `wonder-catalog/public/b2b/corporate/colombia-map-ai.png` — Base visual IA para el mapa (se usa como textura dentro del SVG, responsive).
- `wonder-catalog/public/b2b/corporate/colombia-map-ai.webp` — Versión optimizada (mucho más liviana) usada por defecto para performance.
- `wonder-catalog/scripts/sync-lovable-corporate-destinations.mjs` — Sincronización automatizada desde Lovable: extrae destinos (DU) + descarga imágenes.
- `wonder-catalog/src/data/empresas/lovable-corporate-destinations.json` — Fuente de verdad sincronizada desde Lovable (copy + actividades + imágenes).
- `wonder-catalog/src/data/empresas/destinations.ts` — Capa local: define orden/activación y coordenadas (lat/lon) para el mapa.
- `wonder-catalog/public/b2b/corporate/destinations/` — Imágenes de destinos descargadas desde Lovable para uso local (paths estables).
- `wonder-catalog/src/components/empresas/destination-detail-panel.tsx` — Panel de detalle premium: hero image + tagline + experiencias (data-driven).
- `wonder-catalog/src/components/empresas/colombia-map.tsx` — Fix tooltip: colores con fallback (evita tooltip negro/invisible en SVG).
- `wonder-catalog/src/components/home/hero.tsx` — Copy ajustado a “Latinoamérica” en el hero de Signature.
- `wonder-catalog/public/b2b/videos/hero-empresas.mp4` — Video hero Empresas actualizado (Colombia/Cartagena, enfoque corporate) sin watermark, sin audio.
- `wonder-catalog/public/b2b/videos/hero-empresas.webm` — Fallback WebM del video hero Empresas actualizado (sin watermark, sin audio).

## Operación (Cómo mantenerlo)

### Sincronizar destinos desde Lovable (fuente de verdad)

Desde `wonder-catalog/`:

- `npm run sync:lovable:corporate-destinations`
- Para forzar re-descarga de imágenes/JSON (si cambian en Lovable): `npm run sync:lovable:corporate-destinations -- --force`

### Dónde se edita cada cosa

- Copy + imagen + experiencias por destino (sin tocar código): `wonder-catalog/src/data/empresas/lovable-corporate-destinations.json` (se regenera con la sync).
- Orden/activación + coordenadas para el mapa: `wonder-catalog/src/data/empresas/destinations.ts`.
- UI/maquetación: `wonder-catalog/src/components/empresas/destinations-map.tsx` y `wonder-catalog/src/components/empresas/destination-detail-panel.tsx`.

## Validación

- Dev server OK en `http://localhost:3000`
- Rutas OK: `/`, `/trips`, `/contacto`, `/universidades`, `/empresas`
- `next build` OK

## Pendientes Inmediatos (Quick Wins)

- Afinar coordenadas/posición de markers (si se requiere más precisión por destino).
- Definir proceso de actualización: cuándo correr `npm run sync:lovable:corporate-destinations`.
- (Opcional) Pipeline de optimización a WebP/AVIF para imágenes descargadas (si se agrega `cwebp`/`sharp` al entorno).
