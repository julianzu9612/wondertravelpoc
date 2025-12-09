import { TDateRangeListItinerary } from '../app/[lng]/(booking)/booking/[tripId]/Booking.model';

/**
 * funtion to filter dates that have already passed
 * @param items
 * @returns items
 */
export function filterOldDatesByEndDate(items: TDateRangeListItinerary) {
  if (typeof items === 'undefined' || items.length === 0) return [];
  const currentDate = new Date();
  const fiveDaysLater = new Date(currentDate);
  fiveDaysLater.setDate(currentDate.getDate() + 5);

  return items.filter((item) => {
    const endDate = new Date(item.start_date);

    return endDate > fiveDaysLater;
  });
}
