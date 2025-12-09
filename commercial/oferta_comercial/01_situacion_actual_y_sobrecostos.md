# 1. Situación Técnica Actual y Análisis de Sobrecostos

**Fecha**: 2 de Diciembre de 2025
**Cliente**: Wonder Travel
**Estado**: Análisis Crítico

---

## 🏗️ Arquitectura Actual: "Complejidad Enterprise" Innecesaria

La infraestructura actual de Wonder Travel está diseñada bajo un patrón de **Microservicios Enterprise**, separando rígidamente el Frontend del Backend y alojándolos en proveedores distintos. Aunque esta arquitectura es válida para corporaciones gigantes (como Uber o Netflix), para el caso de uso de Wonder Travel representa una **sobreingeniería masiva** que genera fricción y costos desproporcionados.

### Diagrama de Arquitectura Actual

```mermaid
graph TD
    User[Usuario Final] -->|HTTPS| Vercel[Frontend (Vercel)]
    Vercel -->|API REST| CloudRun[Backend (GCP Cloud Run)]
    CloudRun -->|SQL| CloudSQL[Base de Datos (GCP Cloud SQL)]
    CloudRun -->|Read/Write| Storage[GCP Cloud Storage]
    
    subgraph "Capa Costosa (GCP)"
    CloudRun
    CloudSQL
    Storage
    SecretManager[Secret Manager]
    Networking[VPC Networking]
    end
    
    style CloudRun fill:#ffcccc,stroke:#ff0000
    style CloudSQL fill:#ffcccc,stroke:#ff0000
    style Networking fill:#ffcccc,stroke:#ff0000
```

### Componentes y Problemas Detectados

1.  **Backend en Cloud Run (Contenedores Docker)**
    *   **Función**: Ejecuta lógica de negocio en Django (Python).
    *   **Problema**: Mantiene contenedores "calientes" o en espera, cobrando por tiempo de CPU/Memoria incluso con tráfico bajo. Requiere mantenimiento de imágenes Docker y pipelines complejos.
    *   **Costo**: **$131.00 USD/mes**.

2.  **Base de Datos Cloud SQL (PostgreSQL Gestionado)**
    *   **Función**: Almacena datos de viajes y usuarios.
    *   **Problema**: Es una instancia dedicada que cobra por hora (24/7), se use o no. Está sobredimensionada para el volumen de transacciones actual.
    *   **Costo**: **$230.00 USD/mes** (El mayor "desangre" financiero).

3.  **Networking y Servicios Auxiliares**
    *   **Función**: Conectar Vercel con GCP de forma segura.
    *   **Problema**: Cobros por salida de datos (Egress) y gestión de IPs/VPC.
    *   **Costo**: **~$25.00 USD/mes** (Networking + Secrets).

---

## 💸 Análisis Financiero: El Precio de la Ineficiencia

Actualmente, Wonder Travel paga un "impuesto tecnológico" mensual por recursos que no utiliza.

### Desglose de Facturación Mensual

| Concepto | Proveedor | Costo Mensual | ¿Es Necesario? |
| :--- | :--- | :---: | :--- |
| **Cloud SQL (DB)** | Google Cloud | **$230.00** | ❌ NO (Reemplazable por Serverless) |
| **Cloud Run (App)** | Google Cloud | **$131.00** | ❌ NO (Reemplazable por Next.js) |
| **Networking** | Google Cloud | **$20.00** | ❌ NO (Eliminable al unificar) |
| **Secret Manager** | Google Cloud | **$3.28** | ❌ NO (Incluido en Vercel) |
| **Cloud Storage** | Google Cloud | **$1.91** | ✅ SI (Pero optimizable) |
| **Frontend Hosting** | Vercel | **$20.00** | ✅ SI (Estándar de industria) |
| **TOTAL ACTUAL** | | **$406.19** | **SOBRECOSTO CRÍTICO** |

### Proyección Anual de Desperdicio

*   **Costo Anual Actual**: $4,874.28 USD
*   **Costo Anual Óptimo (Estimado)**: ~$540.00 USD
*   **Dinero "Quemado" Anualmente**: **~$4,334.28 USD**

> ⚠️ **Insight**: En 3 años, esta arquitectura le costaría a Wonder Travel **$13,000 USD extra** sin aportar ni una sola funcionalidad nueva.

---

## 📉 Por Qué Esto es un Problema de Negocio (No Solo Técnico)

1.  **Rigidez Operativa**:
    *   Para cambiar un texto o una imagen, a veces se requiere desplegar en dos lugares (Frontend y Backend).
    *   Dependencia de desarrolladores "Full Stack" que sepan tanto Python/Django como React/Next.js.

2.  **Puntos de Fallo Múltiples**:
    *   Si GCP falla, el sitio cae. Si Vercel falla, el sitio cae. Si la conexión entre ellos falla (latencia, red), el sitio se rompe.
    *   Aumenta la superficie de errores sin aumentar el valor.

3.  **Velocidad de Carga (UX)**:
    *   Cada petición del usuario debe viajar: Usuario -> Vercel -> GCP -> Base de Datos -> GCP -> Vercel -> Usuario.
    *   Esto añade latencia innecesaria (ms) que afecta la conversión y la experiencia "Premium".

---

## ✅ La Solución: Simplificación Radical

La propuesta de **Orbital Lab** no es solo "bajar costos", es eliminar la complejidad que causa esos costos.

*   **Eliminar GCP**: Mover la base de datos a una solución moderna y eficiente (Supabase).
*   **Eliminar Django**: Mover la lógica de negocio al mismo lugar donde vive el Frontend (Next.js).
*   **Resultado**: Una sola plataforma, una sola factura, velocidad máxima.
