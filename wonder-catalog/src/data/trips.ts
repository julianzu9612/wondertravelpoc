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

export function getRelatedTrips(slug: string, limit = 3) {
  const current = getTripBySlug(slug);
  if (!current) return [];

  const pool = trips.filter((trip) => trip.slug !== slug);
  // Priorizar misma categoría
  const related = pool
    .map((trip) => {
      const overlap = trip.categories.filter((c) =>
        current.categories.includes(c)
      ).length;
      return { trip, score: overlap };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.trip);

  return related;
}
