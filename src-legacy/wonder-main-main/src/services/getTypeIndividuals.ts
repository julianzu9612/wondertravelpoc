import { TIndividualsTypesResponse } from '../app/[lng]/(booking)/booking/[tripId]/Booking.model';
import { connect } from './connect';
import { API_ENDPOINTS } from './endpoints';

const ENDPOINT_SUPPLIER = API_ENDPOINTS.SUPPLIER;

export default async function getTypeIndividuals(
  tripId: number,
  lng: string
): Promise<TIndividualsTypesResponse> {
  try {
    const { data } = await connect(
      `${ENDPOINT_SUPPLIER}/${tripId}/list-individuals/`,
      {
        headers: { lang: lng.toUpperCase() },
      }
    );

    return data;
  } catch (error) {
    console.error('Error al obtener los datos del blog:', error);
    throw error;
  }
}
