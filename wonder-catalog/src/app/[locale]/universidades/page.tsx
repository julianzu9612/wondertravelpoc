import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
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
    namespace: "universities.meta",
  });
  const title = t("title");
  const description = t("description");
  const pathname = getPathname({ locale, href: "/universidades" });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: absoluteUrl(pathname),
      images: ["/b2b/universities/hero-groups.jpg"],
    },
  };
}

export default async function UniversidadesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [t, tPillars, tStats, tTestimonials, tCerts] = await Promise.all([
    getTranslations({ locale, namespace: "universities" }),
    getTranslations({ locale, namespace: "universities.pillars" }),
    getTranslations({ locale, namespace: "universities.stats" }),
    getTranslations({ locale, namespace: "universities.testimonials" }),
    getTranslations({ locale, namespace: "universities.certifications" }),
  ]);
  const testimonialsDescription = tTestimonials("description");

  const pillars = [
    {
      icon: Headset,
      title: tPillars("items.support.title"),
      description: tPillars("items.support.description"),
    },
    {
      icon: Sparkles,
      title: tPillars("items.unique.title"),
      description: tPillars("items.unique.description"),
    },
    {
      icon: ShieldCheck,
      title: tPillars("items.safety.title"),
      description: tPillars("items.safety.description"),
    },
  ];

  const stats = [
    { value: "+7,000", label: tStats("items.travelers") },
    { value: "+25", label: tStats("items.destinations") },
    { value: "15+", label: tStats("items.experience") },
    { value: "4.9/5", label: tStats("items.rating") },
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

  const testimonials = tTestimonials.raw("items") as Array<{
    quote: string;
    author: string;
    role: string;
    organization: string;
  }>;

  const certifications = tCerts.raw("items") as Array<{
    name: string;
    description: string;
  }>;

  return (
    <main>
      <HeroB2B
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        description={t("hero.description")}
        backgroundImage="/b2b/universities/hero-groups.jpg"
        backgroundVideo="/b2b/videos/hero-universidades"
        contactType="groups"
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

      <ProgramTypes />

      <StatsSection
        stats={stats}
        title={tStats("title")}
        description={tStats("description")}
      />

      <LogoGrid
        logos={universityLogos}
        title={t("logos.title")}
        description={t("logos.description")}
      />

      <GallerySection />

      <CertificationsGrid
        certifications={certifications}
        title={tCerts("title")}
        description={tCerts("description")}
      />

      <TestimonialsB2B
        testimonials={testimonials}
        title={tTestimonials("title")}
        description={testimonialsDescription || undefined}
      />

      <ContactSectionB2B
        contactType="groups"
        title={t("contact.title")}
        description={t("contact.description")}
        ctaText={t("contact.cta")}
      />
    </main>
  );
}
