import { FeaturedSection } from "@/components/home/featured-section";
import { Hero } from "@/components/home/hero";
import { SearchBar } from "@/components/home/search-bar";
import { TrustBand } from "@/components/home/trust-band";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl">
      <Hero />
      <FeaturedSection />
      <SearchBar />
      <TrustBand />
    </div>
  );
}
