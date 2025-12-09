# 🔄 Guía de Migración a Producción

Esta guía detalla los pasos para conectar la aplicación `wonder-travel-next` a la API real de Wonder Travel una vez que se tenga acceso seguro y estable.

## ⚠️ Advertencia de Seguridad
Antes de realizar estos cambios, asegúrate de tener la URL correcta de la API (`NEXT_PUBLIC_API_WOUNDER_ROOT`) y las credenciales necesarias. **No realices pruebas de escritura (POST/PUT) en producción sin autorización.**

## 1. Configuración de Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_API_WOUNDER_ROOT=https://api.wondertravel.co
# Otras variables si son necesarias (API Keys, etc.)
```

## 2. Desactivar Mock Mode

### CMS Content (`src/services/getDataContent.ts`)
Modifica la función `getDataContent` para eliminar el retorno forzado de datos mock y permitir la llamada a la API.

```typescript
// ANTES (Mock Mode)
if (code === 'home') {
  return MOCK_HOME_DATA;
}

// DESPUÉS (Real API)
// Eliminar o comentar el bloque if anterior.
// La función continuará a:
const idPage = await getIdProductWithSlugName(code);
// ...
```

### Trip Details (`src/app/trips/[slug]/page.tsx`)
Reemplazar la importación de datos mock por una llamada real al servicio.

```typescript
// ANTES
const trip = MOCK_TRIP_DETAILS;

// DESPUÉS
// Implementar un servicio getTripBySlug(params.slug) en src/services/trips.ts
const trip = await getTripBySlug(params.slug);
```

### Booking Submission (`src/components/booking/BookingForm.tsx`)
Reemplazar el `console.log` en `handleSubmit` por una llamada `POST` real.

```typescript
// ANTES
console.log('[MOCK BOOKING] Payload:', { ... });

// DESPUÉS
try {
  await connect.post(API_ENDPOINTS.BOOKING, payload);
  setStep('success');
} catch (error) {
  // Manejar error
}
```

## 3. Verificación
1.  Reinicia el servidor: `npm run dev`.
2.  Verifica en la pestaña Network del navegador que las peticiones salgan hacia la URL de la API real.
3.  Confirma que los datos mostrados correspondan a la base de datos real.
