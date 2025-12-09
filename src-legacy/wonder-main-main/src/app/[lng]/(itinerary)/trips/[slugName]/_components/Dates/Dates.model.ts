import { TDateRangeListItinerary } from '../../../../../(booking)/booking/[tripId]/Booking.model';

export interface IDatesModel {
  uuidWeTravel?: string;
  datesItinerary: TDateRangeListItinerary;
  tripName: string;
  newItinerary?: number | null;
}
