import { IGetTraveler } from '../getTraveler/getTraveler.model';
import { API_ENDPOINTS } from '@services/endpoints';
import { connect } from '@services/connect';

const TRAVELER = API_ENDPOINTS.TRAVELER;

export const updateTraveler = async (body: IGetTraveler) => {
  const url = `${TRAVELER}`;

  const data: IGetTraveler = await connect.patch(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};
