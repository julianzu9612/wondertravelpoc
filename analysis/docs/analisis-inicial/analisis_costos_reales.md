# Análisis de Costos Reales - Wonder Travel

**Fecha**: 2025-12-01
**Fuente**: Datos proporcionados por el cliente (Notion)
**Estado**: Confirmado

---

## 💰 Resumen de Costos Mensuales Actuales

El costo operativo mensual actual asciende a **US$406.19**.

### Desglose por Proveedor

#### 1. Google Cloud Platform (GCP)
**Total: US$386.19 / mes**

| Servicio | Costo Mensual | Descripción |
|----------|---------------|-------------|
| **Cloud SQL** | US$230.00 | Gestión de base de datos PostgreSQL. Es el costo más significativo (56% del total). |
| **Cloud Run** | US$131.00 | Ejecución de contenedores para el backend. |
| **Networking** | US$20.00 | Transferencia de datos y configuración de red. |
| **Secret Manager** | US$3.28 | Gestión de credenciales. |
| **Cloud Storage** | US$1.91 | Almacenamiento de assets estáticos. |

#### 2. Vercel
**Total: US$20.00 / mes**

| Servicio | Costo Mensual | Descripción |
|----------|---------------|-------------|
| **Vercel Pro** | US$20.00 | Hosting del frontend y despliegue automático. |

---

## 📉 Oportunidades de Optimización Preliminares

Basado en este desglose, se identifican las siguientes oportunidades inmediatas:

1.  **Cloud SQL ($230/mes)**: Costo desproporcionado para el tráfico actual estimado.
    *   *Alternativa*: Supabase Pro ($25/mes) o Neon (Serverless Postgres).
    *   *Ahorro potencial*: ~$205/mes.

2.  **Cloud Run ($131/mes)**: Alto para un backend que podría ser optimizado o migrado a Serverless Functions.
    *   *Alternativa*: Vercel Serverless Functions (incluido en plan Pro con límites generosos) o optimización de contenedores.
    *   *Ahorro potencial*: ~$100-$131/mes.

3.  **Networking ($20/mes)**: Podría reducirse significativamente al mover backend y frontend a la misma red edge (Vercel) o usar servicios integrados.

---

## 📊 Proyección de Ahorro (Estimada)

| Escenario | Costo Actual | Costo Propuesto (Estimado) | Ahorro Mensual | % Ahorro |
|-----------|--------------|----------------------------|----------------|----------|
| **Migración Full Stack** | $406.19 | ~$45.00 (Vercel + Supabase) | ~$361.19 | **~89%** |

> **Nota**: Esta proyección asume una migración a un stack moderno (Next.js + Supabase/Neon) alojado en Vercel, eliminando la complejidad y sobrecostos de GCP para este caso de uso.
