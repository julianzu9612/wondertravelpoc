import { ISearchParams } from '../../search/page.model';

export type ParamsFilterMenu = Partial<ISearchParams>;
export interface IFilterSearch {
  queryParams: ParamsFilterMenu;
  lng: string;
}
