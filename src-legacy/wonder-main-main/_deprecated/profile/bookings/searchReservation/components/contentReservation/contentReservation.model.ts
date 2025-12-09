import { State } from '../../../types.model';

export interface IContentReservation {
  queryState: State;
  lng: string;
}

export interface TripsState {
  dates: string[];
  title: string;
  image: string;
  date: string;
  travellers: string[];
  linkCompleteData: string;
  linkItinerary: string;
  typeTravel: string;
}
