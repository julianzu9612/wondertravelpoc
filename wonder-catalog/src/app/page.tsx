import { CampaignBanner } from "@/components/home/campaign-banner";
import { FeaturedSection } from "@/components/home/featured-section";
import { Hero } from "@/components/home/hero";
import { Partners } from "@/components/home/partners";
import { SearchBar } from "@/components/home/search-bar";
import { Testimonials } from "@/components/home/testimonials";
import { TrustBand } from "@/components/home/trust-band";
import { StaggerList } from "@/components/motion/stagger";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { TrustpilotBadge } from "@/components/home/trustpilot-badge";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-6xl space-y-10 px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl">
        <StaggerList className="space-y-10">
          <CampaignBanner />
          <FeaturedSection />
          <SearchBar />
          <Testimonials />
          <TrustpilotBadge />
          <TrustBand />
          <Partners />
        </StaggerList>
      </div>
    </>
  );
}
