# Wonder Travel - Catálogo Digital v2.0

## Contexto del Proyecto

**Cliente**: Wonder Travel
**Contacto**: Juan Pablo Gaviria (CEO)
**WhatsApp**: +57 312 450 1242

Wonder Travel es una agencia de viajes colombiana especializada en experiencias de turismo de aventura y naturaleza. Trabajan con universidades de prestigio internacional (Harvard, Stanford, MIT, Wharton) organizando viajes a destinos únicos de Colombia.

---

## Objetivo

Crear un **catálogo web estático** de alto impacto visual que:

1. Muestre las experiencias de viaje de forma atractiva
2. Convierta visitantes en conversaciones de WhatsApp
3. Sea ultra-rápido (Static Site Generation)
4. Tenga cero mantenimiento (sin backend, sin BD)
5. Sea fácil de escalar (agregar viajes = agregar objetos JSON)

---

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Datos**: JSON estático en `/src/data/`
- **Hosting**: Vercel (Free Tier)
- **Imágenes**: next/image (optimización automática)

---

## Paleta de Colores (Corporativos)

| Color | Hex | Uso |
|-------|-----|-----|
| **Naranja (Primary)** | `#F97316` | CTAs, acentos, hover states |
| **Naranja Dark** | `#EA580C` | Hover del primary |
| **Blanco** | `#FFFFFF` | Fondos, textos sobre oscuro |
| **Gris oscuro** | `#1F2937` | Textos principales |
| **Gris claro** | `#F3F4F6` | Fondos secundarios |

### Variables CSS (shadcn/ui compatible)
```css
:root {
  --primary: 24.6 95% 53.1%;        /* Orange-500 */
  --primary-foreground: 60 9.1% 97.8%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}
```

---

## Páginas Requeridas

### 1. Home (`/`)
- Hero section con imagen/video impactante de Colombia
- Buscador visual (filtrado client-side)
- Grid de "Viajes Destacados" (3-4 cards)
- Sección de categorías (Aventura, Cultural, Naturaleza, etc.)
- Footer con info de contacto

### 2. Detalle de Viaje (`/trips/[slug]`)
- Galería de imágenes
- Info clave: duración, dificultad, precio desde
- Itinerario día a día
- **CTA Principal**: "Consultar en WhatsApp" (abre chat con mensaje prellenado)

### 3. Contacto (`/contacto`)
- Info de la agencia
- Botón WhatsApp prominente
- Opcional: formulario simple

---

## Estructura de Datos

Cada viaje es un objeto en `trips.json`:

```typescript
interface Trip {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  price: number;              // En COP
  duration: string;           // "5 días / 4 noches"
  difficulty: 'Baja' | 'Media' | 'Alta';
  images: string[];           // Rutas a /public/images
  categories: string[];       // ["Aventura", "Cultural"]
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  isFeatured: boolean;
}
```

Ver `reference/trips.json` para datos de ejemplo.

---

## Integración WhatsApp

Generar links dinámicos con mensaje prellenado:

```
https://wa.me/573124501242?text=Hola,%20me%20interesa%20el%20viaje%20*${tripTitle}*
```

---

## Assets Disponibles

En la carpeta `assets/brand/`:
- `wonder-logo.svg` - Logo principal
- `wonder-white.svg` - Logo blanco (para fondos oscuros)
- `wonder-isotype.svg` - Isotipo solo
- Patterns decorativos

---

## Reglas de Desarrollo

1. **Mobile First** - 80% del tráfico será móvil
2. **Performance** - Lighthouse 95+
3. **Sin dependencias innecesarias** - Solo lo esencial
4. **Imágenes optimizadas** - Usar next/image siempre
5. **SSG** - Usar `generateStaticParams` para rutas dinámicas

---

## Lo que NO incluye (explícitamente fuera de alcance)

- Sistema de usuarios/login
- Pasarela de pagos
- Base de datos
- CMS/Panel admin
- Formularios complejos de reserva

---

## Cómo Empezar

```bash
cd v2.0
npx create-next-app@latest wonder-catalog --typescript --tailwind --app --src-dir
cd wonder-catalog
npx shadcn@latest init
```

Luego:
1. Copiar `assets/` a `public/`
2. Copiar `reference/trips.json` a `src/data/`
3. Configurar colores en `globals.css`
4. Desarrollar páginas

---

**Deadline**: Avance funcional para la semana del 9-13 Dic 2025
