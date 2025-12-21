import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
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
import { absoluteUrl } from "@/lib/urls";
import { getPathname } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "corporate.meta",
  });
  const title = t("title");
  const description = t("description");
  const pathname = getPathname({ locale, href: "/empresas" });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: absoluteUrl(pathname),
      images: ["/b2b/corporate/hero-corporate.jpg"],
    },
  };
}

export default async function EmpresasPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [t, tPillars, tStats, tTestimonials] = await Promise.all([
    getTranslations({ locale, namespace: "corporate" }),
    getTranslations({ locale, namespace: "corporate.pillars" }),
    getTranslations({ locale, namespace: "corporate.stats" }),
    getTranslations({ locale, namespace: "corporate.testimonials" }),
  ]);

  const pillars = [
    {
      icon: Users,
      title: tPillars("items.teamBuilding.title"),
      description: tPillars("items.teamBuilding.description"),
    },
    {
      icon: Compass,
      title: tPillars("items.adventure.title"),
      description: tPillars("items.adventure.description"),
    },
    {
      icon: Truck,
      title: tPillars("items.logistics.title"),
      description: tPillars("items.logistics.description"),
    },
  ];

  const stats = [
    { value: "+50", label: tStats("items.companies") },
    { value: "+80", label: tStats("items.nps") },
    { value: "8", label: tStats("items.destinations") },
    { value: "100%", label: tStats("items.satisfaction") },
  ];

  const testimonials = tTestimonials.raw("items") as Array<{
    quote: string;
    author: string;
    role: string;
    organization: string;
  }>;

  return (
    <main>
      <HeroB2B
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        description={t("hero.description")}
        backgroundImage="/b2b/corporate/hero-corporate.jpg"
        backgroundVideo="/b2b/videos/hero-empresas"
        contactType="corporate"
        ctaText={t("hero.ctaPrimary")}
        secondaryCtaText={t("hero.ctaSecondary")}
        secondaryCtaHref="#servicios"
        badges={t.raw("hero.badges") as string[]}
      />

      <PillarCards
        pillars={pillars}
        sectionTitle={tPillars("title")}
        sectionDescription={tPillars("description")}
      />

      <ServicesCards />

      <StatsSection
        stats={stats}
        title={tStats("title")}
        description={tStats("description")}
      />

      <DestinationsMap />

      <TestimonialsB2B
        testimonials={testimonials}
        title={tTestimonials("title")}
        description={tTestimonials("description")}
      />

      <ContactSectionB2B
        contactType="corporate"
        title={t("contact.title")}
        description={t("contact.description")}
        ctaText={t("contact.cta")}
      />
    </main>
  );
}
