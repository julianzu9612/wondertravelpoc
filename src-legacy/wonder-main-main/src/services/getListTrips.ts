'use server';
import { ISearchTripsParamsRequest } from '@components/SearchTrip/SearchTrip.model';
import { API_ENDPOINTS } from './endpoints';
import { connect } from './connect';
import { clearQueryParams } from '../app/[lng]/(global)/search/__actions/ClearQueryParams';
import { getCurrencyCookie } from '../app/actions';
import { IListTripsCardsResponse } from '../app/[lng]/(global)/search/_components/TripsSearch/TripsSearch.model';

const ENDPOINT_LIST_TRIPS = API_ENDPOINTS.LIST_TRIPS;

export async function getListTrips({
  queryParams,
  lang,
}: {
  queryParams: ISearchTripsParamsRequest;
  lang: string;
}): Promise<IListTripsCardsResponse> {
  const currency = await getCurrencyCookie();
  const qParamsString = await clearQueryParams(queryParams);

  const { data } = await connect.get(
    `${ENDPOINT_LIST_TRIPS}?${qParamsString}`,
    {
      headers: {
        lang: lang.toUpperCase(),
        currency,
        'X-Enable-Cache': true,
      },
    }
  );
  return data;
}
