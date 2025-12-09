'use client';

import { useContextFilters } from '../__context/ContextFilters';
import { ISearchParams } from '../page.model';
const useUpdateQueryParamList = (name: keyof ISearchParams) => {
  const { queryParamsContext, setQueryParamsContext } = useContextFilters();
  const listParams = queryParamsContext[name]?.toString();
  const changeValueContext = <T,>(value: T) => {
    setQueryParamsContext((current) => ({ ...current, [name]: value }));
  };
  const eventQueryParam = (value: string, checked: boolean) => {
    const newValue = (() => {
      const copyTags: string[] = [value];
      if (listParams) {
        const splitParams = listParams.split(',');
        copyTags.push(...splitParams);
      }
      if (checked) {
        return copyTags;
      } else {
        const filterDistinctValue = copyTags.filter((tag) => tag !== value);
        return filterDistinctValue;
      }
    })();
    changeValueContext(newValue);
  };

  return {
    eventQueryParam,
    getQueryParam: listParams,
  };
};

export default useUpdateQueryParamList;
