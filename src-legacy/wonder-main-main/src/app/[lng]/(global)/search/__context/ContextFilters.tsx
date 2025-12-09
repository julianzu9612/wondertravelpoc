'use client';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IFilterSearch } from '../../_components/FiltersSearch/FilterSearch.model';
import { ISearchParams } from '../page.model';
interface stateQueryParams {
  queryParamsContext: Partial<ISearchParams>;
  setQueryParamsContext: Dispatch<SetStateAction<Partial<ISearchParams>>>;
  changeQueryParamsContext: ({ name, value }: changeQueryParam) => void;
}
const ContextFilters = createContext<stateQueryParams>(Object.create(null));
interface changeQueryParam {
  name: Partial<keyof ISearchParams>;
  value: unknown;
}
export const ContextFiltersProviders = ({
  children,
  queryParams: queryValues,
}: {
  children: ReactNode;
  queryParams: IFilterSearch['queryParams'];
}) => {
  const [queryParams, setQueryParams] = useState(queryValues);
  const changeQueryParamsForParent = () => {
    setQueryParams(queryValues);
  };
  useEffect(changeQueryParamsForParent, [queryValues]);
  const changeQueryParams = ({ name, value }: changeQueryParam) => {
    setQueryParams((current) => ({ ...current, [name]: value }));
  };
  return (
    <ContextFilters.Provider
      value={{
        queryParamsContext: queryParams,
        setQueryParamsContext: setQueryParams,
        changeQueryParamsContext: changeQueryParams,
      }}
    >
      {children}
    </ContextFilters.Provider>
  );
};
export const useContextFilters = () => {
  const context = useContext(ContextFilters);
  return context;
};
