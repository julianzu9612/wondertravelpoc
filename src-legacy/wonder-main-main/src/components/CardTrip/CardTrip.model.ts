import {LIST_STYLES} from './_components/CardTripCategories/CardTripIsCategories';


export interface TripDate {
  id: number;
  date_type: string;
  start_date: string;
  end_date: string;
  total_places: number;
}
export interface Icountri {
  label: string;
  name: string;
}
export interface ICardTrip {
  title: string;
  image: string;
  days?: number;
  nights?: number;
  discount: number;
  price_discount: string;
  price: string | number;
  link: string;
  currency?: string;
  dates?: TripDate[];
  mobileBehavior?: string;
  className?: string;
  isShared?: boolean;
  isCalendar?: boolean;
  type?: string;
  isCategories?: boolean;
  t: (a: string, b: string) => string;
  lng?: string;
  countries: Icountri[];
  travelStyle: keyof typeof LIST_STYLES;
}
