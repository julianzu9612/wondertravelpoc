import { Metadata } from "next";
import { Headset, Sparkles, ShieldCheck } from "lucide-react";
import {
  HeroB2B,
  StatsSection,
  PillarCards,
  LogoGrid,
  ContactSectionB2B,
  TestimonialsB2B,
  CertificationsGrid,
} from "@/components/b2b";
import { ProgramTypes } from "@/components/universidades/program-types";
import { GallerySection } from "@/components/universidades/gallery-section";

export const metadata: Metadata = {
  title: "Wonder Groups | Viajes Académicos para Universidades",
  description:
    "Viajes académicos transformadores para programas MBA, LLM y MPA de las mejores universidades del mundo. +15 años de experiencia, +7,000 viajeros.",
  openGraph: {
    title: "Wonder Groups | Viajes Académicos para Universidades",
    description:
      "Diseñamos experiencias inmersivas que transforman la educación en aventura.",
    images: ["/b2b/universities/hero-groups.jpg"],
  },
};

const pillars = [
  {
    icon: Headset,
    title: "Servicio 24/7",
    description:
      "Equipo dedicado disponible en todo momento. Coordinación completa desde la planeación hasta el último día del viaje.",
  },
  {
    icon: Sparkles,
    title: "Experiencias Únicas",
    description:
      "Acceso exclusivo a empresas, instituciones y espacios que no están disponibles para el público general.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Garantizada",
    description:
      "Protocolos de seguridad certificados, seguros completos y plan de contingencia para cada grupo.",
  },
];

const stats = [
  { value: "+7,000", label: "Viajeros atendidos" },
  { value: "+25", label: "Destinos únicos" },
  { value: "15+", label: "Años de experiencia" },
  { value: "4.9/5", label: "Calificación promedio" },
];

const universityLogos = [
  { src: "/b2b/universities/logos/harvard.png", alt: "Harvard University" },
  { src: "/b2b/universities/logos/mit.png", alt: "MIT" },
  { src: "/b2b/universities/logos/stanford.png", alt: "Stanford University" },
  { src: "/b2b/universities/logos/chicago.png", alt: "University of Chicago" },
  { src: "/b2b/universities/logos/berkeley.png", alt: "UC Berkeley" },
  { src: "/b2b/universities/logos/wharton.png", alt: "Wharton School" },
  { src: "/b2b/universities/logos/columbia.png", alt: "Columbia University" },
  {
    src: "/b2b/universities/logos/columbia-business-school.png",
    alt: "Columbia Business School",
  },
  { src: "/b2b/universities/logos/ypo.png", alt: "YPO" },
];

const testimonials = [
  {
    quote:
      "La organización fue impecable. Nuestros estudiantes tuvieron acceso a experiencias que jamás hubieran logrado por su cuenta.",
    author: "María González",
    role: "Coordinadora de Programas Internacionales",
    organization: "Universidad de los Andes",
  },
  {
    quote:
      "Wonder Travel entiende las necesidades específicas de cada programa académico. El detalle en la planeación es excepcional.",
    author: "Carlos Rodríguez",
    role: "Director MBA",
    organization: "CESA",
  },
  {
    quote:
      "Llevamos 5 años trabajando con ellos y cada viaje supera el anterior. Son verdaderos expertos en viajes académicos.",
    author: "Ana Martínez",
    role: "Coordinadora LLM",
    organization: "Universidad Externado",
  },
];

const certifications = [
  {
    name: "TourCert",
    description: "Certificación internacional de turismo sostenible y responsable.",
  },
  {
    name: "Sello Compromiso con la Paz",
    description:
      "Reconocimiento por contribuir al desarrollo de comunidades afectadas por el conflicto.",
  },
  {
    name: "ACOTUR",
    description:
      "Miembro de la Asociación Colombiana de Turismo Responsable.",
  },
];

export default function UniversidadesPage() {
  return (
    <main>
      <HeroB2B
        title="Viajes académicos que transforman perspectivas"
        subtitle="Wonder Groups"
        description="Diseñamos experiencias inmersivas para programas MBA, LLM y MPA de las universidades más prestigiosas del mundo. Cada viaje es una oportunidad de aprendizaje único."
        backgroundImage="/b2b/universities/hero-groups.jpg"
        backgroundVideo="/b2b/videos/hero-universidades"
        contactType="groups"
        ctaText="Solicitar cotización"
        secondaryCtaText="Ver programas"
        secondaryCtaHref="#servicios"
        badges={["MBA", "LLM", "MPA", "Executive Education"]}
      />

      <PillarCards
        pillars={pillars}
        sectionTitle="¿Por qué Wonder Groups?"
        sectionDescription="Más de 15 años creando experiencias académicas que combinan aprendizaje, networking y aventura."
      />

      <ProgramTypes />

      <StatsSection
        stats={stats}
        title="Números que hablan por nosotros"
        description="Resultados que reflejan nuestro compromiso con la excelencia."
      />

      <LogoGrid
        logos={universityLogos}
        title="Universidades que confían en nosotros"
        description="Colaboramos con las instituciones académicas más prestigiosas del mundo."
      />

      <GallerySection />

      <CertificationsGrid certifications={certifications} />

      <TestimonialsB2B testimonials={testimonials} />

      <ContactSectionB2B
        contactType="groups"
        title="¿Planeas un viaje académico?"
        description="Cuéntanos sobre tu grupo y diseñemos juntos una experiencia transformadora."
        ctaText="Cotizar viaje grupal"
      />
    </main>
  );
}
