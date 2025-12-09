# 🗺️ PLAN MAESTRO: Wonder Travel - Fase 1 (Catálogo Digital)

**Fecha**: 03 Diciembre 2025
**Estado**: Borrador para Aprobación
**Objetivo**: Lanzar un catálogo digital estático, ultra-rápido y premium que convierta visitantes en conversaciones de WhatsApp.

---

## 1. 🎯 Alcance y Requerimientos

### 1.1. Objetivo de Negocio
Eliminar la complejidad técnica (backend, base de datos, pagos) para ofrecer una solución **"Cero Mantenimiento"** que el cliente pueda gestionar fácilmente (en Fase 2 con IA) y que reduzca los costos operativos a $0 (Vercel Free Tier).

### 1.2. Alcance Funcional (MVP)
*   **Home Page**:
    *   Hero Section con video/imagen de alto impacto.
    *   Buscador visual (filtrado en tiempo real).
    *   Grid de "Viajes Destacados".
    *   Sección de Categorías (Aventura, Cultural, etc.).
*   **Página de Detalle de Viaje (`/trips/[slug]`)**:
    *   Galería de imágenes.
    *   Información clave (Duración, Nivel, Precio desde).
    *   Itinerario resumido.
    *   **CTA Principal**: Botón "Consultar en WhatsApp" (pre-llena mensaje con nombre del viaje).
*   **Páginas Estáticas**:
    *   Quiénes Somos (Historia breve).
    *   Contacto.
*   **Funcionalidades Técnicas**:
    *   **Búsqueda**: Filtrado instantáneo (Client-side) sobre el JSON de viajes.
    *   **SEO**: Metadatos estáticos generados para cada viaje.
    *   **Performance**: Score 95+ en Lighthouse (Core Web Vitals).

### 1.3. Lo que NO incluye (Out of Scope)
*   ❌ Sistema de Usuarios / Login.
*   ❌ Pasarela de Pagos (Wompi).
*   ❌ Base de Datos SQL/NoSQL.
*   ❌ Panel de Administración (CMS) tradicional.
*   ❌ Formulario de Reserva complejo (se reemplaza por chat).

---

## 2. 🏗️ Estrategia de Resolución Técnica

### 2.1. Arquitectura de Datos (The "JSON DB")
En lugar de una API, usaremos archivos JSON tipados en `src/data`. Esto permite:
1.  Velocidad extrema (los datos se cargan al construir el sitio).
2.  Edición sencilla (Fase 2: El Agente IA editará estos archivos).

**Estructura Propuesta (`src/data/trips.json`):**
```typescript
interface Trip {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  price: number;
  duration: string; // "5 días / 4 noches"
  difficulty: 'Baja' | 'Media' | 'Alta';
  images: string[]; // Rutas a /public/images
  categories: string[];
  itinerary: { day: number; title: string; description: string }[];
  isFeatured: boolean;
}
```

### 2.2. Limpieza del Proyecto Actual (`wonder-travel-next`)
El código actual tiene "basura" del intento anterior (conexiones API, auth).
*   **Acción**: Eliminar `src/services/api`, `src/auth`, y dependencias como `axios`, `next-auth`.
*   **Acción**: Refactorizar `src/services/getDataContent.ts` para que lea directamente de los JSON locales.

### 2.3. Integración con WhatsApp
Usaremos un utilitario para generar links dinámicos:
`https://wa.me/573124501242?text=Hola,%20me%20interesa%20el%20viaje%20*${TripTitle}*...`

### 2.4. Despliegue
*   **Plataforma**: Vercel.
*   **Modo**: Static Site Generation (SSG). Usaremos `generateStaticParams` en Next.js para pre-renderizar todas las páginas de viajes.

---

## 3. 📅 Plan de Ejecución (Paso a Paso)

### Paso 1: Limpieza y Preparación (Immediate)
1.  Eliminar código muerto (Auth, API Services).
2.  Definir interfaces TypeScript finales para los datos.
3.  Crear archivos JSON iniciales con datos de ejemplo (o migrados del Mock actual).

### Paso 2: Core Development
4.  Conectar componentes UI (Cards, Hero) a los datos JSON.
5.  Implementar página dinámica `/trips/[slug]` con `generateStaticParams`.
6.  Implementar Buscador (Client-side filtering).

### Paso 3: UX & Conversion
7.  Implementar botón flotante de WhatsApp.
8.  Configurar botón "Consultar" en detalle de viaje con deep link.
9.  Ajustes visuales "Premium" (Tipografía, Espaciados).

### Paso 4: Finalización
10. Auditoría Lighthouse y SEO básico.
11. Deploy a Vercel (Production).

---

## 4. 📝 Preguntas para Validación
1.  ¿Estás de acuerdo con eliminar completamente `next-auth` y `axios`? (Simplifica drásticamente).
2.  ¿El formato de datos JSON propuesto cubre lo necesario para un catálogo?
3.  ¿Confirmamos que el único CTA será WhatsApp?

---
