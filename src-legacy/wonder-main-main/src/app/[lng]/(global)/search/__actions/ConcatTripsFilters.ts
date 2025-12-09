import { ICardsTripsListResponse } from '../_components/TripsSearch/TripsSearch.model';

const concatTripsFilters = async ({
  currentTrips,
  newTrips,
}: {
  currentTrips: Set<ICardsTripsListResponse>;
  newTrips: ICardsTripsListResponse[];
}) => {
  const joinTrips = new Set([...currentTrips, ...newTrips]);
  const tripsUniques: Set<ICardsTripsListResponse> = new Set();
  const existProduct = (label: string) => {
    let productIsEqual = false;
    const tripsValues = tripsUniques.values();
    for (const trip of tripsValues) {
      if (trip.product_name === label) {
        productIsEqual = true;
        break;
      }
    }
    return productIsEqual;
  };
  const tripsValues = joinTrips.values();
  for (const trip of tripsValues) {
    const productExist = existProduct(trip.product_name);
    if (!productExist) {
      tripsUniques.add(trip);
    }
  }
  return joinTrips;
};

export default concatTripsFilters;
