'use server';

import { IScrollInfinity } from '../_components/ScrollInfiniteTrips/ScrollInfiniteTrips.model';
type trips = IScrollInfinity['trips'];
export const IsDifferentTrips = ({
  newTrips,
  tripsCurrent,
}: {
  tripsCurrent: trips;
  newTrips: trips;
}) => {
  const compareObject = (obj1: trips[0], obj2: trips[0]) =>
    JSON.stringify(obj1) !== JSON.stringify(obj2);
  const isDistinctList = tripsCurrent.every((element, i) =>
    compareObject(element, newTrips[i])
  );
  return isDistinctList;
};
