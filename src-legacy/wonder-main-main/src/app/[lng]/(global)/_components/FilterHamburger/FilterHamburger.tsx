import { ReactNode } from 'react';
import FilterHamburgerClient from './FilterHamburgerClient';
import { IFilterSearch } from '../FiltersSearch/FilterSearch.model';

const FilterHamburger = ({
  children,
  queryParams,
}: {
  children: ReactNode;
  queryParams: IFilterSearch['queryParams'];
}) => {
  return (
    <FilterHamburgerClient queryParams={queryParams}>
      {children}
    </FilterHamburgerClient>
  );
};

export default FilterHamburger;
