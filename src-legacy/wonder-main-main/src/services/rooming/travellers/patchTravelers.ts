import { connect } from '@services/connect';

const patchTravelers = async (
  data: unknown,
  section: string,
  userId: string | number,
  bookingId: number
): Promise<Response | boolean> => {
  const { data: service } = await connect.put(
    `/rooming/${bookingId}/${userId}/${section}/`,
    data
  );

  return service;
};

export default patchTravelers;
