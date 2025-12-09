import { ItemContent } from '@components/DropdownCheck/DropdownCheck.model';
import { useTranslation } from '@i18n-server';
import { getTripCountries } from '@services/trips/countries/getCountries';
import { CWonderCategoryData } from '../../../../constants';

export const UseAddaptedCountries = async ({
  country,
  queryCountry,
  lng,
}: {
  country?: string;
  queryCountry?: string[] | string;
  lng: string;
}) => {
  const countriesService = await getTripCountries();
  const countriesTranslate: ItemContent[] = [];
  const { t: transCountries } = await useTranslation(lng, 'countries');

  //transform name countrie to iso_code
  const countriesFilter = new Set();

  let filterCountry;
  for (const thisCountry of countriesService.values()) {
    const { name, iso_code, image_url } = thisCountry;
    countriesTranslate.push({
      name,
      image_url: image_url,
      label: transCountries(thisCountry.name, {
        defaultValue: thisCountry.label,
      }),
    });
    if (country === name) {
      if (!image_url) {
        const findImageStatics = CWonderCategoryData.find(
          ({ label }) => label.toLowerCase() === name.toLowerCase()
        );
        if (findImageStatics) {
          thisCountry.image_url = findImageStatics.image;
        }
      }
      filterCountry = thisCountry;
    }
    //validate if name is in queryParam countries
    //and if iso_code is not in countriesFilter
    if (queryCountry?.includes(name) && !countriesFilter.has(iso_code)) {
      countriesFilter.add(iso_code);
    }
  }

  return {
    countriesService: countriesTranslate,
    countriesAddapted: Array.from(countriesFilter).join(','),
    countryInfo: filterCountry,
  };
};
