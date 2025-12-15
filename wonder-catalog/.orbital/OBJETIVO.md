---
task_id: wt-2025-12-14-sections
created_by: orbix
created_at: 2025-12-14T21:05:00
deadline: 2025-12-16T14:00:00
priority: high
estimated_hours: 8
supabase_project_id: fac8eeaa-4ac5-44c9-849f-8fbed239b496
---

# Objetivo: Crear Secciones Universidades y Empresas

## Contexto

Wonder Travel tiene un catálogo web (Fase 1) ya funcional con la sección B2C "Destinos".

El alcance se amplió para incluir dos nuevas secciones B2B:
1. **Universidades** - Grupos universitarios (MBA, LLM, MPA)
2. **Empresas** - Viajes corporativos (Pro Colombia)

La reunión de cierre es el **martes 16 dic 3pm**. Objetivo: mostrar avance significativo.

## Entregables

- [ ] Descargar assets de referencias (logos, fotos, certificaciones)
- [ ] Crear página `/universidades` con estructura completa
- [ ] Crear página `/empresas` con estructura base
- [ ] Actualizar navegación (renombrar Destinos → Wonder Signature, agregar links)
- [ ] Crear placeholders para landings por ciudad `/empresas/[ciudad]`

## Criterios de Aceptación

1. Ambas páginas son navegables y responsive
2. Contenido en inglés (idioma default)
3. Contactos diferenciados por sección funcionan
4. Assets cargados localmente (no hotlinks)

## Notas de ORBIX

### Referencias scrapeadas

**Universidades:** https://wondertravel.co/es/groups
**Empresas:** https://wonder-travel-clone.lovable.app

Screenshots guardados en: `../../.playwright-mcp/`
- `wonder-groups-full.png`
- `wonder-empresas-full.png`

### Assets a descargar

**Desde wondertravel.co:**
```
/assets/other-brands/clients-brands/chicago.png
/assets/other-brands/clients-brands/columbia-business-school.png
/assets/other-brands/clients-brands/harvard.png
/assets/other-brands/clients-brands/MIT.png
/assets/other-brands/clients-brands/standford.png
/assets/other-brands/clients-brands/University_of_California-Berkeley.png
/assets/other-brands/clients-brands/wharton_S_rev_rgb.png
/assets/other-brands/clients-brands/ypo.png
/assets/other-brands/clients-brands/Zemoga.png
/assets/other-brands/clients-brands/columbia.png
/assets/images/homepage/TourCertSiegel.svg
/assets/images/homepage/sello.png
/assets/other-brands/acotur.png
/assets/other-brands/atta-2.png
/assets/images/groupsLanding/1-2.jpg (hasta 7-2.jpg)
```

**Desde wonder-travel-clone.lovable.app:**
```
/assets/team-collaboration-D2elFJHm.jpg
/assets/adventure-activities-BPnUcrym.jpg
/assets/transportation-AZsZTfy1.jpg
/assets/colombia-destinations-map-CkYWHMkB.png
```

### Contactos por sección

| Sección | WhatsApp | Email |
|---------|----------|-------|
| Wonder Signature | +57 314 3055465 | travelbuddy@wondertravel.co |
| Universidades | +57 310 2361480 | travelbuddygroups@wondertravel.co |
| Empresas | +57 310 2361480 | travelbuddygroups@wondertravel.co |

### Estructura Universidades (copiar de /es/groups)

1. Hero con video/imagen
2. Quiénes Somos
3. 3 Pilares (Servicio, Experiencias, Seguridad)
4. Qué es Wonder Groups (MBA, LLM, MPA)
5. Impacto (+7,000 viajeros, +25 destinos)
6. Logos universidades (Chicago, Harvard, MIT, Stanford, Berkeley, Wharton, Columbia)
7. Certificaciones (TourCert, Sello Paz)
8. Testimonios
9. CTA contacto

### Estructura Empresas (copiar de clone lovable)

1. Hero corporate
2. Who We Are + 3 pillars
3. Stats (+50 Companies, +80 NPS)
4. Our Services (3 cards)
5. Destinations (mapa + 8 ciudades)
6. Contact Form
7. Info contacto

### Bloqueado (no hacer)

- Contenido landings por ciudad → esperando JP
- Experiencias nuevas Signature → esperando JP
- Links WeTravel → esperando JP

---

## Cómo entregar

Al completar, crear `ACTA_ENTREGA.md` en esta misma carpeta con:

```yaml
---
task_id: wt-2025-12-14-sections
completed_at: [fecha ISO]
executor: [tu nombre]
actual_hours: [horas reales]
status: completed | partial | blocked
---
```

Y secciones:
- **Resumen:** Lo que se hizo
- **Entregables Completados:** Checklist actualizado
- **Pendientes:** Lo que quedó sin hacer y por qué
- **Para ORBIX:** Nuevas tareas sugeridas (si hay)
