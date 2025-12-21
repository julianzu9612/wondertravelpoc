import type { Locale } from "@/i18n/routing";
import type { LocalizedTrip, Trip } from "@/data/types";

const TRIPS: Trip[] = [
  {
    id: "1",
    price: 1800000,
    images: ["/images/trips/ciudad-perdida-1.jpg"],
    isFeatured: true,
    translations: {
      en: {
        slug: "lost-city-trek",
        title: "Lost City Trek",
        shortDescription:
          "Discover the ancestral Teyuna in the Sierra Nevada de Santa Marta. A 4-day epic trek through the jungle to the sacred ruins.",
        duration: "4 days / 3 nights",
        difficulty: "High",
        categories: ["Adventure", "Cultural", "Trekking"],
        itinerary: [
          {
            day: 1,
            title: "Adventure Begins",
            description:
              "Departure from Santa Marta to El Mamey. 4-hour hike to the first camp.",
          },
          {
            day: 2,
            title: "Toward Mutanyi",
            description:
              "Hike while visiting Kogui and Wiwa indigenous communities.",
          },
          {
            day: 3,
            title: "Lost City",
            description:
              "Climb the 1,200 steps to the sacred terraces of Teyuna.",
          },
          {
            day: 4,
            title: "Return",
            description: "Descent and transfer back to Santa Marta.",
          },
        ],
      },
      es: {
        slug: "ciudad-perdida",
        title: "Ciudad Perdida Trek",
        shortDescription:
          "Descubre la ancestral Teyuna en la Sierra Nevada de Santa Marta. Una caminata épica de 4 días a través de la selva hasta las ruinas sagradas.",
        duration: "4 días / 3 noches",
        difficulty: "Alta",
        categories: ["Aventura", "Cultural", "Trekking"],
        itinerary: [
          {
            day: 1,
            title: "Inicio de la Aventura",
            description:
              "Salida desde Santa Marta hacia el Mamey. Caminata de 4 horas hasta el primer campamento.",
          },
          {
            day: 2,
            title: "Hacia Mutanyi",
            description:
              "Caminata visitando comunidades indígenas Kogui y Wiwa.",
          },
          {
            day: 3,
            title: "Ciudad Perdida",
            description:
              "Ascenso por los 1.200 escalones hasta las terrazas sagradas.",
          },
          {
            day: 4,
            title: "Regreso",
            description: "Descenso y traslado a Santa Marta.",
          },
        ],
      },
      fr: {
        slug: "trek-cite-perdue",
        title: "Trek de la Cité Perdue",
        shortDescription:
          "Découvrez l'ancestrale Teyuna dans la Sierra Nevada de Santa Marta. Un trek épique de 4 jours à travers la jungle jusqu'aux ruines sacrées.",
        duration: "4 jours / 3 nuits",
        difficulty: "Élevée",
        categories: ["Aventure", "Culturel", "Trekking"],
        itinerary: [
          {
            day: 1,
            title: "Début de l'aventure",
            description:
              "Départ de Santa Marta vers El Mamey. Randonnée de 4 heures jusqu'au premier camp.",
          },
          {
            day: 2,
            title: "Vers Mutanyi",
            description:
              "Randonnée avec visites des communautés indigènes Kogui et Wiwa.",
          },
          {
            day: 3,
            title: "Cité Perdue",
            description:
              "Montée des 1 200 marches vers les terrasses sacrées de Teyuna.",
          },
          {
            day: 4,
            title: "Retour",
            description: "Descente et transfert vers Santa Marta.",
          },
        ],
      },
    },
  },
  {
    id: "2",
    price: 2500000,
    images: ["/images/trips/amazonas-1.jpg"],
    isFeatured: true,
    translations: {
      en: {
        slug: "magical-amazon",
        title: "Magical Amazon",
        shortDescription:
          "Immerse yourself in the Amazon rainforest. Pink dolphins and encounters with Tikuna communities.",
        duration: "5 days / 4 nights",
        difficulty: "Moderate",
        categories: ["Nature", "Cultural", "Adventure"],
        itinerary: [
          {
            day: 1,
            title: "Arrival in Leticia",
            description: "Welcome and transfer to the natural reserve.",
          },
          {
            day: 2,
            title: "Puerto Nariño",
            description: "River navigation and pink dolphin spotting.",
          },
          {
            day: 3,
            title: "Indigenous Communities",
            description: "Cultural exchange with the Tikuna community.",
          },
          {
            day: 4,
            title: "Nature Reserve",
            description: "Piranha fishing and rainforest walk.",
          },
          {
            day: 5,
            title: "Return",
            description: "Transfer to the airport.",
          },
        ],
      },
      es: {
        slug: "amazonas-magico",
        title: "Amazonas Mágico",
        shortDescription:
          "Inmersión en la selva amazónica. Delfines rosados y encuentro con comunidades Tikuna.",
        duration: "5 días / 4 noches",
        difficulty: "Media",
        categories: ["Naturaleza", "Cultural", "Aventura"],
        itinerary: [
          {
            day: 1,
            title: "Llegada a Leticia",
            description: "Recepción y traslado a la reserva natural.",
          },
          {
            day: 2,
            title: "Puerto Nariño",
            description: "Navegación y avistamiento de delfines rosados.",
          },
          {
            day: 3,
            title: "Comunidades Indígenas",
            description: "Intercambio cultural con la comunidad Tikuna.",
          },
          {
            day: 4,
            title: "Reserva Natural",
            description: "Pesca de pirañas y caminata por la selva.",
          },
          {
            day: 5,
            title: "Regreso",
            description: "Traslado al aeropuerto.",
          },
        ],
      },
      fr: {
        slug: "amazonie-magique",
        title: "Amazonie Magique",
        shortDescription:
          "Immersion dans la forêt amazonienne. Dauphins roses et rencontres avec les communautés Tikuna.",
        duration: "5 jours / 4 nuits",
        difficulty: "Modérée",
        categories: ["Nature", "Culturel", "Aventure"],
        itinerary: [
          {
            day: 1,
            title: "Arrivée à Leticia",
            description: "Accueil et transfert vers la réserve naturelle.",
          },
          {
            day: 2,
            title: "Puerto Nariño",
            description: "Navigation fluviale et observation des dauphins roses.",
          },
          {
            day: 3,
            title: "Communautés indigènes",
            description: "Échange culturel avec la communauté Tikuna.",
          },
          {
            day: 4,
            title: "Réserve naturelle",
            description: "Pêche aux piranhas et marche dans la jungle.",
          },
          {
            day: 5,
            title: "Retour",
            description: "Transfert vers l'aéroport.",
          },
        ],
      },
    },
  },
  {
    id: "3",
    price: 850000,
    images: ["/images/trips/tatacoa-1.webp"],
    isFeatured: false,
    translations: {
      en: {
        slug: "tatacoa-desert-stars",
        title: "Desert Stars",
        shortDescription:
          "Astronomy experience in the Tatacoa Desert. Surreal landscapes and star-filled skies.",
        duration: "3 days / 2 nights",
        difficulty: "Easy",
        categories: ["Nature", "Relaxation", "Photography"],
        itinerary: [
          {
            day: 1,
            title: "Red Desert",
            description: "Walk through the Cuzco labyrinth.",
          },
          {
            day: 2,
            title: "Gray Desert",
            description: "Valley of the Xilópalos and stargazing night.",
          },
          {
            day: 3,
            title: "Return",
            description: "Sunrise in the desert and return.",
          },
        ],
      },
      es: {
        slug: "desierto-tatacoa",
        title: "Estrellas del Desierto",
        shortDescription:
          "Observación astronómica en el Desierto de la Tatacoa. Paisajes surreales y cielos estrellados.",
        duration: "3 días / 2 noches",
        difficulty: "Baja",
        categories: ["Naturaleza", "Relax", "Fotografía"],
        itinerary: [
          {
            day: 1,
            title: "Desierto Rojo",
            description: "Caminata por el laberinto del Cuzco.",
          },
          {
            day: 2,
            title: "Desierto Gris",
            description: "Valle de los Xilópalos y observación astronómica.",
          },
          {
            day: 3,
            title: "Regreso",
            description: "Amanecer en el desierto y regreso.",
          },
        ],
      },
      fr: {
        slug: "etoiles-desert-tatacoa",
        title: "Étoiles du Désert",
        shortDescription:
          "Observation astronomique dans le désert de Tatacoa. Paysages surréalistes et ciels étoilés.",
        duration: "3 jours / 2 nuits",
        difficulty: "Facile",
        categories: ["Nature", "Détente", "Photographie"],
        itinerary: [
          {
            day: 1,
            title: "Désert Rouge",
            description: "Marche dans le labyrinthe du Cuzco.",
          },
          {
            day: 2,
            title: "Désert Gris",
            description: "Vallée des Xilópalos et nuit d'astronomie.",
          },
          {
            day: 3,
            title: "Retour",
            description: "Lever du soleil dans le désert et retour.",
          },
        ],
      },
    },
  },
  {
    id: "4",
    price: 2100000,
    images: ["/images/trips/mavicure-1.jpg"],
    isFeatured: true,
    translations: {
      en: {
        slug: "mavicure-hills",
        title: "Mavicure Hills",
        shortDescription:
          "Expedition to the sacred tepuis of Guainía. River navigation and a summit with 360° views.",
        duration: "4 days / 3 nights",
        difficulty: "Moderate",
        categories: ["Adventure", "Nature", "Expedition"],
        itinerary: [
          {
            day: 1,
            title: "Inírida",
            description: "Tour of the Estrella Fluvial.",
          },
          {
            day: 2,
            title: "River Navigation",
            description: "Upstream to the base of the hills.",
          },
          {
            day: 3,
            title: "Summit",
            description: "Sunrise from the top of Mavicure.",
          },
          {
            day: 4,
            title: "Return",
            description: "Navigation and departure flight.",
          },
        ],
      },
      es: {
        slug: "cerros-mavicure",
        title: "Cerros de Mavicure",
        shortDescription:
          "Expedición a los tepuyes sagrados del Guainía. Navegación y ascenso con vistas de 360°.",
        duration: "4 días / 3 noches",
        difficulty: "Media",
        categories: ["Aventura", "Naturaleza", "Expedición"],
        itinerary: [
          {
            day: 1,
            title: "Inírida",
            description: "Recorrido por la Estrella Fluvial.",
          },
          {
            day: 2,
            title: "Navegación",
            description: "Río arriba hasta la base de los cerros.",
          },
          {
            day: 3,
            title: "Ascenso",
            description: "Amanecer desde la cima del Mavicure.",
          },
          {
            day: 4,
            title: "Regreso",
            description: "Navegación y vuelo de salida.",
          },
        ],
      },
      fr: {
        slug: "collines-mavicure",
        title: "Collines de Mavicure",
        shortDescription:
          "Expédition vers les tepuis sacrés du Guainía. Navigation fluviale et ascension avec vue à 360°.",
        duration: "4 jours / 3 nuits",
        difficulty: "Modérée",
        categories: ["Aventure", "Nature", "Expédition"],
        itinerary: [
          {
            day: 1,
            title: "Inírida",
            description: "Visite de l'Estrella Fluvial.",
          },
          {
            day: 2,
            title: "Navigation",
            description: "Remontée du fleuve jusqu'à la base des collines.",
          },
          {
            day: 3,
            title: "Ascension",
            description: "Lever du soleil depuis le sommet de Mavicure.",
          },
          {
            day: 4,
            title: "Retour",
            description: "Navigation et vol de départ.",
          },
        ],
      },
    },
  },
  {
    id: "5",
    price: 1950000,
    images: ["/images/trips/cano-cristales-1.webp"],
    isFeatured: true,
    translations: {
      en: {
        slug: "cano-cristales",
        title: "Caño Cristales",
        shortDescription:
          "The river of five colors. The most beautiful river in the world in the Sierra de la Macarena.",
        duration: "3 days / 2 nights",
        difficulty: "Moderate",
        categories: ["Nature", "Photography", "Adventure"],
        itinerary: [
          {
            day: 1,
            title: "Arrival",
            description: "Flight to La Macarena and orientation.",
          },
          {
            day: 2,
            title: "Caño Cristales",
            description: "Full day exploring the river of colors.",
          },
          {
            day: 3,
            title: "Return",
            description: "Visit another sector and return flight.",
          },
        ],
      },
      es: {
        slug: "cano-cristales",
        title: "Caño Cristales",
        shortDescription:
          "El río de los cinco colores. El río más hermoso del mundo en la Sierra de la Macarena.",
        duration: "3 días / 2 noches",
        difficulty: "Media",
        categories: ["Naturaleza", "Fotografía", "Aventura"],
        itinerary: [
          {
            day: 1,
            title: "Llegada",
            description: "Vuelo a La Macarena y orientación.",
          },
          {
            day: 2,
            title: "Caño Cristales",
            description: "Día completo en el río de colores.",
          },
          {
            day: 3,
            title: "Regreso",
            description: "Visita a otro sector y vuelo de regreso.",
          },
        ],
      },
      fr: {
        slug: "cano-cristales",
        title: "Caño Cristales",
        shortDescription:
          "La rivière aux cinq couleurs. La plus belle rivière du monde dans la Sierra de la Macarena.",
        duration: "3 jours / 2 nuits",
        difficulty: "Modérée",
        categories: ["Nature", "Photographie", "Aventure"],
        itinerary: [
          {
            day: 1,
            title: "Arrivée",
            description: "Vol vers La Macarena et orientation.",
          },
          {
            day: 2,
            title: "Caño Cristales",
            description: "Journée complète au bord de la rivière colorée.",
          },
          {
            day: 3,
            title: "Retour",
            description: "Visite d'un autre secteur et vol retour.",
          },
        ],
      },
    },
  },
];

export function getTrips(locale: Locale): LocalizedTrip[] {
  return TRIPS.map((trip) => {
    const translation = trip.translations[locale] ?? trip.translations.en;
    return {
      id: trip.id,
      slug: translation.slug,
      title: translation.title,
      shortDescription: translation.shortDescription,
      price: trip.price,
      duration: translation.duration,
      difficulty: translation.difficulty,
      images: trip.images,
      categories: translation.categories,
      itinerary: translation.itinerary,
      isFeatured: trip.isFeatured,
    };
  });
}

export function getTripBySlug(locale: Locale, slug: string): LocalizedTrip | null {
  const trip = TRIPS.find(
    (entry) =>
      entry.translations[locale]?.slug === slug ||
      entry.translations.en.slug === slug
  );
  if (!trip) return null;

  const translation = trip.translations[locale] ?? trip.translations.en;
  return {
    id: trip.id,
    slug: translation.slug,
    title: translation.title,
    shortDescription: translation.shortDescription,
    price: trip.price,
    duration: translation.duration,
    difficulty: translation.difficulty,
    images: trip.images,
    categories: translation.categories,
    itinerary: translation.itinerary,
    isFeatured: trip.isFeatured,
  };
}

export function getFeaturedTrips(locale: Locale): LocalizedTrip[] {
  return getTrips(locale).filter((trip) => trip.isFeatured);
}

export function getRelatedTrips(
  locale: Locale,
  slug: string,
  count = 3
): LocalizedTrip[] {
  const trips = getTrips(locale);
  const current = trips.find((trip) => trip.slug === slug);
  if (!current) return trips.slice(0, count);

  return trips
    .filter((trip) => trip.id !== current.id)
    .slice(0, count);
}

export function getCategories(locale: Locale): string[] {
  const categories = new Set<string>();
  getTrips(locale).forEach((trip) => {
    trip.categories.forEach((category) => categories.add(category));
  });
  return Array.from(categories);
}

export function getTripSlugs(locale: Locale): string[] {
  return TRIPS.map((trip) => trip.translations[locale]?.slug).filter(
    (slug): slug is string => Boolean(slug)
  );
}
