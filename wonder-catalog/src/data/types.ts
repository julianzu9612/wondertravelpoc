import type { Locale } from "@/i18n/routing";

export type TripItineraryItem = {
  day: number;
  title: string;
  description: string;
};

export type TripTranslation = {
  slug: string;
  title: string;
  shortDescription: string;
  duration: string;
  difficulty: string;
  categories: string[];
  itinerary: TripItineraryItem[];
};

export type Trip = {
  id: string;
  price: number;
  images: string[];
  isFeatured: boolean;
  translations: Record<Locale, TripTranslation>;
};

export type LocalizedTrip = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  price: number;
  duration: string;
  difficulty: string;
  images: string[];
  categories: string[];
  itinerary: TripItineraryItem[];
  isFeatured: boolean;
};
