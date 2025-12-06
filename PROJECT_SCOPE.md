# Wonder Travel Catálogo v2.0 — Alcance Conceptual

## Objetivo
- Sitio catálogo estático (Next 14, SSG) enfocado en conversión a WhatsApp, sin backend ni BD.
- Despliegue en Vercel (free) o export estático (GitHub Pages) sin costos recurrentes.
- Fácil de mantener: agregar viajes es agregar objetos JSON e imágenes; sin panel admin.

## Principios de diseño
- Mobile-first, carga muy rápida, uso de `next/image` y assets optimizados.
- Look & feel inspirado en wondertravel.co y referencias premium de aventura: hero inmersivo, overlay oscuro, acentos naranjas, tipografía elegante para títulos y sans limpia para cuerpo.
- Navegación sencilla: pocas rutas, CTA visible en todo momento, WhatsApp flotante.
- Confianza: ratings/badges/partners visibles, testimonios cortos, contacto claro.

## Páginas y bloques
- Home `/`
  - Hero full-screen (foto/video) con titular aspiracional y CTA principal a WhatsApp.
  - Buscador visual (texto + chips de categorías) operando sobre data estática.
  - Grid de viajes destacados (`isFeatured`), cards con overlay, precio desde, duración, dificultad, categorías y CTA “Ver más”.
  - Sección de campañas/promos (banner opcional hardcoded).
  - Banda de confianza: ratings estáticos, testimonios breves, logos de partners/certificaciones.
  - Badge flotante de WhatsApp.
- Detalle de viaje `/trips/[slug]`
  - Hero con imagen principal, facts (duración, dificultad, precio desde), badges de categorías.
  - CTA WhatsApp prominente y sticky en mobile; link con mensaje prellenado (número hardcodeado, pendiente de confirmar).
  - Galería simple y itinerario día a día.
  - Sección de confianza breve (partners/testimonios) y viajes relacionados opcional.
- Contacto `/contacto`
  - CTA grande a WhatsApp, email/teléfono/dirección, links a redes; formulario simple opcional (sin backend, puede ser mailto/no-op).

## Datos y contenido
- Fuente única: `src/data/trips.json` con el esquema del brief (slug, título, shortDescription, price, duration, difficulty, categories, images[], itinerary[], isFeatured).
- Imágenes en `public/images/trips/...`; naming consistente con `slug`.
- Contenidos de marca: logos/patterns desde `assets/brand/`.
- WhatsApp: dejar número/mensaje hardcodeados con TODO para actualizar (brief: +57 312 450 1242; web actual usa +57 311 515 0177).

## UI/Branding
- Paleta: primario naranja (#F97316) con hover (#EA580C), fondo blanco, texto gris oscuro; opcional acentos oscuros inspirados en el site actual.
- Tipos sugeridos: Playfair (títulos) + Inter/Poppins (cuerpo); si se prefiere consistencia con el site actual, usar sans única (termina-like).
- Patrones/fondos: usar assets de marca y gradientes suaves, sin cargar peso innecesario.

## Performance y despliegue
- SSG con `generateStaticParams`; sin llamadas externas en tiempo de ejecución.
- Minimizar dependencias (Tailwind + shadcn/ui); sin librerías de fechas/buscadores pesados.
- Objetivo Lighthouse 95+ móvil; optimizar imágenes y lazy-load donde aplique.
- Hosting: Vercel free (build Next) o `next export` para GitHub Pages; sin servicios pagos.

## Pendientes de definición
- Tipografía final (duo Playfair/Inter vs. sans única).
- Uso de video en hero o solo imagen estática.
- Lista de partners/logos definitivos y ratings a mostrar.
- Número y copy final de WhatsApp; mensaje prellenado exacto.
