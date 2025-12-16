# Protocolo HANDOFF - Instrucciones para Ejecutores

Este directorio contiene la tarea asignada por **ORBIX** (Orbital Lab).

## Flujo de Trabajo

```
1. Lee OBJETIVO.md        -> Entender la tarea
2. Trabaja en el codigo   -> Implementar entregables
3. Crea ACTA_ENTREGA.md   -> Documentar lo hecho
4. Commit + Push          -> Entregar
```

## Archivos

| Archivo | Quien lo crea | Proposito |
|---------|---------------|-----------|
| `OBJETIVO.md` | ORBIX | Tarea asignada, entregables, criterios |
| `ACTA_ENTREGA.md` | **Tu (ejecutor)** | Documentar que hiciste |
| `config.yaml` | ORBIX | Metadata del proyecto |
| `historial/` | ORBIX | Actas archivadas |

## Como Entregar

Cuando termines (parcial o total), crea `ACTA_ENTREGA.md` con este formato:

```markdown
---
task_id: [copiar de OBJETIVO.md]
completed_at: 2025-XX-XXTXX:XX:XX
executor: [tu nombre o "agent"]
actual_hours: [horas reales trabajadas]
status: completed | partial | blocked
---

# Acta de Entrega

## Resumen

[1-3 parrafos de que hiciste]

## Entregables Completados

- [x] E1.1 - Descripcion del entregable
- [x] E1.2 - Otro entregable
- [ ] E1.3 - Pendiente (explicar por que)

## Cambios Principales

- `archivo1.tsx` - Que hace
- `archivo2.tsx` - Que hace
- ...

## Problemas Encontrados

[Si hubo bloqueantes o decisiones importantes]

## Para ORBIX

```yaml
new_tasks:
  - title: "Tarea que surgio durante el trabajo"
    priority: medium
    estimated_hours: 2

update_project:
  current_status: "Descripcion del estado actual"
```

---

**Ejecutor:** [nombre]
**Fecha:** [fecha]
```

## Despues de Entregar

1. **Commit** el ACTA_ENTREGA.md junto con tu codigo
2. **Push** a main (o PR si prefieres review)
3. **Avisa** a ORBIX: `/handoff revisar axis-wondertravel`

## Notas

- El `task_id` en el frontmatter conecta con Supabase
- Si el trabajo es parcial, usa `status: partial` y lista que falta
- Si estas bloqueado, usa `status: blocked` y explica por que
- Puedes sugerir nuevas tareas en `new_tasks`

---

*Protocolo HANDOFF v1.0 - Orbital Lab*
