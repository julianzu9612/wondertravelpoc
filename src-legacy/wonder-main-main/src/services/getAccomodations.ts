import { connect } from './connect';
import { API_ENDPOINTS } from './endpoints';
import type { IAccommodation } from './serviceModel.model';

export interface IGetAccomodationParam {
  tripId: number;
  quantityPeople: number;
  lng: string;
  dateType: string;
  currency: string;
}

const ACCOMODATION = API_ENDPOINTS.SUPPLIER;

export default async function getAccomodations({
  tripId,
  lng,
  currency
}: IGetAccomodationParam): Promise<IAccommodation[] | Error> {
  const URL = `${ACCOMODATION}/${tripId}/list-accommodation/`;
  try {
    const { data } = await connect.get(URL, {
      headers: { lang: lng.toUpperCase(), currency: currency.toUpperCase() },
    });

    return data?.accommodations;
  } catch (error) {
    console.error('Error al obtener los datos de las accomodaciones:', error);
    return new Error('failed get accomodations');
  }
}
