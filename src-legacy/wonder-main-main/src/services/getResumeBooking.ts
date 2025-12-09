import { connect } from './connect';
import { API_ENDPOINTS } from './endpoints';
import { IDataSummary, IResumeBooking } from './serviceModel.model';

const BOOKING = API_ENDPOINTS.SUPPLIER;

export default async function getResumeBooking(
  data: IDataSummary,
  lng: string,
  currency: string,
): Promise<IResumeBooking | Error> {
  try {
    const { data: jsonData } = await connect.post(`${BOOKING}/total/`, data, {
      headers: {
        lang: lng.toUpperCase(),
        currency: currency.toUpperCase(),
        'Content-Type': 'application/json',
      },
    });

    return jsonData;
  } catch (error) {
    return new Error('errro in get Resume booking');
  }
}
