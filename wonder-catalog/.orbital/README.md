# .orbital/ — Protocolo HANDOFF

Este directorio contiene los archivos de coordinación entre ORBIX y los ejecutores (humanos o agentes).

## Archivos

| Archivo | Quién lo crea | Propósito |
|---------|---------------|-----------|
| `OBJETIVO.md` | ORBIX | Tarea asignada con contexto y entregables |
| `ACTA_ENTREGA.md` | Ejecutor | Resumen de lo completado |
| `config.yaml` | ORBIX (bootstrap) | Metadata del proyecto |
| `historial/` | Sistema | Actas archivadas |

## Flujo de Trabajo

```
1. ORBIX crea OBJETIVO.md con la tarea
2. Ejecutor lee OBJETIVO.md
3. Ejecutor trabaja en el código
4. Ejecutor crea ACTA_ENTREGA.md (aquí, NO en root)
5. Ejecutor hace commit y push
6. ORBIX lee el acta y procesa
```

## Instrucciones para Ejecutores

### Al recibir una tarea:
1. Lee `OBJETIVO.md` completo
2. Revisa los entregables listados
3. Trabaja en el código del repo

### Al completar:
1. **Crea `ACTA_ENTREGA.md` DENTRO de `.orbital/`** (no en el root del repo)
2. Usa el formato con frontmatter YAML
3. Commit con mensaje: `task: {título corto de la tarea}`
4. Push a main

### Formato del ACTA_ENTREGA.md

```yaml
---
task_id: {copiar del OBJETIVO.md}
completed_at: {timestamp ISO, ej: 2025-12-14T15:30:00}
executor: {tu nombre o "agente"}
actual_hours: {horas reales trabajadas}
status: completed | partial | blocked
---

# Acta de Entrega

## Resumen
{Descripción breve de lo que se hizo}

## Entregables Completados
- [x] Entregable 1
- [x] Entregable 2
- [ ] Entregable pendiente (si aplica)

## Cambios Realizados
{Lista de archivos modificados/creados y qué se hizo en cada uno}

## Notas para ORBIX
{Observaciones, bloqueantes encontrados, sugerencias de siguientes pasos}

## Para ORBIX (opcional)
```yaml
new_tasks:
  - title: "Siguiente tarea sugerida"
    priority: medium
    estimated_hours: 2
update_project:
  current_status: "Fase 1 completada, pendiente Fase 2"
```
```

## Importante

- **ACTA_ENTREGA.md va en `.orbital/`**, NO en el root del repo
- El `task_id` debe coincidir con el del OBJETIVO.md
- Si hay tareas pendientes o nuevas sugeridas, listarlas en "Para ORBIX"
- Status puede ser: `completed`, `partial` (entrega parcial), `blocked` (bloqueado)
