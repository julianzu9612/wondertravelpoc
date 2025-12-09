import { notFound } from 'next/navigation';
import tripsData from '@/data/trips.json';
import { Trip } from '@/types/trip';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Clock, MapPin, DollarSign, Calendar } from 'lucide-react';

// Cast JSON data
const trips = tripsData as Trip[];

interface PageProps {
    params: {
        slug: string;
    };
}

// Generate static params for all trips
export async function generateStaticParams() {
    return trips.map((trip) => ({
        slug: trip.slug,
    }));
}

export default function TripDetailPage({ params }: PageProps) {
    console.log('TripDetailPage params:', params);
    const trip = trips.find((t) => t.slug === params.slug);

    if (!trip) {
        console.log('Trip not found for slug:', params.slug);
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            <div className="h-96 relative">
                                {trip.images[0] ? (
                                    <img
                                        src={trip.images[0]}
                                        alt={trip.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-orange-800 flex items-center justify-center">
                                        <h1 className="text-4xl font-bold text-white">{trip.title}</h1>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <h1 className="text-4xl font-bold mb-2">{trip.title}</h1>
                                    <div className="flex items-center gap-4 text-sm font-medium">
                                        <span className="bg-orange-600 px-3 py-1 rounded-full">{trip.difficulty}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {trip.duration}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
                                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                    {trip.shortDescription}
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mb-4">Itinerario</h3>
                                <div className="space-y-6">
                                    {trip.itinerary.map((day) => (
                                        <div key={day.day} className="flex gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold">
                                                Día {day.day}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{day.title}</h4>
                                                <p className="text-gray-600 mt-1">{day.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="mb-6">
                                    <p className="text-sm text-gray-500 mb-1">Precio desde</p>
                                    <p className="text-4xl font-bold text-orange-600">
                                        ${trip.price.toLocaleString('es-CO')}
                                    </p>
                                </div>

                                <WhatsAppButton tripTitle={trip.title} />

                                <p className="text-xs text-center text-gray-400 mt-4">
                                    * Precios sujetos a cambios y disponibilidad.
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-orange-900 mb-2">¿Por qué viajar con nosotros?</h3>
                                <ul className="space-y-2 text-sm text-orange-800">
                                    <li className="flex items-center gap-2">✓ Guías expertos locales</li>
                                    <li className="flex items-center gap-2">✓ Seguro de viaje incluido</li>
                                    <li className="flex items-center gap-2">✓ Soporte 24/7</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
