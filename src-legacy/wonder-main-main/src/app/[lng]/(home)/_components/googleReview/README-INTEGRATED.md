# GoogleReview Component (with Trustpilot Integration)

Componente que muestra las calificaciones de **Google Reviews** y **Trustpilot** para Wonder Travel en un solo lugar.

## 🌟 Características

### Google Reviews
- ✅ Calificación: **4.9/5** ⭐⭐⭐⭐⭐
- ✅ **30 reviews**
- ✅ Estrellas doradas (Google)
- ✅ Enlace a Google Reviews

### Trustpilot Reviews  
- ✅ Calificación: **4.7/5** ⭐⭐⭐⭐⭐
- ✅ **25 reviews**
- ✅ Estrellas verdes con parcial (Trustpilot)
- ✅ Enlace a Trustpilot
- ✅ Iconos SVG inline

## 📱 Diseño Responsivo

### Móvil
```
┌─────────────┐
│   Google    │
│ 4.9 | 30 ⭐ │
├─────────────┤
│ Trustpilot  │
│ 4.7 | 25 ⭐ │
└─────────────┘
```

### Escritorio
```
┌──────────────────────────────────┐
│ Google 4.9|30⭐  Trustpilot 4.7|25⭐ │
└──────────────────────────────────┘
```

## 🎨 Estilos

- **Google**: Estrellas amarillas (`$google-yellow`)
- **Trustpilot**: Estrellas verdes (`#00B67A`)
- **BEM Methodology** con SASS
- **Responsive design**

## 🚀 Uso

```tsx
import GoogleReview from './_components/googleReview/GoogleReview';

export default function HomePage() {
  return (
    <div>
      <GoogleReview />
    </div>
  );
}
```

## 📊 Datos Actualizables

Para actualizar las calificaciones:

1. **Google Reviews**: Modificar en `GoogleReview.tsx`
   - `calification__numbers`: 4.9
   - `calification__reviews`: 30 reviews

2. **Trustpilot**: Modificar en `GoogleReview.tsx`
   - `calification__numbers`: 4.7  
   - `calification__reviews`: 25 reviews

## 🔗 Enlaces

- **Google**: Variable `urlReviewGoogle` en `constants.ts`
- **Trustpilot**: Variable `urlReviewTrustpilot` en `constants.ts`

## 📁 Estructura

```
googleReview/
├── GoogleReview.tsx          # Componente integrado
├── GoogleReview.module.scss  # Estilos con ambas plataformas
└── README-INTEGRATED.md      # Esta documentación
```

## ✨ Beneficios de la Integración

- **Una sola importación** para ambas calificaciones
- **Diseño consistente** entre plataformas
- **Menos componentes** a mantener
- **Mejor UX** al mostrar múltiples fuentes de confianza
- **Responsive** automático para ambas plataformas
