import { getTripCountries } from '@services/trips/countries/getCountries';

const BASE_URL = 'https://wondertravel.co';

const TRIPS = [
  'from-inca-ruins-to-amazon-rainforest-98',
  'ecuadorian-rainforest-ancient-cultures-more-108',
  'pura-vida-expedition-109',
  'amazonas-tres-fronteras-grupal-19',
  'encanto-llanero-en-invierno-36',
  'classic-peru-with-hutravelstheworld-104',
  'cano-cristales-el-rio-de-los-siete-colores-27',
  'travesia-a-la-cumbre-del-nevado-del-tolima-66',
  'cano-cristales-el-rio-de-los-siete-colores-25',
  'aventura-en-el-choco-29',
  'land-of-cyclists-climbs-magical-towns-155',
  'pacifico-magico-en-bahia-malaga-42',
  'discovering-the-new-colombia-72',
  'musica-tradicion-y-playa-guapi-y-gorgona-5d4n-149',
  'liberacion-de-tortugas-en-el-choco-20',
  'nevado-del-cocuy-privado-121',
  'explora-guaviare-en-inverno-44',
  'colombian-journey-130',
  'from-nazca-skies-to-machu-picchu-heights-express-114',
  'ciudad-perdida-el-trek-mas-famoso-de-suramerica-grupal-18',
  'colombia-caribbean-adventure-lost-city-79',
  'alternative-mexico-75',
  'discovering-chiles-marvels-110',
  'colombia-the-most-biodiverse-country-71',
  'colombia-from-the-city-to-the-jungle-78',
  'aventura-en-bahia-solano-40',
  'colombian-journey-express-76',
  'peru-inca-trails-river-tales-express-92',
  'trekking-en-los-cerros-de-mavecure-10',
  'guainia-y-cerros-de-mavecure-9',
  'from-nazca-skies-to-machu-picchu-heights-135',
  'exploring-colombias-hidden-treasures-77',
  'colombian-journey-express-with-hutravelstheworld-70',
  'classic-colombia-86',
  'guaviare-mountain-bike-57',
  'perus-ancient-treasures-and-water-adventures-96',
  'explora-guaviare-en-verano-87',
  'taco-trail-120',
  'argentina-adventure-from-city-lights-to-glacial-heights-116',
  'rio-la-miel-lodge-13',
  'enchanting-colombia-from-the-mountain-to-the-sea-119',
  'musica-tradicion-y-playa-guapi-y-gorgona-46',
  'girls-surf-camp-ballenas-68',
  'nevado-el-cocuy-11',
  'descubre-el-guaviare-en-verano-grupal-31',
  'descubre-el-guaviare-en-temporada-de-invierno-30',
  'ecuador-from-quito-to-galapagos-106',
  'aventura-nuqui-21',
  'en-busca-de-las-jorobadas-nuqui-26',
  'explora-el-nevado-santa-isabel-67',
  'chile-nature-culture-and-patagonian-wonders-103',
  'natural-wonders-of-costa-rica-81',
  'patagonian-journey-art-adventure-and-nature-111',
  'from-nazca-skies-to-machu-picchu-heights-136',
  'chile-mapuche-trails-volcanic-tales-112',
  'producto-de-prueba-para-demo-48',
  'costa-rica-jungles-volcanoes-and-hanging-bridges-100',
  'classic-peru-132',
  'explora-la-magia-del-putumayo-grupal-32',
  'spicy-mexico-a-culinary-adventure-117',
  'amazonas-tres-fronteras-privado-91',
  'costa-rican-rainforests-and-waterfalls-101',
  'rio-guejar-extremo-12',
  'ecuadorian-enchantment-107',
  'discover-argentina-tradition-waterfalls-wine-102',
  'journey-to-argentinas-northwest-salta-jujuy-115',
  'guaviare-en-invierno-82',
  'cano-cristales-41',
  'colombian-lost-city-80',
  'bolivia-la-paz-uyuni-and-titicaca-lake-129',
  'producto-de-prueba-para-demo-49',
  'paraiso-en-bahia-solano-selva-y-mar-118',
];

interface ExtendedSitemapEntry {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
  alternates?: {
    languages: {
      [key: string]: string;
    };
  };
}

export default async function sitemap(): Promise<ExtendedSitemapEntry[]> {
  const countries = await getTripCountries();

  const tripsGenenerate: ExtendedSitemapEntry[] = TRIPS.map((i, index) => ({
    url: `${BASE_URL}/es/trips/${i}`,
    lastModified: new Date(),
    priority: Number(`2.${index}`),
    alternates: {
      languages: {
        en: `${BASE_URL}/en/trips/${i}`,
      },
    },
  }));

  const countriesLanding: ExtendedSitemapEntry[] = countries?.map((i, index) => ({
    url: `${BASE_URL}/es/countries/${i?.name}`,
    lastModified: new Date(),
    priority: Number(`3.${index}`),
    alternates: {
      languages: {
        en: `${BASE_URL}/en/countries/${i?.name}`,
      },
    },
  }));

  return [
    ...tripsGenenerate,
    ...countriesLanding,
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          es: `${BASE_URL}/es`,
          en: `${BASE_URL}/en`,
          fr: `${BASE_URL}/fr`,
        },
      },
    },
  ];
}
