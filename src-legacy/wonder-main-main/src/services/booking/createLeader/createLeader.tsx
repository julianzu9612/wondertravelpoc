'use client';
import { API_ENDPOINTS } from '@services/endpoints';
import { connect } from '@services/connect';
import { IDataLeader } from './createLeader.model';
import { IContactInfo } from '../../../app/[lng]/(booking)/booking.model';

const { TRAVELER } = API_ENDPOINTS;

export default async function postCreateLeader(data: IContactInfo): Promise<Omit<IDataLeader, 'prefix_number'> | 
null> {
  const URL = `${TRAVELER}leaders/create/`;

  try {
    const response: {data: IDataLeader} = await connect.post(URL, data,{
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    
    return null;
  }
}
