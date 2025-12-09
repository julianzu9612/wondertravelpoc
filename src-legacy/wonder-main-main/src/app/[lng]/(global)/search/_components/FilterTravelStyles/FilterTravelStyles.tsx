'use client';
import { IFilterTravelStyles } from './FilterTravelStyles.model';
import ListCheckbox from '@components/ListCheckbox/ListCheckbox';
import useUpdateQueryParamList from '../../_hooks/useUpdateQueryParamList';

const FilterTravelStyles = ({ travelStyles }: IFilterTravelStyles) => {
  const queryName = 'travelStyles';
  const { eventQueryParam, getQueryParam } = useUpdateQueryParamList(queryName);
  const travelStylesCheck = travelStyles.map(({ ...info }) => ({
    ...info,
    checked: getQueryParam?.includes(info.value),
  }));

  return (
    <ListCheckbox
      listCheck={travelStylesCheck}
      name={queryName}
      onChange={eventQueryParam}
    />
  );
};

export default FilterTravelStyles;
