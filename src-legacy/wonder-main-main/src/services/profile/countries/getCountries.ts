import { API_ENDPOINTS } from '@services/endpoints';
import { IGetCountries } from './getCountries.model';
import { connect } from '@services/connect';

const COUNTRIES = API_ENDPOINTS.COUNTRIES;

export const getCountries = async () => {
  const url = `${COUNTRIES}`;
  const { data } = await connect.get<IGetCountries[]>(url);
  return data;
};
