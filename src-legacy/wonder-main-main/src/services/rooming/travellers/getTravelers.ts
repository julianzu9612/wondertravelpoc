import { API_ENDPOINTS } from '@services/endpoints';
import { ResTraveler } from './getTravelers.model';
import { connect } from '@services/connect';

type IGetTravelers = ResTraveler[] | undefined;
const TRAVELERS = API_ENDPOINTS.TRAVELERS;
export default async function getTravelers(
  booking_id: string
): Promise<IGetTravelers> {
  const URL = `${TRAVELERS}${booking_id}`;

  const { data } = await connect.get<ResTraveler[]>(URL);
  return data;
}
