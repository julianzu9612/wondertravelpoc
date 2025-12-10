# 🚀 Wonder Travel - Catálogo Digital + Agente IA

**Cliente**: Wonder Travel (Juan Pablo Gaviria)
**Consultora**: Orbital Lab
**Estado**: Fase 1 - Desarrollo de Catálogo Digital

---

## 🎯 Nuevo Objetivo (Pivote Dic 2025)

El proyecto ha evolucionado de una migración compleja a una solución ágil y moderna centrada en la **simplicidad y el autoservicio**.

**La Solución:**
1.  **Fase 1: Catálogo Digital (Next.js)**: Un sitio web estático, ultra-rápido y elegante que sirve como catálogo de experiencias. Sin backend complejo, sin base de datos, sin pasarela de pagos.
    *   **CTA Principal**: WhatsApp.
    *   **Datos**: Archivos locales (JSON/MDX) fáciles de editar.
2.  **Fase 2: Agente IA**: Un asistente inteligente que permite al cliente actualizar el catálogo simplemente "conversando" o enviando notas de voz/texto, eliminando la necesidad de un CMS tradicional.

---

## 📂 Estructura Simplificada

```
wondertravel/
├── wonder-travel-next/      # 💻 El Proyecto: Next.js 14 + Tailwind + Shadcn
│   ├── src/app/            # Rutas y páginas
│   ├── src/data/           # Base de datos local (JSON/MDX)
│   └── public/             # Imágenes y assets
├── commercial/              # 📄 Propuestas y acuerdos comerciales
├── referencias/             # 🔍 Benchmarks y material de inspiración
├── _legacy_context/         # 📦 Archivo: Análisis y código del enfoque anterior (GCP/Django)
└── PROJECT_MEMORY.md        # 🧠 Memoria y contexto del proyecto
```

---

## 🚀 Roadmap Actualizado

### Fase 1: Catálogo Digital (Deadline: 7 Dic)
- [ ] **Setup Limpio**: Configurar Next.js para sitio estático (sin llamadas a API fallidas).
- [ ] **Estructura de Datos**: Definir esquema JSON para Viajes y Categorías.
- [ ] **Migración de Contenido**: Pasar datos de `mockData` a estructura final.
- [ ] **UI Premium**: Ajustar diseño para enfoque "Catálogo de Lujo".
- [ ] **Deploy**: Vercel (Free Tier).

### Fase 2: Agente de Contenido (Q1 2026)
- [ ] Implementar script que lea inputs de texto/audio y actualice los JSON del catálogo.

---

## 🛠️ Stack Tecnológico
- **Framework**: Next.js 14 (App Router)
- **Estilos**: Tailwind CSS + Shadcn/UI
- **Datos**: JSON estático (No Database)
- **Hosting**: Vercel
- **Contacto**: Link directo a WhatsApp API

---

## 📌 Estado actual (Dic 2025)
- El proyecto activo vive en `v2.0/wonder-catalog` (Next 16 + Tailwind v4). Se despliega desde el repo público `julianzu9612/wondertravelpoc` (Root Directory: `wonder-catalog`).
- Acta y detalles operativos en `ACTA_ENTREGA.md` (raíz) y `v2.0/DEPLOYMENT.md`.
- Deploy Vercel (Hobby): comandos `npm install` / `npm run build`; variable `NEXT_PUBLIC_SITE_URL` con el dominio Vercel.

---

*Orbital Lab - 2025*
