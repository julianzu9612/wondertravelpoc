# Análisis de Arquitectura Real - Wonder Travel

**Fecha**: 2025-11-19
**Versión**: 1.0
**Estado**: Análisis Post-Código Fuente

## 1. Resumen Ejecutivo

El análisis del código fuente (`wonder-main-main.zip`) revela una aplicación **Next.js 14 (App Router)** moderna pero con una arquitectura híbrida compleja y cierta deuda técnica crítica en la capa de autenticación y manejo de datos.

A diferencia de la estimación inicial (sitio estático/simple), nos encontramos con una **Web App completa** con:
- Routing avanzado (Parallel + Intercepting Routes).
- Sistema de internacionalización (i18n) robusto.
- Dependencia de una API Backend externa (no serverless functions propias).
- Lógica de negocio distribuida entre Server Actions y Client Components.

## 2. Stack Tecnológico Confirmado

| Capa | Tecnología | Detalles |
|------|------------|----------|
| **Framework** | Next.js 14.1.0 | App Router, Server Actions, TypeScript. |
| **Styling** | SCSS Modules | `*.module.scss` + Variables globales. |
| **State** | React Context + URL | `BookingContext`, `useSearchParams` para filtros. |
| **Forms** | React Hook Form | + Yup para validación. |
| **Auth** | JWT (Custom) | `localStorage` para tokens. `next-auth` instalado pero no activo/integrado. |
| **i18n** | i18next | Middleware rewrite strategy (`/[lng]/...`). |
| **HTTP** | Axios | Instancia centralizada con interceptores. |
| **UI/UX** | Framer Motion | Animaciones de transición y carga. |

## 3. Arquitectura de Software

### 3.1. Estructura de Directorios (App Router)
La aplicación utiliza una estructura de **Route Groups** para organizar módulos sin afectar la URL:

```
src/app/[lng]/
├── (auth)/           # Rutas de autenticación
├── (booking)/        # Flujo de reserva (Booking Engine)
│   └── booking/[tripId]/
│       ├── layout.tsx      # BookingProvider + Layout visual
│       ├── page.tsx        # (Vacío - usa parallel routes)
│       └── @steps/         # Parallel Routes para pasos del wizard
├── (global)/         # Páginas públicas (Search, Categories)
├── (home)/           # Landing page
└── (itinerary)/      # Detalles de viajes
```

### 3.2. Flujo de Datos y "Critical Flaw" Detectado

**Patrón Observado:**
1.  **Server Actions**: Se usan archivos con `'use server'` (ej: `getTripsData.ts`).
2.  **Axios Wrapper**: Se usa una instancia compartida `connect.ts`.
3.  **Problema Crítico**:
    *   `connect.ts` intenta leer `localStorage.getItem('accessToken')` en los interceptores.
    *   `getTripsData.ts` es una Server Action (corre en servidor).
    *   **Resultado**: Las peticiones desde el servidor (SSR) **siempre van sin token**, ya que `localStorage` no existe en el servidor.
    *   **Impacto**: El SSR solo funciona para contenido público. Cualquier dato privado fallará o requerirá fetching client-side (useEffect), negando los beneficios de Next.js 14.

### 3.3. Autenticación

*   **Estado**: Híbrido / Incompleto.
*   **Implementación**:
    *   Se basa en JWT (Access + Refresh Token).
    *   Tokens almacenados en `localStorage` (vulnerable a XSS, no ideal).
    *   Lógica de `refreshAccessToken` existe pero está **comentada** en `connect.ts`.
    *   `next-auth` aparece en `package.json` pero no se encontraron rutas API (`[...nextauth]`) ni proveedores activos.
*   **Riesgo**: La persistencia de sesión y la seguridad son puntos débiles actuales.

### 3.4. Routing y Navegación

*   **Middleware**: `middleware.ts` maneja la detección de idioma y reescritura de URLs (`/home` -> `/es/home`).
*   **Parallel Routes**: El flujo de booking usa `@steps` para manejar el estado visual del wizard (fechas, viajeros, pago) sin perder el contexto de la URL.
*   **Intercepting Routes**: Usa `(.)resume` para modales que se pueden compartir por URL.

## 4. Deuda Técnica Identificada

1.  **Mezcla de Contextos (Server/Client)**: El uso de `connect.ts` con `localStorage` en Server Actions es un antipatrón grave.
2.  **Código Muerto/Comentado**: Archivos clave de autenticación (`auth.ts`) están casi totalmente comentados.
3.  **Tipado**: Uso de `any` en respuestas de API (ej: `Promise<IAuthSocialResponse | any>`).
4.  **Tests**: Configuración de Jest presente, pero no se observan tests de integración o unitarios activos en la estructura principal.

## 5. Recomendaciones Inmediatas

1.  **Refactorizar Capa HTTP**: Separar clientes HTTP para Server (cookies) y Client (localStorage/cookies).
2.  **Implementar Next-Auth**: Migrar la autenticación custom a `next-auth` v5 para manejo seguro de sesiones y compatibilidad con SSR.
3.  **Sanitizar Server Actions**: Asegurar que las Server Actions no dependan de APIs del navegador.
4.  **Centralizar Tipos**: Unificar interfaces de API en un monorepo de tipos o archivo central.

---
**Conclusión**: La base es sólida en cuanto a estructura de Next.js, pero la capa de datos y autenticación requiere una refactorización significativa para ser robusta y escalable.
