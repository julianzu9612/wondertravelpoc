export const API_ENDPOINTS = {
  WOUNDER_ROOT:
    process.env.NEXT_PUBLIC_API_WOUNDER_ROOT || process.env.API_WOUNDER_ROOT,
  ITINERAY: 'trips/itinerary',
  CMS: '/cms',
  TRIPS: '/trips',
  SUPPLIER: '/supplier/packages',
  LIST_TRIPS: '/trips/card-list',
  CALENDAR: '/dates',
  PHONE_CODE: '/phone-countries/',
  COUNTRIES: '/countries/',
  DOCUMENT_TYPES: '/document-types/',
  GENDER_CHOICES: '/gender-choices/',
  CITIES: '/cities/',
  TRAVELER: '/traveler/',
  BOOKINGS: '/bookings/',
  BOOKING: '/booking/',
  ACCOMODATION: '/trips/accommodations',
  TRAVELERS: '/booking/travelers/',
  BLOG: '/cms/pages',
  AUTH: '/auth/',
  BLOG_POSTS: '/posts',
  PRODUCT: '/product/product-name'
};
