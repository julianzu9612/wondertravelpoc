import { API_ENDPOINTS } from '@services/endpoints';
import { IGetPhoneCode } from './getPhoneCode.model';
import { connect } from '@services/connect';

const PHONE_CODE = API_ENDPOINTS.PHONE_CODE;

export const getPhoneCode = async () => {
  const url = `${PHONE_CODE}`;
  const { data } = await connect.get<IGetPhoneCode[]>(url);
  return data;
};
