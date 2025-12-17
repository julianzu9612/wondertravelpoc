# Wonder Travel (Axis) — Workspace mínimo

Este repo quedó intencionalmente “limpio” para enfocarse en:

- `.orbital/`: Protocolo HANDOFF + objetivo activo.
- `wonder-catalog/`: Sitio web (Next.js) que se despliega/ejecuta.

## Correr la web

```bash
cd wonder-catalog
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
```

## Respaldo

Se creó un tag local `backup/pre-cleanup-*` y además se movió el contenido anterior fuera del repo a una carpeta `wondertravel__archive_pre_cleanup_*` (en el mismo directorio padre).

