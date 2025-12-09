export interface Trip {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    price: number;
    duration: string;
    difficulty: 'Baja' | 'Media' | 'Alta';
    images: string[];
    categories: string[];
    itinerary: {
        day: number;
        title: string;
        description: string;
    }[];
    isFeatured: boolean;
}
