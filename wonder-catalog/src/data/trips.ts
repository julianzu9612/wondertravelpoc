import tripsJson from "./trips.json";
import type { Trip } from "./types";

export const trips = tripsJson as Trip[];

export function getTripBySlug(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}

export function getFeaturedTrips() {
  return trips.filter((trip) => trip.isFeatured);
}

export function getCategories() {
  const set = new Set<string>();
  trips.forEach((trip) => trip.categories.forEach((cat) => set.add(cat)));
  return Array.from(set).sort();
}
