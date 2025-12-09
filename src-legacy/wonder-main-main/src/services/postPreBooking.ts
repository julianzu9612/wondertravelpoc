import { IPreBooking, IResPreBookign } from '../app/[lng]/(booking)/booking.model';
import { connect } from './connect';
import { API_ENDPOINTS } from './endpoints';

const BOOKING = API_ENDPOINTS.BOOKING;

export default async function postPreBooking(
  data: IPreBooking,
  tripId: number
): Promise<IResPreBookign | null> {
  try {
    const dataRes: { data: IResPreBookign } = await connect.post(
      `${BOOKING}v2/${tripId}/create-prebooking/`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return dataRes.data;
  } catch (error) {
    console.error(
      'error en formulario de viajeros: revisa que los campos no ser repitan o esten en el formato correcto'
    );
    return null;
  }
}
