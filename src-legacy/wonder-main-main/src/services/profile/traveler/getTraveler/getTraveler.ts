import { IGetTraveler } from './getTraveler.model';
import { API_ENDPOINTS } from '@services/endpoints';
import { connect } from '@services/connect';

const TRAVELER = API_ENDPOINTS.TRAVELER;

export const getTraveler = async () => {
  const url = TRAVELER;
  const { data } = await connect.get<IGetTraveler>(url);
  return data;
};
