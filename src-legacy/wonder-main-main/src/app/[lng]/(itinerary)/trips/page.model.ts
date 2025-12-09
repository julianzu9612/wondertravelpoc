import { ISearchTripsParams } from '@components/SearchTrip/SearchTrip.model';

export interface IVertical {
  params: {
    lng: string,
    vertical: string
  },
  searchParams: ISearchTripsParams
}