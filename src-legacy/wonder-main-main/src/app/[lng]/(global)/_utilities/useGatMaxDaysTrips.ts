import { IProductTrip } from '@components/GridTrips/GridTrips.model';

//get max days of trips
export const useGetMaxDays = (results: IProductTrip[]) =>
  results.reduce((max, trip) => {
    if (trip.days > max) {
      return trip.days;
    } else {
      return max;
    }
  }, 0);
