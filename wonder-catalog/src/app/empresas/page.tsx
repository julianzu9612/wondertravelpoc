import { Metadata } from "next";
import { Users, Compass, Truck } from "lucide-react";
import {
  HeroB2B,
  StatsSection,
  PillarCards,
  ContactSectionB2B,
  TestimonialsB2B,
} from "@/components/b2b";
import { ServicesCards } from "@/components/empresas/services-cards";
import { DestinationsMap } from "@/components/empresas/destinations-map";

export const metadata: Metadata = {
  title: "Wonder Corporate | Experiencias Corporativas en Colombia",
  description:
    "Team building, viajes de incentivo y experiencias corporativas diseñadas para transformar equipos. +50 empresas confían en nosotros.",
  openGraph: {
    title: "Wonder Corporate | Experiencias Corporativas en Colombia",
    description:
      "Transforma tu equipo con experiencias que inspiran, conectan y motivan.",
    images: ["/b2b/corporate/hero-corporate.jpg"],
  },
};

const pillars = [
  {
    icon: Users,
    title: "Team Building",
    description:
      "Actividades diseñadas científicamente para fortalecer vínculos, mejorar comunicación y aumentar el engagement de tu equipo.",
  },
  {
    icon: Compass,
    title: "Aventura & Naturaleza",
    description:
      "Experiencias outdoor que desafían, inspiran y crean memorias compartidas. Desde senderismo hasta deportes extremos.",
  },
  {
    icon: Truck,
    title: "Logística Completa",
    description:
      "Nos encargamos de todo: transporte, hospedaje, alimentación y coordinación. Tu solo preocúpate de disfrutar.",
  },
];

const stats = [
  { value: "+50", label: "Empresas atendidas" },
  { value: "+80", label: "NPS Promedio" },
  { value: "8", label: "Destinos operados" },
  { value: "100%", label: "Satisfacción garantizada" },
];

const testimonials = [
  {
    quote:
      "El viaje de integración superó todas las expectativas. Nuestro equipo regresó más unido y motivado que nunca.",
    author: "Laura Méndez",
    role: "Directora de Recursos Humanos",
    organization: "Tecnoglass",
  },
  {
    quote:
      "La atención al detalle es impresionante. Cada actividad estaba pensada para nuestros objetivos de team building.",
    author: "Andrés Vargas",
    role: "CEO",
    organization: "Rappi Colombia",
  },
  {
    quote:
      "Profesionales, flexibles y creativos. Han organizado nuestros incentivos por 3 años consecutivos.",
    author: "Patricia López",
    role: "Gerente de Ventas",
    organization: "Bancolombia",
  },
];

export default function EmpresasPage() {
  return (
    <main>
      <HeroB2B
        title="Experiencias corporativas que transforman equipos"
        subtitle="Wonder Corporate"
        description="Diseñamos viajes y actividades que fortalecen la cultura organizacional, premian el talento y crean conexiones reales entre tu equipo."
        backgroundImage="/b2b/corporate/hero-corporate.jpg"
        backgroundVideo="/b2b/videos/hero-empresas"
        contactType="corporate"
        ctaText="Cotizar experiencia"
        secondaryCtaText="Ver servicios"
        secondaryCtaHref="#servicios"
        badges={["Team Building", "Incentivos", "Integraciones", "Retiros"]}
      />

      <PillarCards
        pillars={pillars}
        sectionTitle="¿Por qué Wonder Corporate?"
        sectionDescription="Combinamos expertise en turismo con conocimiento en desarrollo organizacional para crear experiencias que impactan."
      />

      <ServicesCards />

      <StatsSection
        stats={stats}
        title="Resultados que generan confianza"
        description="Nuestros números reflejan el compromiso con cada empresa que confía en nosotros."
      />

      <DestinationsMap />

      <TestimonialsB2B
        testimonials={testimonials}
        title="Empresas que confían en nosotros"
        description="Lo que dicen los líderes de las organizaciones que han vivido la experiencia Wonder Corporate."
      />

      <ContactSectionB2B
        contactType="corporate"
        title="¿Listo para transformar tu equipo?"
        description="Cuéntanos sobre tu empresa y diseñemos juntos la experiencia perfecta."
        ctaText="Agendar llamada"
      />
    </main>
  );
}
