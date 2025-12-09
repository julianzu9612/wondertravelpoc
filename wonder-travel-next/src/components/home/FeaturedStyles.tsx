import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const CARDS = [
    {
        title: 'Expediciones Wonder',
        href: '/search?travelStyles=expediciones-wonder',
        color: 'bg-orange-600',
    },
    {
        title: 'Liberación de tortugas',
        href: '/search?travelStyles=liberacion-de-tortugas',
        color: 'bg-amber-600',
    },
    {
        title: 'Salidas grupales 2025',
        href: '/search?travelStyles=salidas-grupales-2025',
        color: 'bg-orange-500',
    },
    {
        title: 'Temporada de ballenas 2025',
        href: '/search?travelStyles=temporada-ballenas-2025',
        color: 'bg-amber-500',
    },
];

export function FeaturedStyles() {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CARDS.map((card) => (
                    <Link key={card.title} href={card.href} className="group">
                        <Card className={`${card.color} text-white border-none shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative h-32 flex items-center justify-center`}>
                            {/* Background Pattern Overlay */}
                            <div className="absolute inset-0 opacity-20 bg-[url('/assets/brand/pattern-web-2.svg')] bg-cover bg-center" />

                            <CardContent className="relative z-10 p-4 text-center">
                                <h3 className="text-lg font-bold group-hover:scale-105 transition-transform">
                                    {card.title}
                                </h3>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
