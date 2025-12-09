import { IScrollInfinityServer } from './ScrollInfiniteTrips.model';
import { UseAddaptedCountries } from '../../../_utilities/useAddaptedCountriesTrips';
import { UseSortTrip } from '../../../_utilities/useSort';
import { cookies } from 'next/headers';
import { getListTrips } from '@services/getListTrips';
import ScrollInfiniteClient from './ScrollInfiniteTripsClient';

const ScrollInfiniteTrips = async ({
  lng,
  queryParams,
  pagination,
}: IScrollInfinityServer) => {

  const {
    query,
    countries,
    limit,
    priceMin,
    priceMax,
    label,
    price,
    productType,
    duration,
    acommodationQuality,
    durationMax,
    durationMin,
    tags,
    travelStyles,
    dateEnd,
    dateStart,
    priceSort,
    hasDiscount,
    physicalPerformance,
  } = queryParams;

  const sort = UseSortTrip({ label, price });
  const currency = cookies().get('currency')?.value || '';
  const { countriesAddapted } = await UseAddaptedCountries({
    lng,
    queryCountry: countries,
  });

  const queryParamsService: Record<
    string,
    string | number | boolean | string[] | undefined
  > = {
    product_search: query,
    offset: '0',
    limit: limit ? limit.toString() : pagination?.limit,
    price_min: priceMin,
    price_max: priceMax,
    sort: sort,
    product_type: productType,
    product_acommodation_quality: acommodationQuality,
    duration,
    product_physical_performance: physicalPerformance,
    countries: countriesAddapted,
    tags,
    product_discount_search: hasDiscount,
    duration_min: durationMin ? +durationMin : durationMin,
    duration_max: durationMax ? durationMax : durationMax,
    travel_style: travelStyles,
    price_sort: priceSort,
    lang: lng,
    currency,
    start_date_after: dateStart,
    end_date_before: dateEnd,
  };

  const { results, count } = await getListTrips({
    queryParams: queryParamsService,
    lang: lng,
  });

  if (pagination) {
    pagination.count = count;
  }
  
  return (
    <ScrollInfiniteClient
      pagination={pagination}
      queryParams={queryParamsService}
      trips={results}
      lng={lng}
    />
  );
};

export default ScrollInfiniteTrips;
