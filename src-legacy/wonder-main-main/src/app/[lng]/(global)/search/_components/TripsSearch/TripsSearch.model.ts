import { LIST_STYLES } from '@components/CardTrip/_components/CardTripCategories/CardTripIsCategories';
import { ResGetCountrie } from '@services/trips/countries/getCountries';
import { Icountri } from '@components/CardTrip/CardTrip.model';

export interface ICardsTripsListResponse {
  title: string;
  trip_name: string;
  price: string;
  discount: number;
  price_discount: string;
  days: number;
  currency_type: string;
  product_name: string;
  countries: Icountri[];
  image_url: string;
  destinations: string[];
  travel_style: keyof typeof LIST_STYLES;
}

export interface IProductTrip {
  product: {
    id: 1;
    product_type: {
      id: number;
      name: string;
      label: string;
    };
    code: string;
    base_price: string;
    label: string;
    name: string;
    image_url: string;
    tags: {
      name: string;
      label: string;
      image_url: string;
    }[];
    destinations: string[];
    countries: ResGetCountrie[];
    travel_style: {
      label: keyof typeof LIST_STYLES;
    };
  };
  trip_id: number;
  trip_name: string;
  days: number;
  nights: number;
  price: string;
  price_discount: string;
  discount: number;
  currency_type: string;
  wetravel_uuid?: string;
}

export interface ITripsResponse {
  count: number;
  next: string;
  previous: string;
  results: IProductTrip[];
}
export interface IListTripsCardsResponse {
  count: number;
  next: string;
  previous: string;
  results: ICardsTripsListResponse[];
}

export interface ITripsSearch {
  tripsData: Set<ICardsTripsListResponse>;
  pagination?: {
    count?: number;
    offset: number;
    limit: number;
  };
  mobileBehavior?: string;
  t: (key: string, def: string) => string;
  lng: string;
}
