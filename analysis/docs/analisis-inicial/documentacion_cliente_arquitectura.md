# Documentación Básica de la Arquitectura (Proporcionada por Cliente)

**Fecha Recibido**: 2025-12-01
**Fuente**: Documentación interna del cliente
**Estado**: Referencia Oficial

---

## **Visión General**

La aplicación está compuesta por un **backend** y un **frontend** desacoplados:
- **Backend**: Google Cloud Platform (GCP)
- **Frontend**: Vercel.com

## **Backend (GCP)**

### Infraestructura
- **Cloud Run**: Ejecución de contenedores Docker (Backend API).
- **Cloud SQL**: Base de datos PostgreSQL gestionada.
- **Secret Manager**: Gestión de credenciales.
- **Networking**: Configuración de red y seguridad.
- **Cloud Storage**: Archivos estáticos y multimedia.

### Stack Tecnológico
- **Framework**: Django + Django REST Framework (DRF).
- **Database**: PostgreSQL.
- **Container**: Docker.
- **VCS**: Git.

### Despliegue (CI/CD)
- **Repo**: [wonder-core](https://github.com/WonderTravelCO/wonder-core)
- **Pipeline**: GitHub Actions -> GCP.

## **Frontend (Vercel)**

### Infraestructura
- **Hosting**: Vercel (Edge Network).

### Stack Tecnológico
- **Framework**: React.js + Next.js v14.
- **Router**: Page Router (Nota: Análisis de código sugiere App Router, verificar discrepancia).
- **Estilos**: SASS.

### Despliegue (CI/CD)
- **Repo**: [wonder-main](https://github.com/WonderTravelCO/wonder-main)
- **Pipeline**: Vercel Automatic Deploy (Git Push).

## **Beneficios Declarados**
- **Escalabilidad**: Servicios Cloud nativos.
- **Eficiencia**: CI/CD automatizado.
- **Seguridad**: Secret Manager.
- **Flexibilidad**: Arquitectura Headless (Frontend/Backend separados).
