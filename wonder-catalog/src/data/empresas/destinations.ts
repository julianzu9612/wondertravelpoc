import lovableData from "./lovable-corporate-destinations.json";

export type CorporateDestinationActivity = {
  title: string;
  description: string;
  icon: string;
};

export type CorporateDestination = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  activities: CorporateDestinationActivity[];
  lat: number;
  lon: number;
};

const DESTINATION_COORDINATES: Record<string, { lat: number; lon: number }> = {
  cartagena: { lat: 10.391, lon: -75.4794 },
  medellin: { lat: 6.2442, lon: -75.5812 },
  bogota: { lat: 4.711, lon: -74.0721 },
  "coffee-region": { lat: 4.5339, lon: -75.6811 },
  tayrona: { lat: 11.2408, lon: -74.199 },
  pacifico: { lat: 5.7133, lon: -77.2717 },
  amazonas: { lat: -4.2153, lon: -69.9406 },
  santander: { lat: 6.5557, lon: -73.1337 },
};

const ENABLED_DESTINATION_IDS = [
  "cartagena",
  "medellin",
  "bogota",
  "coffee-region",
  "tayrona",
  "pacifico",
  "amazonas",
  "santander",
] as const;

function requireCoordinates(id: string) {
  const coordinates = DESTINATION_COORDINATES[id];
  if (!coordinates) {
    throw new Error(
      `Faltan coordenadas para el destino '${id}'. Agrega lat/lon en DESTINATION_COORDINATES.`
    );
  }
  return coordinates;
}

export const CORPORATE_DESTINATIONS: CorporateDestination[] = (() => {
  const byId = new Map(lovableData.destinations.map((destination) => [destination.id, destination]));
  return ENABLED_DESTINATION_IDS.map((id) => {
    const destination = byId.get(id);
    if (!destination) {
      throw new Error(
        `El destino '${id}' no existe en lovable-corporate-destinations.json. Ejecuta la sync o ajusta ENABLED_DESTINATION_IDS.`
      );
    }
    const { lat, lon } = requireCoordinates(destination.id);
    return {
      id: destination.id,
      name: destination.name,
      tagline: destination.tagline,
      description: destination.description,
      image: destination.image,
      activities: destination.activities,
      lat,
      lon,
    };
  });
})();
