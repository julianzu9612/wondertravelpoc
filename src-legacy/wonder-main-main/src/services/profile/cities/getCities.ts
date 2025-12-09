import { API_ENDPOINTS } from '@services/endpoints';
import { IGetCities } from './getCities.model';
import { connect } from '@services/connect';

const CITIES = API_ENDPOINTS.CITIES;

export const getCities = async (code: string) => {
  const url = `${CITIES}${code}/`;
  const { data } = await connect.get<IGetCities>(url);
  return data;
};
