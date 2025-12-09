'use server';

import { ISearchTripsParamsRequest } from '@components/SearchTrip/SearchTrip.model';

export const clearQueryParams = async (
  queryParams: ISearchTripsParamsRequest
) => {
  const newParams: Record<string, string> = {};
  Object.keys(queryParams).forEach((key) => {
    const keyParams = key as keyof ISearchTripsParamsRequest;
    const valueKey = queryParams[keyParams] as string;
    if (!!valueKey) {
      newParams[keyParams] = valueKey;
    }
  });
  const qParamsString = new URLSearchParams(newParams);

  return qParamsString;
};
