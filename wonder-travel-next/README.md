# 🚀 Wonder Travel - Smart Rebuild

Modernización de la plataforma web de Wonder Travel utilizando **Next.js 14**, **Tailwind CSS** y **Shadcn/UI**.

## 📋 Características Principales
- **Arquitectura Moderna**: Next.js App Router + TypeScript.
- **UI/UX Premium**: Diseño responsivo con Tailwind CSS y componentes Shadcn.
- **Mock Mode (Seguro)**: Desarrollo local sin riesgo de afectar la base de datos de producción.
- **Booking Engine**: Flujo de reserva simulado con validación de formularios.

## 🛠️ Stack Tecnológico
- **Framework**: [Next.js 14](https://nextjs.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes**: [Shadcn/UI](https://ui.shadcn.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: Axios + Axios Retry

## 🚀 Comenzando

### 1. Instalación
```bash
npm install
```

### 2. Desarrollo Local
```bash
npm run dev
```
El servidor iniciará en `http://localhost:3000`.

### 3. Build para Producción
```bash
npm run build
npm start
```

## 🛡️ Mock Mode (Modo Seguro)
Por defecto, el proyecto está configurado en **Mock Mode**. Esto significa que:
1.  **NO conecta** a la API real de Wonder Travel.
2.  Usa datos simulados definidos en `src/services/mockData.ts` y `src/services/mockTripData.ts`.
3.  Las reservas **NO se envían** a ningún servidor; solo se simula el proceso en el frontend.

**Para conectar a la API Real:**
Consulta el archivo `MIGRATION.md` para instrucciones detalladas.

## 📂 Estructura del Proyecto
```
src/
├── app/                 # Rutas (App Router)
│   ├── page.tsx         # Home Page
│   └── trips/[slug]/    # Detalle de Viaje
├── components/
│   ├── booking/         # Componentes de Reserva
│   ├── home/            # Componentes del Home (Hero, Featured)
│   ├── layout/          # Header, Footer
│   └── ui/              # Componentes Base (Shadcn)
├── services/            # Lógica de Datos (API + Mocks)
└── lib/                 # Utilidades
```
