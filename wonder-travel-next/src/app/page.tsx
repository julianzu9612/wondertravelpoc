import { Hero } from '@/components/home/Hero';
import { FeaturedStyles } from '@/components/home/FeaturedStyles';
import { TripCard } from '@/components/home/TripCard';
import { ValueProps } from '@/components/home/ValueProps';
import { Testimonials } from '@/components/home/Testimonials';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Newsletter } from '@/components/home/Newsletter';
import { Footer } from '@/components/layout/Footer';
import tripsData from '@/data/trips.json';
import { Trip } from '@/types/trip';

// Cast JSON data to Trip type
const trips = tripsData as Trip[];

export default function Home() {
  const featuredTrips = trips.filter(trip => trip.isFeatured);

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />

      <div className="relative z-10 -mt-20">
        <FeaturedStyles />
      </div>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Colección Exclusiva</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 font-serif">Viajes de Autor</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Asymmetrical Grid / Masonry Feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[500px]">
          {featuredTrips.map((trip, index) => (
            <div
              key={trip.id}
              className={`${index === 0 || index === 3 ? 'lg:col-span-2' : ''}`}
            >
              <TripCard trip={trip} />
            </div>
          ))}
        </div>
      </section>

      <HowItWorks />
      <ValueProps />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
