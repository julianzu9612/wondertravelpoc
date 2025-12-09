import { ISearchTripsParams } from '@components/SearchTrip/SearchTrip.model';

export interface ICategory {
  params: {
    lng: string;
    country: string;
  };
  searchParams: ISearchTripsParams;
}

export interface CommonProps {
  countryName: string;
  lng: string;
  countryLabel: string;
}
