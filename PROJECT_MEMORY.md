# PROJECT MEMORY - Wonder Travel Catálogo Digital
## Archivo de Memoria Permanente del Agente PM

---

## 🎯 MISIÓN DEL AGENTE

**Rol**: Tech Lead & Developer del proyecto Wonder Travel (Fase 1: Catálogo Digital)

**Responsabilidades**:
1.  **Desarrollo Ágil**: Construir el catálogo estático en Next.js.
2.  **Simplificación**: Eliminar complejidad innecesaria (backend, auth, pagos).
3.  **Preparación para IA**: Estructurar datos (JSON) para que sean fáciles de editar por un agente en Fase 2.

---

## 📋 CONTEXTO CRÍTICO (PIVOTE 2 DIC 2025)

### Situación Actual
- **Cliente**: Wonder Travel (Juan Pablo Gaviria - CEO).
- **Cambio de Rumbo**: El cliente confirmó que **NO** necesita un sistema complejo de reservas ni backend.
- **Necesidad Real**: Un sitio web "escaparate" (catálogo) muy elegante, rápido y fácil de actualizar, que dirija todo el tráfico a **WhatsApp**.
- **Presupuesto**: Fase 1 ($800) + Fase 2 ($800-1200).

### Stakeholders
- **Juan Pablo Gaviria**: CEO. Prioriza simplicidad y autoservicio.
- **Julián Zuluaga**: Consultor Lead.

---

## 🎯 OBJETIVOS DEL PROYECTO

### Objetivo Fase 1: Catálogo Digital (Deadline: 7 Dic)
Crear un sitio web estático de alto impacto visual.
1.  **Cero Mantenimiento**: Sin servidores, sin base de datos (Vercel Free Tier).
2.  **Conversión Directa**: Todo click lleva a iniciar chat en WhatsApp.
3.  **Performance Extrema**: Carga instantánea (Static Site Generation).

### Objetivo Fase 2: Agente de Contenido (Q1 2026)
Crear un "Editor IA" que permita a Juan Pablo actualizar el catálogo enviando notas de voz o texto, sin entrar a un CMS.

---

## 🛠️ STACK TECNOLÓGICO (SIMPLIFICADO)

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Shadcn/ui
- **Datos**: Archivos JSON/MDX locales (en `src/data`)
- **Imágenes**: `public/images` (optimizado con next/image)
- **Hosting**: Vercel
- **Integraciones**: WhatsApp API Link (CTA)

---

## 📂 ESTRUCTURA DEL PROYECTO

```
wondertravel/
├── wonder-travel-next/        # Código Fuente
│   ├── src/app/              # Páginas
│   ├── src/components/       # UI Kit
│   ├── src/data/             # "Base de Datos" JSON
│   └── public/               # Assets
├── commercial/                # Documentos comerciales
├── _legacy_context/           # Archivo histórico (NO TOCAR)
├── PROJECT_MEMORY.md          # Este archivo
└── README.md                  # Entry point
```

---

## 🚨 REGLAS DE ORO

1.  **KISS (Keep It Simple, Stupid)**: Si requiere servidor, NO lo hagas.
2.  **Datos Estáticos**: Todo el contenido debe vivir en el repo.
3.  **Mobile First**: El 80% del tráfico será móvil.
4.  **WhatsApp es el Rey**: El objetivo único es abrir chat.

---

**Última Actualización**: 2025-12-03 (Post-Pivote)
**Estado**: Iniciando Fase 1 - Limpieza y Setup
