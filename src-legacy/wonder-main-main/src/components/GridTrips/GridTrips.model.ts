import { ResGetCountrie } from '@services/trips/countries/getCountries';
import { T } from '../../types/common';
import {LIST_STYLES} from '../CardTrip/_components/CardTripCategories/CardTripIsCategories';

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
    }
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

export interface IGridTripsResponse {
  count: number;
  next: string;
  previous: string;
  results: IProductTrip[];
}

export interface IGridTrips {
  tripsData: IProductTrip[] | undefined;
  pagination?: {
    count: number;
    offset: number;
    limit: number;
  };
  mobileBehavior?: string;
  t: T;
  isCategories?: boolean;
  lng: string;
}
