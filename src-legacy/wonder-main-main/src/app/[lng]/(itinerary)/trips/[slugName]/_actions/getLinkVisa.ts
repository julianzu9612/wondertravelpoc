import { Product } from '@services/trips/getDataItinerary.model';
import { countriesInformation } from '../../../../../../../statics/countries';

export const getLinkVisa = async (countries: Product['countries']) => {
  const allInformationCountry = countriesInformation['en'];
  const visa: Record<string, string> = {};
  if (!countries || countries.length === 0) {
    return visa;
  }
  const country = countries[0];
  visa.visa =
    allInformationCountry[country.name]?.entryRequirements.linkMoreInformation ||
    '';
  return visa;
};
