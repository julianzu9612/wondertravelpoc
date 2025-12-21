import type { Locale } from "@/i18n/routing";
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

type DestinationTranslation = {
  name: string;
  tagline: string;
  description: string;
  activities: CorporateDestinationActivity[];
};

const DESTINATION_TRANSLATIONS: Record<
  Locale,
  Record<string, DestinationTranslation>
> = {
  en: {},
  es: {
    cartagena: {
      name: "Cartagena",
      tagline: "Ciudad costera histórica",
      description:
        "Descubre la magia de Cartagena, donde la historia colonial se encuentra con el encanto caribeño. Patrimonio de la UNESCO con lujo, cultura y mar.",
      activities: [
        {
          title: "Hoteles de primer nivel",
          description:
            "Alojamiento en hoteles boutique y de lujo en la ciudad amurallada y frente al mar.",
          icon: "Hotel",
        },
        {
          title: "Experiencias culturales y gastronómicas",
          description:
            "Tours gastronómicos, cenas privadas y experiencias culturales únicas.",
          icon: "UtensilsCrossed",
        },
        {
          title: "Navegación a Islas del Rosario",
          description:
            "Excursiones en yate o catamarán con snorkeling y almuerzo incluido.",
          icon: "Ship",
        },
        {
          title: "Casas frente al mar",
          description:
            "Alquiler de villas exclusivas para eventos privados y retiros corporativos.",
          icon: "Home",
        },
        {
          title: "Beach clubs",
          description:
            "Acceso a los mejores beach clubs con servicio VIP y ambientes exclusivos.",
          icon: "Umbrella",
        },
        {
          title: "Retiros de well-being",
          description:
            "Programas de bienestar con spa, yoga, meditación y terapias holísticas.",
          icon: "Heart",
        },
      ],
    },
    medellin: {
      name: "Medellín",
      tagline: "La ciudad de la eterna primavera",
      description:
        "Vive la capital de la innovación de Colombia, con clima perfecto y una infraestructura ideal para eventos y team building.",
      activities: [
        {
          title: "Charlas con referentes de la industria",
          description:
            "Sesiones con líderes empresariales y expertos de diversos sectores.",
          icon: "Mic",
        },
        {
          title: "Visita al Orquideorama",
          description:
            "Experiencias en el Jardín Botánico con arquitectura única y biodiversidad.",
          icon: "Flower2",
        },
        {
          title: "Eventos de primer nivel",
          description:
            "Venues exclusivos con tecnología de punta y servicios premium.",
          icon: "CalendarDays",
        },
        {
          title: "Experiencias culturales",
          description:
            "Tours por Comuna 13, museos, galerías de arte y alta gastronomía.",
          icon: "Palette",
        },
        {
          title: "Metrocable y city tours",
          description:
            "Recorridos panorámicos con vistas espectaculares de la ciudad.",
          icon: "Cable",
        },
        {
          title: "Networking empresarial",
          description:
            "Eventos en rooftops y espacios exclusivos con comunidad empresarial.",
          icon: "Users",
        },
      ],
    },
    bogota: {
      name: "Bogotá",
      tagline: "Capital vibrante",
      description:
        "La capital cosmopolita ofrece venues de clase mundial, cultura y oportunidades para experiencias corporativas de alto impacto.",
      activities: [
        {
          title: "Charlas con referentes de la industria",
          description:
            "Conferencias con líderes empresariales y pensadores del país.",
          icon: "Mic",
        },
        {
          title: "Experiencias culturales premium",
          description:
            "Visitas privadas a museos, galerías y espacios emblemáticos.",
          icon: "Building2",
        },
        {
          title: "Eventos de primer nivel",
          description:
            "Venues para conferencias, lanzamientos y eventos corporativos.",
          icon: "CalendarDays",
        },
        {
          title: "Gastronomía de autor",
          description:
            "Experiencias culinarias en restaurantes de referencia.",
          icon: "UtensilsCrossed",
        },
        {
          title: "Monserrate y city tours",
          description:
            "Excursiones al cerro de Monserrate y recorridos icónicos.",
          icon: "Mountain",
        },
        {
          title: "Networking empresarial",
          description:
            "Conexiones con el ecosistema empresarial más diverso del país.",
          icon: "Users",
        },
      ],
    },
    "coffee-region": {
      name: "Eje Cafetero",
      tagline: "Paisajes cafeteros",
      description:
        "Sumérgete en la cultura cafetera con paisajes increíbles y experiencias auténticas ideales para equipos.",
      activities: [
        {
          title: "Charlas con referentes de la industria",
          description:
            "Sesiones con expertos en sostenibilidad y emprendimiento rural.",
          icon: "Mic",
        },
        {
          title: "Tour cafetero premium",
          description:
            "Visitas a fincas con catación, proceso del café y paisajes únicos.",
          icon: "Coffee",
        },
        {
          title: "Eventos en haciendas",
          description:
            "Eventos corporativos en haciendas históricas con servicio premium.",
          icon: "CalendarDays",
        },
        {
          title: "Glamping y wellness",
          description:
            "Alojamiento boutique con experiencias de bienestar y relajación.",
          icon: "TreePine",
        },
        {
          title: "Experiencias en pueblos de colores",
          description:
            "Recorridos por pueblos patrimonio como Salento y Filandia.",
          icon: "Landmark",
        },
        {
          title: "Retiros de well-being",
          description:
            "Programas integrales de bienestar en entornos naturales.",
          icon: "Heart",
        },
      ],
    },
    tayrona: {
      name: "Tayrona",
      tagline: "Caribe exuberante",
      description:
        "Playas vírgenes y selva tropical para retiros corporativos con un ambiente de desconexión total.",
      activities: [
        {
          title: "Ecolodges boutique",
          description:
            "Alojamiento premium en cabañas frente al mar o en la selva.",
          icon: "TreePine",
        },
        {
          title: "Senderismo y hiking",
          description:
            "Rutas entre selva y playa con vistas espectaculares.",
          icon: "Footprints",
        },
        {
          title: "Experiencias culturales",
          description:
            "Intercambio con comunidades locales y tradiciones ancestrales.",
          icon: "Landmark",
        },
        {
          title: "Wellness y yoga",
          description:
            "Sesiones de bienestar con vistas al Caribe.",
          icon: "Heart",
        },
        {
          title: "Snorkeling y mar",
          description:
            "Exploración de arrecifes y aguas cristalinas.",
          icon: "Waves",
        },
        {
          title: "Retiros corporativos",
          description:
            "Espacios privados para integración y reflexión de equipos.",
          icon: "Users",
        },
      ],
    },
    pacifico: {
      name: "Pacífico",
      tagline: "Biodiversidad única",
      description:
        "Una de las regiones más biodiversas del planeta, ideal para experiencias corporativas inmersivas.",
      activities: [
        {
          title: "Avistamiento de ballenas",
          description:
            "Encuentros con ballenas jorobadas en temporada (julio-octubre).",
          icon: "Fish",
        },
        {
          title: "Ecolodges premium",
          description:
            "Alojamiento exclusivo con acceso directo a selva y océano.",
          icon: "TreePine",
        },
        {
          title: "Buceo y snorkeling",
          description:
            "Inmersiones en arrecifes vírgenes y vida marina abundante.",
          icon: "Waves",
        },
        {
          title: "Trekking en la selva",
          description:
            "Expediciones guiadas en bosques de altísima biodiversidad.",
          icon: "Footprints",
        },
        {
          title: "Avistamiento de aves",
          description:
            "Observación de especies endémicas con guías expertos.",
          icon: "Bird",
        },
        {
          title: "Avistamiento de herpetos",
          description:
            "Tours especializados para ranas, serpientes y reptiles únicos.",
          icon: "Bug",
        },
      ],
    },
    amazonas: {
      name: "Amazonas",
      tagline: "Selva indómita",
      description:
        "El bosque tropical más grande del mundo para experiencias transformadoras con naturaleza y cultura.",
      activities: [
        {
          title: "Caminatas y hiking",
          description:
            "Expediciones guiadas por la selva amazónica.",
          icon: "Footprints",
        },
        {
          title: "Navegación por el río Amazonas",
          description:
            "Travesías en bote por el majestuoso río y sus afluentes.",
          icon: "Ship",
        },
        {
          title: "Delfines rosados",
          description:
            "Encuentros con delfines rosados en su hábitat natural.",
          icon: "Fish",
        },
        {
          title: "Fauna salvaje",
          description:
            "Observación de monos, caimanes, aves y más.",
          icon: "Binoculars",
        },
        {
          title: "Comunidades indígenas",
          description:
            "Intercambio cultural con comunidades locales y su sabiduría ancestral.",
          icon: "Users",
        },
        {
          title: "Pesca deportiva",
          description:
            "Experiencias de pesca de pirañas y especies emblemáticas.",
          icon: "Anchor",
        },
      ],
    },
    santander: {
      name: "Santander",
      tagline: "Capital de aventura",
      description:
        "Deportes extremos, cañones y experiencias adrenalina para equipos que buscan retos.",
      activities: [
        {
          title: "Deportes de aventura",
          description:
            "Parapente, bungee, rappel y otras actividades extremas.",
          icon: "Plane",
        },
        {
          title: "Senderismo y hiking",
          description:
            "Trekking por cañones y montañas con paisajes únicos.",
          icon: "Footprints",
        },
        {
          title: "Kayak",
          description:
            "Descensos en kayak por ríos cristalinos.",
          icon: "Anchor",
        },
        {
          title: "Rafting",
          description:
            "Descensos en balsa por rápidos del río Fonce y Suárez.",
          icon: "Waves",
        },
        {
          title: "Mountain bike",
          description:
            "Rutas técnicas de ciclismo de montaña.",
          icon: "Bike",
        },
        {
          title: "Retiros de well-being",
          description:
            "Bienestar combinado con aventura suave y naturaleza.",
          icon: "Heart",
        },
      ],
    },
  },
  fr: {
    cartagena: {
      name: "Cartagena",
      tagline: "Ville côtière historique",
      description:
        "Découvrez la magie de Cartagena, où l'histoire coloniale rencontre le charme caribéen. Un site UNESCO avec luxe, culture et mer.",
      activities: [
        {
          title: "Hôtels haut de gamme",
          description:
            "Séjours dans des hôtels boutique et de luxe au cœur de la ville fortifiée.",
          icon: "Hotel",
        },
        {
          title: "Expériences culturelles et gastronomiques",
          description:
            "Tours culinaires, dîners privés et expériences culturelles uniques.",
          icon: "UtensilsCrossed",
        },
        {
          title: "Navigation vers les îles du Rosaire",
          description:
            "Excursions en yacht ou catamaran avec snorkeling et déjeuner.",
          icon: "Ship",
        },
        {
          title: "Maisons en bord de mer",
          description:
            "Location de villas exclusives pour événements privés et retraites.",
          icon: "Home",
        },
        {
          title: "Beach clubs",
          description:
            "Accès aux meilleurs beach clubs avec service VIP.",
          icon: "Umbrella",
        },
        {
          title: "Retraites bien-être",
          description:
            "Programmes de spa, yoga, méditation et thérapies holistiques.",
          icon: "Heart",
        },
      ],
    },
    medellin: {
      name: "Medellín",
      tagline: "Ville du printemps éternel",
      description:
        "Capitale de l'innovation en Colombie, climat idéal et infrastructures de classe mondiale.",
      activities: [
        {
          title: "Conférences avec leaders",
          description:
            "Sessions avec entrepreneurs et experts de l'industrie.",
          icon: "Mic",
        },
        {
          title: "Visite de l'Orquideorama",
          description:
            "Expérience au Jardin botanique et sa biodiversité.",
          icon: "Flower2",
        },
        {
          title: "Événements premium",
          description:
            "Lieux exclusifs avec technologie et service haut de gamme.",
          icon: "CalendarDays",
        },
        {
          title: "Expériences culturelles",
          description:
            "Tours de la Comuna 13, musées, galeries et gastronomie.",
          icon: "Palette",
        },
        {
          title: "Metrocable et city tours",
          description:
            "Parcours panoramiques avec vues spectaculaires.",
          icon: "Cable",
        },
        {
          title: "Networking business",
          description:
            "Événements dans des rooftops et lieux exclusifs.",
          icon: "Users",
        },
      ],
    },
    bogota: {
      name: "Bogotá",
      tagline: "Capitale vibrante",
      description:
        "La capitale cosmopolite offre des lieux de classe mondiale, culture et opportunités corporate.",
      activities: [
        {
          title: "Conférences de référence",
          description:
            "Accès à des leaders et penseurs du pays.",
          icon: "Mic",
        },
        {
          title: "Expériences culturelles premium",
          description:
            "Visites privées de musées et espaces emblématiques.",
          icon: "Building2",
        },
        {
          title: "Événements de haut niveau",
          description:
            "Lieux pour conférences et événements corporate.",
          icon: "CalendarDays",
        },
        {
          title: "Gastronomie d'auteur",
          description:
            "Expériences culinaires avec chefs de référence.",
          icon: "UtensilsCrossed",
        },
        {
          title: "Monserrate et city tours",
          description:
            "Excursions vers Monserrate et quartiers iconiques.",
          icon: "Mountain",
        },
        {
          title: "Networking business",
          description:
            "Connexions avec l'écosystème business le plus divers.",
          icon: "Users",
        },
      ],
    },
    "coffee-region": {
      name: "Eje Cafetero",
      tagline: "Paysages caféiers",
      description:
        "Immersion dans la culture du café, paysages et expériences authentiques.",
      activities: [
        {
          title: "Conférences sectorielles",
          description:
            "Sessions avec experts en durabilité et entrepreneuriat rural.",
          icon: "Mic",
        },
        {
          title: "Tour café premium",
          description:
            "Visites de fincas, dégustation et processus du café.",
          icon: "Coffee",
        },
        {
          title: "Événements en haciendas",
          description:
            "Événements corporate dans des haciendas historiques.",
          icon: "CalendarDays",
        },
        {
          title: "Glamping & wellness",
          description:
            "Séjours boutique avec expériences de bien-être.",
          icon: "TreePine",
        },
        {
          title: "Villages colorés",
          description:
            "Visites de villages patrimoine comme Salento et Filandia.",
          icon: "Landmark",
        },
        {
          title: "Retraites bien-être",
          description:
            "Programmes de bien-être en pleine nature.",
          icon: "Heart",
        },
      ],
    },
    tayrona: {
      name: "Tayrona",
      tagline: "Caraïbes luxuriantes",
      description:
        "Plages vierges et jungle tropicale pour des retraites corporate inspirantes.",
      activities: [
        {
          title: "Ecolodges boutique",
          description:
            "Hébergement premium face à la mer ou dans la jungle.",
          icon: "TreePine",
        },
        {
          title: "Randonnée",
          description:
            "Sentiers entre jungle et plages avec vues spectaculaires.",
          icon: "Footprints",
        },
        {
          title: "Expériences culturelles",
          description:
            "Rencontres avec communautés locales et traditions.",
          icon: "Landmark",
        },
        {
          title: "Wellness & yoga",
          description:
            "Séances de bien-être avec vue sur la mer.",
          icon: "Heart",
        },
        {
          title: "Snorkeling",
          description:
            "Exploration de récifs et eaux cristallines.",
          icon: "Waves",
        },
        {
          title: "Retraites corporate",
          description:
            "Espaces privés pour intégration et réflexion d'équipe.",
          icon: "Users",
        },
      ],
    },
    pacifico: {
      name: "Pacifique",
      tagline: "Biodiversité exceptionnelle",
      description:
        "L'une des régions les plus biodiverses au monde, idéale pour des expériences immersives.",
      activities: [
        {
          title: "Observation des baleines",
          description:
            "Rencontres avec baleines à bosse en saison (juillet-octobre).",
          icon: "Fish",
        },
        {
          title: "Ecolodges premium",
          description:
            "Hébergement exclusif entre jungle et océan.",
          icon: "TreePine",
        },
        {
          title: "Plongée & snorkeling",
          description:
            "Immersions dans des récifs vierges et vie marine abondante.",
          icon: "Waves",
        },
        {
          title: "Trekking en jungle",
          description:
            "Expéditions guidées dans une forêt ultra-biodiverse.",
          icon: "Footprints",
        },
        {
          title: "Observation d'oiseaux",
          description:
            "Espèces endémiques avec guides experts.",
          icon: "Bird",
        },
        {
          title: "Herpétofaune",
          description:
            "Tours spécialisés pour amphibiens et reptiles uniques.",
          icon: "Bug",
        },
      ],
    },
    amazonas: {
      name: "Amazonas",
      tagline: "Forêt indomptée",
      description:
        "La plus grande forêt tropicale du monde, idéale pour des expériences transformatrices.",
      activities: [
        {
          title: "Randonnées",
          description:
            "Expéditions guidées dans la jungle amazonienne.",
          icon: "Footprints",
        },
        {
          title: "Navigation sur l'Amazone",
          description:
            "Traversées en bateau sur le fleuve Amazone et ses affluents.",
          icon: "Ship",
        },
        {
          title: "Dauphins roses",
          description:
            "Rencontres avec les dauphins roses dans leur habitat.",
          icon: "Fish",
        },
        {
          title: "Faune sauvage",
          description:
            "Observation de singes, caïmans, oiseaux et plus.",
          icon: "Binoculars",
        },
        {
          title: "Communautés indigènes",
          description:
            "Échanges culturels avec les communautés locales.",
          icon: "Users",
        },
        {
          title: "Pêche sportive",
          description:
            "Expériences de pêche de piranhas et espèces emblématiques.",
          icon: "Anchor",
        },
      ],
    },
    santander: {
      name: "Santander",
      tagline: "Capitale de l'aventure",
      description:
        "Sports extrêmes, canyons et adrénaline pour équipes ambitieuses.",
      activities: [
        {
          title: "Sports d'aventure",
          description:
            "Parapente, bungee, rappel et activités extrêmes.",
          icon: "Plane",
        },
        {
          title: "Randonnée",
          description:
            "Trekking dans des canyons et montagnes impressionnantes.",
          icon: "Footprints",
        },
        {
          title: "Kayak",
          description:
            "Descente en kayak sur des rivières cristallines.",
          icon: "Anchor",
        },
        {
          title: "Rafting",
          description:
            "Descente en rafting sur les rapides du río Fonce et Suárez.",
          icon: "Waves",
        },
        {
          title: "VTT",
          description:
            "Parcours techniques de VTT en montagne.",
          icon: "Bike",
        },
        {
          title: "Retraites bien-être",
          description:
            "Bien-être associé à la nature et l'aventure douce.",
          icon: "Heart",
        },
      ],
    },
  },
};

function requireCoordinates(id: string) {
  const coordinates = DESTINATION_COORDINATES[id];
  if (!coordinates) {
    throw new Error(
      `Faltan coordenadas para el destino '${id}'. Agrega lat/lon en DESTINATION_COORDINATES.`
    );
  }
  return coordinates;
}

function getBaseDestinations() {
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
}

const BASE_DESTINATIONS = getBaseDestinations();
const REQUIRED_LOCALES: Locale[] = ["es", "fr"];

function assertDestinationTranslations() {
  for (const locale of REQUIRED_LOCALES) {
    const translations = DESTINATION_TRANSLATIONS[locale];
    for (const id of ENABLED_DESTINATION_IDS) {
      if (!translations[id]) {
        throw new Error(
          `Falta traducción corporativa para '${id}' en locale '${locale}'.`
        );
      }
    }
  }
}

assertDestinationTranslations();

export function getCorporateDestinations(locale: Locale): CorporateDestination[] {
  if (locale === "en") return BASE_DESTINATIONS;

  const translations = DESTINATION_TRANSLATIONS[locale];
  return BASE_DESTINATIONS.map((destination) => {
    const override = translations[destination.id];
    if (!override) return destination;

    return {
      ...destination,
      name: override.name,
      tagline: override.tagline,
      description: override.description,
      activities: override.activities,
    };
  });
}
