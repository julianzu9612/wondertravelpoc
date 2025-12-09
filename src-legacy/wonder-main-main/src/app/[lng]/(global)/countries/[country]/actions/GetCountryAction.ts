'use server';

import { ResGetCountry } from '../../../../../../../statics/countries';

type lngCountry = Record<string, Record<string, ResGetCountry>>;

export const GetCountry = async (lng: string, country: string) => {
  const countriesInformation: lngCountry = (
    await import('../../../../../../../statics/countries')
  ).countriesInformation;

  const getCountry = countriesInformation[lng]?.[country];
  return getCountry;
};
