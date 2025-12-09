import { ISearchTripsParams } from '@components/SearchTrip/SearchTrip.model';

export interface ICategory {
  params: {
    lng: string;
    travelStyle: string;
  };
  searchParams: ISearchTripsParams;
}
