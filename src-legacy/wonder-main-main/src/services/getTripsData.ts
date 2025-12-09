//import 'server-only';
'use server';
import { IGridTripsResponse } from '@components/GridTrips/GridTrips.model';
import { ISearchTripsParamsRequest } from '@components/SearchTrip/SearchTrip.model';
import { API_ENDPOINTS } from './endpoints';
import { connect } from './connect';
import { clearQueryParams } from '../app/[lng]/(global)/search/__actions/ClearQueryParams';
import { getCurrencyCookie } from '../app/actions';

const ENDPOINT_TRIPS = API_ENDPOINTS.TRIPS;

export async function getTripsData({
  queryParams,
  lang,
}: {
  queryParams: ISearchTripsParamsRequest;
  lang: string;
}): Promise<IGridTripsResponse| null> {
  const currency = await getCurrencyCookie();
  const qParamsString = await clearQueryParams(queryParams);

  try {
    
    const { data } = await connect.get(`${ENDPOINT_TRIPS}?${qParamsString}`, {
      headers: {
        lang: lang.toUpperCase(),
        currency,
        // 'X-Enable-Cache': true 
      },
    });

    return data;

  }catch (e) {
    console.error(e);
    return null;
  }
}
