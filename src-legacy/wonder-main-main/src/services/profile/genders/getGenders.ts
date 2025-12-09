import { API_ENDPOINTS } from '@services/endpoints';
import { IGetGenders } from './getGenders.model';
import { connect } from '@services/connect';

const GENDER_CHOICES = API_ENDPOINTS.GENDER_CHOICES;

export const getGenders = async () => {
  const url = GENDER_CHOICES;
  const { data } = await connect.get<IGetGenders[]>(url);
  return data;
};
