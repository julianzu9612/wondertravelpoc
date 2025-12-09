import { connect } from '@services/connect';
import { API_ENDPOINTS } from '@services/endpoints';

export interface ResGetCountrie {
  name: string;
  label: string;
  iso_code: string;
  image_url: string
}
export const getTripCountries = async () => {
  const url = API_ENDPOINTS.TRIPS + '/countries';
  try {
    const { data } = await connect.get<ResGetCountrie[]>(url);
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
