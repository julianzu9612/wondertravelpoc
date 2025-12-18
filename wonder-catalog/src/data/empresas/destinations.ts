export type CorporateDestination = {
  id: string;
  city: string;
  description: string;
  lat: number;
  lon: number;
  highlights?: string[];
};

export const CORPORATE_DESTINATIONS: CorporateDestination[] = [
  {
    id: "cartagena",
    city: "Cartagena",
    description: "Historia, Caribe y experiencias premium.",
    lat: 10.391,
    lon: -75.4794,
    highlights: ["Caribe", "Cultura", "Eventos"],
  },
  {
    id: "santa-marta",
    city: "Santa Marta",
    description: "Sierra Nevada, Tayrona y naturaleza.",
    lat: 11.2408,
    lon: -74.199,
    highlights: ["Tayrona", "Naturaleza", "Playa"],
  },
  {
    id: "san-andres",
    city: "San Andrés",
    description: "Mar de los siete colores.",
    lat: 12.5847,
    lon: -81.7006,
    highlights: ["Islas", "Snorkel", "Descanso"],
  },
  {
    id: "medellin",
    city: "Medellín",
    description: "Innovación, cultura y transformación.",
    lat: 6.2442,
    lon: -75.5812,
    highlights: ["Innovación", "Cultura", "Ciudad"],
  },
  {
    id: "eje-cafetero",
    city: "Eje Cafetero",
    description: "Paisaje cultural cafetero.",
    lat: 4.5339,
    lon: -75.6811,
    highlights: ["Café", "Paisaje", "Experiencias"],
  },
  {
    id: "cali",
    city: "Cali",
    description: "Salsa, alegría y buen clima.",
    lat: 3.4516,
    lon: -76.532,
    highlights: ["Salsa", "Cultura", "Gastronomía"],
  },
  {
    id: "bogota",
    city: "Bogotá",
    description: "Capital cultural y empresarial.",
    lat: 4.711,
    lon: -74.0721,
    highlights: ["Ciudad", "Gastronomía", "Arte"],
  },
  {
    id: "villa-de-leyva",
    city: "Villa de Leyva",
    description: "Pueblo colonial mágico.",
    lat: 5.6333,
    lon: -73.5231,
    highlights: ["Colonial", "Naturaleza", "Escapada"],
  },
];

