'use client';
import { API_ENDPOINTS } from '@services/endpoints';
import { connect } from '@services/connect';
import { IResPreBookign } from '../../../app/[lng]/(booking)/booking.model';

const { BOOKING } = API_ENDPOINTS;


export default async function changeStateBooking(bookingId: number): Promise<IResPreBookign['prebooking'] | null> {
  const URL = `${BOOKING}v2/${bookingId}/`;

  const data = {status: 'AVALIABILITY_DEPENDS'};
  try {
    const res: IResPreBookign['prebooking'] = await connect.patch(URL, data, {
      headers: { 
        'Content-Type': 'application/json',
      },
    });
    return res;
  } catch (error) {
    console.error('Error al obtener los datos del blog:', error);
    return null;
  }
}
