'use client';
import { API_ENDPOINTS } from '@services/endpoints';
import { connect } from '@services/connect';
import { IPostPaymentProps, IResPostPayment } from './postPayment.model';

const { BOOKING } = API_ENDPOINTS;

export default async function postPayment(data: IPostPaymentProps, bookingId: number): Promise<IResPostPayment | null> {
  const URL = `${BOOKING}v2/${bookingId}/booking-payment/`;

  try {
    const response = await connect.post(URL, data,{
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
