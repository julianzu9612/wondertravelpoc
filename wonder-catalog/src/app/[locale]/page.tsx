import { CampaignBanner } from "@/components/home/campaign-banner";
import { FeaturedSection } from "@/components/home/featured-section";
import { Hero } from "@/components/home/hero";
import { Partners } from "@/components/home/partners";
import { SearchBar } from "@/components/home/search-bar";
import { Testimonials } from "@/components/home/testimonials";
import { TrustBand } from "@/components/home/trust-band";
import { StaggerList } from "@/components/motion/stagger";
import { TrustpilotBadge } from "@/components/home/trustpilot-badge";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const resolvedLocale = locale as Locale;

  return (
    <>
      <Hero locale={resolvedLocale} />
      <div className="mx-auto max-w-6xl space-y-10 px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl">
        <StaggerList className="space-y-10">
          <CampaignBanner locale={resolvedLocale} />
          <FeaturedSection locale={resolvedLocale} />
          <SearchBar />
          <Testimonials locale={resolvedLocale} />
          <TrustpilotBadge locale={resolvedLocale} />
          <TrustBand locale={resolvedLocale} />
          <Partners locale={resolvedLocale} />
        </StaggerList>
      </div>
    </>
  );
}
