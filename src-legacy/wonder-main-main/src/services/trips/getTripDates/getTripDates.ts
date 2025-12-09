// 'use server';
import { API_ENDPOINTS } from '@services/endpoints';
import { TDateRangeList } from '../../../app/[lng]/(booking)/booking/[tripId]/Booking.model';
import { connect } from '@services/connect';

const SUPPLIER = API_ENDPOINTS.SUPPLIER;

export default async function getTripDates(
  tripId: number,
  lng: string,
  currency: string
): Promise<TDateRangeList | undefined> {
  try {
    const { data } = await connect.get(`${SUPPLIER}/${tripId}/list-dates/`, {
      headers: {
        lang: lng.toUpperCase(),
        currency,
      },
    });

    return { dates: data?.dates, blockedDates: data?.blocked_dates };
  } catch (error) {
    console.error('Error al obtener los fechas del trip:', error);
    throw error;
  }
}
