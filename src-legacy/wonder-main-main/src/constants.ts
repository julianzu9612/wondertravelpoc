export const CLanguage = {
  lang: 'es',
  languages: ['es', 'en', 'fr'],
  ns: 'translation',
};

export const GTM_ID = 'GTM-N3MC2R2';

export function whatsappUrl(string?: string, custoDefault?: boolean) {
  const message = custoDefault ? string : string ?`¡¡Hola!! Quiero más información de ${string} con Wonder`
    : '¡Hola wonder! ando buscando un poco de ayuda con mi proceso';
  const urlWhat = `https://api.whatsapp.com/send?phone=573115150177&text=${message}`;
  return urlWhat;
}

export const BASE_URL = '/trips';

export const months = [
  { label: 'Enero', month: '01' },
  { label: 'Febrero', month: '02' },
  { label: 'Marzo', month: '03' },
  { label: 'Abril', month: '04' },
  { label: 'Mayo', month: '05' },
  { label: 'Junio', month: '06' },
  { label: 'Julio', month: '07' },
  { label: 'Agosto', month: '08' },
  { label: 'Septiembre', month: '09' },
  { label: 'Octubre', month: '10' },
  { label: 'Noviembre', month: '11' },
  { label: 'Diciembre', month: '12' },
];

export const CPagination = {
  limit: 7,
};

export const CWonderCategoryData = [
  {
    label: 'Trekking',
    image:
      'https://cdn.wondertravel.co/assets/webapp/filter-categories/trekking.png',
    url: '/trekking',
    filters: {},
  },
  {
    label: 'Aventura',
    image:
      'https://cdn.wondertravel.co/assets/webapp/filter-categories/aventura.png',
    url: '/aventura',
    filters: {},
  },
  {
    label: 'Immersion in communities',
    image:
      'https://cdn.wondertravel.co/assets/webapp/filter-categories/inmersion-en-comunidades.png',
    url: '/inmersion-en-comunidades',
    filters: {},
  },
  {
    label: 'Whale watching',
    image:
      'https://cdn.wondertravel.co/assets/webapp/filter-categories/ballenas.png',
    url: '/avistamiento-de-ballenas',
    filters: {},
  },
  {
    label: 'Colombia',
    image:
      'https://cdn.wondertravel.co/assets/webapp/filter-categories/colombia.png',
    url: '/colombia',
    filters: {},
  },
  {
    label: 'México',
    image:
      'https://cdn.wondertravel.co/assets/webapp/filter-categories/mexico.png',
    url: '/mexico',
    filters: {},
  },
  {
    label: 'Main Cities',
    image:
      'https://cdn.wondertravel.co/assets/webapp/filter-categories/ciudades-principales.png',
    url: '/ciudades-principales',
    filters: {},
  },
  {
    label: 'Wellness',
    image:
      'https://cdn.wondertravel.co/assets/webapp/filter-categories/wellness.png',
    url: '/wellness',
    filters: {},
  },
  {
    label: 'Nature',
    image:
      'https://cdn.wondertravel.co/assets/webapp/filter-categories/aventura.png',
    url: '/naturaleza',
    filters: {},
  },
  {
    label: 'Family Friendly',
    image:
      'https://cdn.wondertravel.co/assets/webapp/filter-categories/family-friendly.png',
    url: '/family-friendly',
    filters: {},
  },
  {
    label: 'Black Weeks',
    image:
      'https://storage.googleapis.com/wonder-334623_test-bucket-core/tag/Captura_de_pantalla_2023-11-16_a_las_5.29.54_p.m..png',
    url: '/black-weeks',
    filters: {},
  },
];

export const CWonderLines = [
  {
    id: 1,
    label: 'Trips',
    landing: '/trips',
    title: 'TS_TripsTitle',
    headline: 'TS_TripsHeadline',
    image:
      'https://cdn.wondertravel.co/assets/webapp/wonder-vertical/trips-herobanner.png',
    categories: [
      {
        label: 'Avistamiento de ballenas',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/ballenas.png',
        url: '/avistamiento-de-ballenas',
        filters: {},
      },
      {
        label: 'Bienestar & Well-being',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/wellness.png',
        url: '/wellness',
        filters: {},
      },
      {
        label: 'Naturaleza',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/aventura.png',
        url: '/naturaleza',
        filters: {},
      },
      {
        label: 'Family friendly',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/family-friendly.png',
        url: '/family-friendly',
        filters: {},
      },
    ],
  },
  {
    id: 2,
    label: 'Expeditions',
    landing: '/expeditions',
    title: 'TS_ExpeditionsTitle',
    headline: 'TS_ExpeditionsHeadline',
    image:
      'https://cdn.wondertravel.co/assets/webapp/wonder-vertical/expeditions-herobanner.png',
    categories: [
      {
        label: 'Trekking',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/trekking.png',
        url: '/trekking',
        filters: {},
      },
      {
        label: 'Aventura',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/aventura.png',
        url: '/aventura',
        filters: {},
      },
      {
        label: 'Inmersión en comunidades',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/inmersion-en-comunidades.png',
        url: '/inmersion-en-comunidades',
        filters: {},
      },
      {
        label: 'Avistamiento de ballenas',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/ballenas.png',
        url: '/avistamiento-de-ballenas',
        filters: {},
      },
    ],
  },
  {
    id: 3,
    label: 'Roundtrips',
    landing: '/roundtrips',
    title: 'TS_RoundtripsTitle',
    headline: 'TS_RoundtripsHeadline',
    image:
      'https://cdn.wondertravel.co/assets/webapp/wonder-vertical/roundtrips-herobanner.png',
    categories: [
      {
        label: 'Colombia',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/colombia.png',
        url: '/colombia',
        filters: {},
      },
      {
        label: 'México',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/mexico.png',
        url: '/mexico',
        filters: {},
      },
      {
        label: 'Ciudades principales',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/ciudades-principales.png',
        url: '/ciudades-principales',
        filters: {},
      },
      {
        label: 'Aventura',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/aventura.png',
        url: '/aventura',
        filters: {},
      },
    ],
  },
  {
    id: 0,
    label: 'Destinations',
    landing: '/',
    title: 'TS_RoundtripsTitle',
    headline: 'TS_RoundtripsHeadline',
    image:
      'https://cdn.wondertravel.co/assets/webapp/wonder-vertical/roundtrips-herobanner.png',
    categories: [
      {
        label: 'Colombia',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/colombia.png',
        url: '/colombia',
        filters: {},
      },
      {
        label: 'México',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/mexico.png',
        url: '/mexico',
        filters: {},
      },
      {
        label: 'Ciudades principales',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/ciudades-principales.png',
        url: '/ciudades-principales',
        filters: {},
      },
      {
        label: 'Aventura',
        image:
          'https://cdn.wondertravel.co/assets/webapp/filter-categories/aventura.png',
        url: '/aventura',
        filters: {},
      },
    ],
  },
];

export const CWonderSEOPages = {
  '/categories': {
    id: 1,
    label: 'Categories',
    landing: '/categories',
    title: 'Activities',
    headline: 'Find the best activities in the itineraries has for you!',
    image: '/assets/images/categories.webp',
  },
  '/travel-styles': {
    id: 1,
    label: 'Travel Styles',
    landing: '/travel-styles',
    title: 'TS_TravelStylesTitle',
    headline: 'TS_TravelStylesHeadline',
    image: '/assets/images/travel-styles-main-background.webp',
  },
  '/countries': {
    id: 2,
    label: 'Countries',
    landing: '/countries',
    title: 'TS_CountriesTitle',
    headline: 'TS_CountriesHeadline',
    image:
      'https://cdn.wondertravel.co/assets/webapp/seo/countries-main-background.jpg',
  },
};

export const CReviews = [
  {
    name: 'Amanda Nwosu',
    place: 'Classic Colombia',
    comment:
      'I had the best time in Colombia! I was so impressed by the attention to detail from Wonder Travel. All the staff were friendly and so helpful through out. 11/10!',
  },
  {
    name: 'Camila Vargas',
    place: 'Colombia\'s Hidden Treasures',
    comment:
      'Este viaje cumplió y superó todas las expectativas que teníamos. Fue un viaje increíble e inolvidable! Organizado impecablemente, todo funcionó sin problemas y cada experiencia fue mágica.',
  },
  {
    name: 'Michael Allan',
    place: 'Amazonas 3 Fronteras',
    comment: 'Simply amazing',
  },
  {
    name: 'Andrés Cangrejo',
    place: 'Cerros de Mavicure',
    comment:
      'Excelente, siempre estuvieron pendientes desde que me encontré interesado en viajar, siempre atentos a mis dudas con el viaje, también el vuelo, siempre tuve la compañía',
  },
  {
    name: 'Jakub Goralski',
    place: 'Cerros de Mavicure',
    comment:
      'Everything was very well organised, the transportation was always on time, very accomodating as well. I liked the fact, that we got our itenerary and all the prep materials way in advance. At this point I have no complaints and cannot identify any weak points.',
  },
];

export const CWonderImpactItems = [
  {
    label: 'Planted trees',
    value: '+1.450',
  },
  {
    label: 'Impacted Families',
    value: '+375',
  },
  {
    label: 'Hosts',
    value: '+25',
  },
  {
    label: 'Travelers',
    value: '+3.400',
  },
  // {
  //   label: 'Regions PDET',
  //   value: '7'
  // }
];

export const CWonderSponsors = [
  {
    name: 'Acotur',
    image: '/assets/images/homepage/logo-acotur.svg',
    width: 100,
    height: 100,
  },
  {
    name: 'Byfield',
    image: '/assets/images/homepage/logo-byfield.svg',
    width: 100,
    height: 100,
  },
  {
    name: 'Bogotá Eats',
    image: '/assets/images/homepage/logo-bogota-eats.svg',
    width: 100,
    height: 100,
  },
  {
    name: 'Saju',
    image: '/assets/images/homepage/logo-saju.svg',
    width: 100,
    height: 100,
  },
  {
    name: 'Saving The Amazon',
    image: '/assets/images/homepage/logo-saving-the-amazon.svg',
    width: 100,
    height: 100,
  },
];

export const CTripsFilters = {
  tripName: '%like%', // Search
  lineType: [3], // Wonder verticals
  tripType: [3], // Wonder verticals alias
  duration: 2, // Dias y noches ... desde?
  availableDates: ['tripDates[]'],
  priceRange: ['min', 'max'], // desde
  country: ['all', 'co', 'mx'],
  location: '%like%', // Search
  tourGuide: ['none', 'local', 'wonder'],
  accommodation: true,
  accommodationQuality: 5,
  physicalPerformance: 5,
  tags: ['all', '1', '2'], // Search
};

export const formIdHubspotEnContact = 'e1a34ebb-cf9c-4900-b419-922cd063b179';
export const formIdHubspotEsContact = '8b8b2790-f2c0-4653-9af0-ecc1b2495834';
export const subscribeFormEn = '66d0cc1e-e0b3-4495-b26a-8e197f01e1f2';
export const subscribeFormEs = '7a378628-2811-4f83-b532-6a94567c3aeb';

export const linkTermsAndConditions = 'https://bit.ly/3QPUj7n';
export const sostenibilityPoliticsLink = 'https://drive.google.com/file/d/1skmILfP2su7shFN6xOTLbKyTQMyRe5zk/view?pli=1';

export const urlReviewGoogle =
  'https://www.google.com/search?q=wonder+travel&rlz=1C5CHFA_enCO1073CO1074&oq=wonder+travel&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYPTIGCAMQRRg8MgYIBBBFGDwyBggFEEUYQTIGCAYQRRhBMgYIBxBFGEHSAQg0ODU2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x8e3f9b342cd85257:0xdb235b90a9e19cfa,1,,,,';

export const urlReviewTrustpilot = 'https://www.trustpilot.com/review/wondertravel.co';
