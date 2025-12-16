---
task_id: "WT-2025-12-16-FASE1-CIERRE"
created_at: "2025-12-16T15:40:21"
assigned_by: "orbix"
priority: "high"
estimated_hours: 16
deadline: "2025-12-23"
status: "assigned"
---

# OBJETIVO: Cierre Fase 1 - Wonder Travel

## Contexto

Catálogo digital para Wonder Travel (turismo corporativo/educativo). Demo aprobada por JP (CEO) el 16 dic 2025. Se requieren ajustes finales de UI, implementar idioma inglés, y cerrar el proyecto antes de fin de año.

**Cliente:** Wonder Travel (Juan Pablo Gaviria - CEO)
**Vertical:** AXIS (Web Development)
**Valor:** $2,000,000 COP
**Deadline:** 23 dic 2025

## Stack Técnico

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Deploy:** Vercel
- **Idiomas:** next-intl o similar (a implementar)

## Entregables

### E1. Ajustes UI (Prioridad Alta) — 18 dic

#### E1.1 Hamburger Menu Mobile (~1.5h)
- [ ] Implementar menú hamburguesa para navegación móvil
- [ ] Debe permitir acceso a: Signature, Universidades, Empresas
- [ ] Animación suave de apertura/cierre
- [ ] Cerrar al hacer click en enlace o fuera del menú

#### E1.2 Cambiar Video Hero Empresas (~1h)
- [ ] Reemplazar video actual (tiene personas asiáticas)
- [ ] Generar nuevo video con IA (estilo colombiano/latinoamericano)
- [ ] Mantener formato actual: WebM + MP4 fallback
- [ ] Comprimir con FFmpeg (~6MB máximo)

#### E1.3 Cambiar Botón WhatsApp por Logo (~0.5h)
- [ ] En header: reemplazar texto "WhatsApp" por icono de WhatsApp
- [ ] Aplicar en todas las secciones (Signature, Universidades, Empresas)
- [ ] Mantener funcionalidad de link al número correcto por sección

#### E1.4 Simplificar Mapa Colombia (~1h)
- [ ] Sección Empresas: quitar números/estadísticas del mapa
- [ ] Dejar solo el mapa grande de Colombia
- [ ] Mantener las 8 ciudades clickeables
- [ ] Requerimiento de Pro Colombia

#### E1.5 Ajustar One-Liner Signature (~0.5h)
- [ ] Cambiar "Colombia" por "Latinoamérica" en hero de Signature
- [ ] Razón: el video tiene tomas de Perú/Machu Picchu

### E2. Internacionalización (Prioridad Alta) — 17-19 dic

#### E2.1 Dimensionar Implementación (~1h)
- [ ] Evaluar mejor approach: next-intl vs i18next vs manual
- [ ] Listar todos los strings a traducir
- [ ] Estimar horas totales
- [ ] Si >6h, documentar para Fase 2

#### E2.2 Implementar Toggle ES/EN (si factible)
- [ ] Crear estructura de traducciones
- [ ] Implementar toggle en header
- [ ] Traducir contenido principal a inglés
- [ ] Prioridad: inglés primero, francés en Fase 2

### E3. Landings por Ciudad (Prioridad Alta) — 20 dic

#### E3.1 Crear Landings Empresas/ProColombia (~4h)
- [ ] Recibir contenido de JP (ya tiene en Lovable)
- [ ] Crear landing para cada ciudad:
  - Cartagena
  - Medellín
  - Bogotá
  - Santa Marta/Tayrona
  - Eje Cafetero
  - (otras según JP)
- [ ] Cada landing debe tener descripción de servicios
- [ ] Mantener estilo visual consistente con /empresas

### E4. Integraciones (Prioridad Media) — 19 dic

#### E4.1 Integrar WeTravel en Signature (~1h)
- [ ] Esperar links de JP
- [ ] Agregar botón "Reservar" que lleve a WeTravel
- [ ] Aplicar en cada experiencia Signature

#### E4.2 Agregar Botón Buy Travel (~0.5h)
- [ ] Link a plataforma de pagos de Wonder
- [ ] Ubicar en lugar visible pero no intrusivo

### E5. Infraestructura (Prioridad Media) — 20-22 dic

#### E5.1 Backup GCP (~2h)
- [ ] Contactar a Sebastián Rivera (+57 318 8134406)
- [ ] Obtener acceso a GCP actual
- [ ] Exportar base de datos
- [ ] Exportar assets/media
- [ ] Documentar configuración
- [ ] Entregar archivo de backup a JP

#### E5.2 Configurar Dominio Final (~0.5h)
- [ ] Definir dominio con JP (wondertravel.co o subdominio)
- [ ] Configurar NEXT_PUBLIC_SITE_URL
- [ ] Verificar SSL/HTTPS

### E6. Cierre (Prioridad Alta) — 23 dic

#### E6.1 Deploy Producción
- [ ] Verificar todas las features funcionando
- [ ] Deploy a Vercel producción
- [ ] Conectar dominio final
- [ ] Test en móvil y desktop

#### E6.2 Entrega Final
- [ ] Validar con JP que todo está correcto
- [ ] Entregar backup GCP
- [ ] Documentar accesos (Vercel, etc.)
- [ ] Dar de baja servicios GCP innecesarios

## Criterios de Aceptación

1. **Mobile-first:** Navegación funciona perfectamente en móvil
2. **Idioma inglés:** Al menos toggle funcional ES/EN
3. **Landings ciudad:** Todas las ciudades requeridas por Pro Colombia
4. **Performance:** Videos <6MB, LCP <2.5s
5. **Backup:** Archivo completo de GCP entregado

## Notas Importantes

- **JP no para en diciembre** (temporada alta turismo) - responde rápido
- **Alejandro tiene doble rol:** Wonder Travel + Orbital Lab
- **Wonder rediseña experiencias:** NO cargar las actuales, ellos las suben después
- **Video empresas:** Wonder lo edita para quitar tomas de Perú

## Contactos

| Nombre | Rol | Contacto |
|--------|-----|----------|
| Juan Pablo Gaviria | CEO (decisor) | WhatsApp |
| Alejandro Guerrero | Operaciones | WhatsApp |
| Sebastián Rivera | IT/Sistemas | +57 318 8134406 |

## Timeline

```
17 dic: Contactar Sebastián + Dimensionar idiomas
18 dic: Ajustes UI (hamburger, video, WhatsApp, mapa)
19 dic: WeTravel + Buy Travel
20 dic: Landings ciudad + Backup GCP
22 dic: Dominio final
23 dic: Deploy + Entrega final
```

---

**Asignado por:** ORBIX
**Fecha:** 2025-12-16
**Proyecto Supabase:** fac8eeaa-4ac5-44c9-849f-8fbed239b496
