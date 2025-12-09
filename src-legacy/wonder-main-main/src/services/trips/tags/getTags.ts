'use server';
import { connect } from '@services/connect';
import { API_ENDPOINTS } from '@services/endpoints';

export interface IServiceTag {
  name: string;
  label: string;
  image_url: string;
}
export const GetTags = async (lang: string) => {
  const url = `${API_ENDPOINTS.TRIPS}/tags`;
  try {
    const { data } = await connect.get<IServiceTag[]>(url, {
      headers: {
        lang: lang.toUpperCase(),
      },
    });
    return data;
  } catch (e) {
    return [];
  }
};
