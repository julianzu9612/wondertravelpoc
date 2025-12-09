'use client';
import { API_ENDPOINTS } from '@services/endpoints';
import { ResDataBooking } from './getBooking.model';
import { connect } from '@services/connect';

const { BOOKINGS } = API_ENDPOINTS;

type IGetBooking = ResDataBooking[] | undefined;

export default async function getBooking(lng: string): Promise<IGetBooking> {
  const URL = `${BOOKINGS}`;
  //const token = JSON.parse(state as string).userSession.access_token;
  try {
    const { data } = await connect.get<ResDataBooking[]>(URL, {
      headers: {
        lang: lng.toUpperCase(),
        'Content-Type': 'application/json',
      },
    });
    return data;
  } catch (error) {
    console.error('Error al obtener los datos del blog:', error);
  }
}
