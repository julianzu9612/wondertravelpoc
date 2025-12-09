import { Suspense } from 'react';
import { TripCard } from '@/components/home/TripCard';
import tripsData from '@/data/trips.json';
import { Trip } from '@/types/trip';

// Cast JSON data
const trips = tripsData as Trip[];

// Separate component for search results to use useSearchParams
function SearchResults({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const travelStyle = searchParams.travelStyles as string;
    const query = searchParams.q as string;

    let filteredTrips = trips;

    if (travelStyle) {
        // Simple filter logic - in a real app this would be more robust
        // For now, we'll just show all trips if the category doesn't strictly match, 
        // or we could add a 'tags' field to trips.json matching these slugs.
        // Let's try to match loosely against categories or title.
        filteredTrips = trips.filter(t =>
            t.categories.some(c => c.toLowerCase().includes(travelStyle.replace(/-/g, ' '))) ||
            t.title.toLowerCase().includes(travelStyle.replace(/-/g, ' '))
        );

        // If no strict match, show all (fallback for demo)
        if (filteredTrips.length === 0) {
            console.log('No exact match found, showing all');
            filteredTrips = trips;
        }
    }

    if (query) {
        filteredTrips = filteredTrips.filter(t =>
            t.title.toLowerCase().includes(query.toLowerCase()) ||
            t.shortDescription.toLowerCase().includes(query.toLowerCase())
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 font-serif">
                {travelStyle ? `Explorando: ${travelStyle.replace(/-/g, ' ')}` : 'Resultados de Búsqueda'}
            </h1>

            {filteredTrips.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTrips.map(trip => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-600">No encontramos viajes con esos criterios.</p>
                    <p className="text-orange-500 mt-2">¡Pero contáctanos y lo diseñamos para ti!</p>
                </div>
            )}
        </div>
    );
}

export default function SearchPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <Suspense fallback={<div className="p-12 text-center">Cargando...</div>}>
                <SearchResults searchParams={searchParams} />
            </Suspense>
        </div>
    );
}
