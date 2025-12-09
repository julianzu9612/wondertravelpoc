export interface ITravelStyles {
  id: number;
  name: string;
  label: string;
  description: string;
  image_url: string;
}
import { connect } from '@services/connect';
import { API_ENDPOINTS } from '@services/endpoints';

const { TRIPS } = API_ENDPOINTS;

export const GetTravelStyles = async () => {
  try {
    const { data } = await connect.get<ITravelStyles[]>(`${TRIPS}/travel-style/`);
    return data;

  }catch (e) {
    return [] as ITravelStyles[];
    console.error(e);
  }

};
