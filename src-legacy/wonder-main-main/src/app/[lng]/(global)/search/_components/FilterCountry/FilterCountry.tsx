'use client';
import { IFilterCountry } from './FilterCountry.model';
import ListCheckbox from '@components/ListCheckbox/ListCheckbox';
import useUpdateQueryParamList from '../../_hooks/useUpdateQueryParamList';

const FilterCountry = ({ countries }: IFilterCountry) => {
  const nameQueryParam = 'countries';
  const { eventQueryParam, getQueryParam } =
    useUpdateQueryParamList(nameQueryParam);

  const countriesCheck = countries.map(({ ...info }) => ({
    ...info,
    checked: getQueryParam?.includes(info.value),
  }));
  return (
    <ListCheckbox
      listCheck={countriesCheck}
      name={nameQueryParam}
      onChange={eventQueryParam}
    />
  );
};

export default FilterCountry;
