# Hoja de Ruta — Definición Funcional y Técnica

## 1) Propósito y alcance
- Sitio catálogo estático de alta conversión a WhatsApp, sin backend ni BD.
- Páginas: Home `/`, Detalle `/trips/[slug]`, Contacto `/contacto`. Opcionales: FAQs, Campañas/landing específicas reutilizando los mismos bloques.
- Admin sin código: agregar/editar viajes via JSON + imágenes en `public/images/trips`.

## 2) Estrategia UX/UI (diseño primero)
- Vibe: aventura premium, hero inmersivo (foto/video), overlay oscuro, acentos naranjas, tipografía elegante en títulos + sans legible en cuerpo.
- Mobile-first; CTA WhatsApp siempre accesible (hero, sticky en detail, flotante).
- Confianza: ratings/partners/testimonios visibles sin depender de integraciones externas.
- Cards grandes, respiro de blancos, microanimaciones suaves (stagger en grids, hover claro).

## 3) Información y datos
- Fuente única: `src/data/trips.json` con esquema del brief (slug, title, price, duration, difficulty, categories[], images[], itinerary[], isFeatured).
- Imágenes: `/public/images/trips/{slug}-{n}.jpg` (optimizar peso, usar next/image).
- Configurables: número/copy de WhatsApp (pendiente definir); banners de campaña hardcoded.

## 4) Arquitectura técnica
- Stack: Next.js 14 (App Router, SSG), TypeScript, Tailwind CSS, shadcn/ui (Radix).
- Rutas estáticas con `generateStaticParams`; sin llamadas runtime.
- Design tokens en Tailwind config + CSS vars: paleta (naranja #F97316/#EA580C, gris oscuro #1F2937, blanco), tipografía (Playfair títulos + Inter/Poppins cuerpo o sans única si se decide), radios/espaciados/sombras.
- Componentes base: `Navbar`, `Footer`, `WhatsAppFloating`, `Button`, `Badge`, `Card`, `Gallery`, `ItineraryList`.
- Home sections: `Hero`, `SearchBar` (texto + chips), `FeaturedGrid`, `CampaignBanner`, `TrustBand` (ratings + partners), `Testimonials`.
- Trip detail: `TripHero`, `TripFacts`, `BadgeList`, `Itinerary`, `Gallery`, `StickyCTA`, `RelatedTrips` opcional.
- Contacto: `ContactHero`, `ContactInfo`, `ContactActions`.

## 5) Interacción y motion
- Micro: fade/slide-in, stagger en grids, hover con elevación/sombra sutil.
- Macro opcional: parallax suave en hero/galleries si no impacta perf. Usar Framer Motion si aporta; mantener dependencias mínimas.

## 6) Accesibilidad y SEO
- Semántica: header/nav/main/section/article/footer; aria-labels en CTA WhatsApp y controls.
- Contraste AA; focus states visibles; navegación teclado.
- `generateMetadata`, OG/Twitter tags, JSON data coerente con slugs.

## 7) Performance y despliegue
- `next/image`, lazy en galerías/testimonios; evitar librerías pesadas.
- Lighthouse móvil ≥95 objetivo.
- Despliegue: Vercel free (build Next) o `next export` para GitHub Pages.

## 8) Fases de trabajo
1. Decisiones de diseño: tipografía final, hero con video vs. imagen, set de partners/ratings, número/copy WhatsApp.
2. Tokens y estructura: configurar Tailwind/shadcn, definir paleta/tipos/espaciados, preparar data schema e imágenes.
3. Scaffolding: crear proyecto Next + Tailwind + shadcn; copiar assets brand y `trips.json`.
4. Construcción UI: layout global, home (hero, search, destacados, confianza), detail (hero, facts, itinerario, CTA), contacto.
5. Motion/QA: microanimaciones, accesibilidad, perf/Lighthouse, ajustes finales.

## 9) Riesgos y mitigaciones
- Contenido/imagenes pesadas: optimizar y limitar tamaños; fallback en hero si no hay video.
- Número/copy WhatsApp no definido: dejar TODO claro en código y docs.
- Partners/ratings inciertos: placeholders con fácil reemplazo.
