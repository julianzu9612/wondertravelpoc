# Hoja de Ruta Operativa (tracking)

## Decisiones pendientes (cerrar antes de dev)
- Tipografía: ¿Playfair + Inter/Poppins o sans única tipo Termina?
- Hero: ¿video loop corto o imagen estática? ¿Asset disponible?
- Partners/ratings: lista de logos y valores a mostrar.
- WhatsApp: número y copy final para CTA/mensaje prellenado.

## Checklist por fase
- Fase 1 — Diseño
  - [ ] Mood/Referencias bloqueadas (hero, cards, confianza).
  - [ ] Tipos y paleta confirmadas.
  - [ ] Wireframes rápidos (home, detail, contacto).
  - [ ] Estados interactivos definidos (hover/focus/active).
- Fase 2 — Tokens y datos
  - [ ] Paleta y tipografía en Tailwind/CSS vars.
  - [ ] Component tokens (botones, badges, cards, sombras, radios).
  - [ ] `src/data/trips.json` base copiado y validado.
  - [ ] Convención de imágenes creada y paths asignados.
- Fase 3 — Scaffolding
  - [ ] Next 14 + Tailwind + shadcn inicializado.
  - [ ] Assets de marca en `public/brand`.
  - [ ] Data en `src/data/trips.json`.
  - [ ] Layout global (Navbar/Footer/WhatsAppFloating) esqueleto.
- Fase 4 — Construcción UI
  - [ ] Home: Hero, SearchBar, FeaturedGrid, CampaignBanner, TrustBand, Testimonials (opc).
  - [ ] Detalle: TripHero, TripFacts, BadgeList, Itinerary, Gallery, StickyCTA, Related (opc).
  - [ ] Contacto: CTA principal, info, redes, legal.
- Fase 5 — Motion/QA
  - [ ] Microanimaciones aplicadas (stagger/hover/focus).
  - [ ] A11y revisada (semántica, focus, contrastes).
  - [ ] Perf/Lighthouse móvil 95+ revisado.
  - [ ] TODOs documentados (WhatsApp final, assets pendientes).

## Bitácora rápida
- 2025-XX-XX: Se crea ROADMAP y tracking, pendiente cerrar decisiones de diseño base.
- 2025-XX-XX: Scaffolding Next + Tailwind + shadcn; Home con hero/buscador/destacados/confianza; listado /trips y detalle con itinerario/CTA; añadidos banner de campaña, testimonios, galería y relacionados; página /contacto.
- 2025-XX-XX: Placeholders de imágenes en /public/images/trips y hero con imagen; pendiente decidir partners finales y copy/numero WhatsApp.
- 2025-XX-XX: Se añade sección de partners con placeholders y README con pendientes críticos (WhatsApp, imágenes reales, logos).
