export type Difficulty = "Baja" | "Media" | "Alta";

export type Trip = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  price: number;
  duration: string;
  difficulty: Difficulty;
  images: string[];
  categories: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  isFeatured: boolean;
};
