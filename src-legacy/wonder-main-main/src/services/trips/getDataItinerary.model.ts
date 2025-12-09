import { itemsGeneralInformation } from '@components/generalInformation/GeneralInformation';
import { TDateRangeListItinerary } from '../../app/[lng]/(booking)/booking/[tripId]/Booking.model';
import { generalInfoI } from '@utils/formaters/formaters.model';

interface ProductType {
  id: number;
  name: string;
  label: string;
}

interface Event {
  name: string;
  label: string;
  is_green: boolean;
  is_feature: boolean;
  start_time: string;
  end_time: string;
  description: string;
}

interface ItineraryDay {
  day: number;
  events: Event[];
}
export interface WonderLeader {
  facebook_url: string;
  twitter_url: string;
  instagram_url: string;
  calendly_url: string;
  name: string;
  image_url: string;
  description: string;
}
interface TravelStyle {
  id: number;
  name: string;
  label: string;
  description: string;
  image_url: null | string;
}
interface ServiceLevel {
  id: number;
  name: string;
  label: string;
}

export interface ProductFligths {
  domestic_flights_included: string;
  domestic_flights_not_included: string;
  international_flights_included: string;
  international_flights_not_included: string;
}
export interface Product {
  id: number;
  product_type: ProductType;
  code: string;
  is_wonder_leader: boolean;
  wonder_leader: WonderLeader;
  label: string;
  name: string;
  location: string;
  physical_performance: number;
  acommodation_quality: number;
  tags: Tag[];
  image_url: string | null;
  general_info: generalInfoI[];
  description: string;
  subtitle: string;
  map_image: string;
  ebook_url: string;
  trip_highlights: string[];
  destinations: string[];
  accomodation: string[];
  travel_style: TravelStyle;
  service_level: ServiceLevel;
  physical_performance_popup: string;
  product_fligths: ProductFligths;
  countries: {
    name: string;
    label: string;
    iso_code: string;
    image_url: string;
  }[];
}

export interface ResDataItinerary {
  product: Product;
  trip_id: string;
  trip_name: string;
  days: number;
  nights: number;
  is_wonder: boolean;
  wetravel_uuid: string | null;
  itinerary: ItineraryDay[];
  has_booking: boolean;
  price: `${number}`;
  discount?: number;
  price_discount: `${number}`;
  book_now_pay_later: boolean;
  trip_dates: TDateRangeListItinerary;
  show_dates: boolean;
  new_package: number | null;
}
export interface Tag {
  id?: number;
  name: string;
  label: string;
  active?: boolean;
  image_url?: string;
}

export interface IbackofficeDataItinerary {
  title: string;
  subtitle: string;
  location: string;

  product: Product;
  itineraryData: ItineraryDay[];
  wonderLeader: WonderLeader;
  code: string;
  tripName: string;
  uuidWeTravel: string;
  days: number;
  pricing: string;
  tags: Tag[];
  tripId: string;
  hasBooking: boolean;
  generalInformation: itemsGeneralInformation[];
  price: `${number}`;
  discount?: number;
  price_discount: `${number}`;
  bookNowPayLater: boolean;
  tripDates: TDateRangeListItinerary;
  showDates: boolean;
  newItinerary?: number | null;
}
