import { ISearchTripsParamsRequest } from '@components/SearchTrip/SearchTrip.model';
import {
  ITripsSearch,
  ICardsTripsListResponse,
} from '../TripsSearch/TripsSearch.model';
import { ISearchParams } from '../../page.model';
export interface IScrollInfinity {
  pagination: ITripsSearch['pagination'];
  queryParams: ISearchTripsParamsRequest;
  trips: ICardsTripsListResponse[];
  lng: string;
}

export interface IScrollInfinityServer {
  lng: IScrollInfinity['lng'];
  queryParams: Partial<ISearchParams>;
  pagination: IScrollInfinity['pagination'];
}
