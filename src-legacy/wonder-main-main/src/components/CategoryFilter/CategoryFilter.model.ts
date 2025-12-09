import { T } from '../../types/common';

export interface IWonderLineCategory {
  label: string;
  name?: string;
  image: string;
  url: string;
}

export interface ICategoryFilter {
  wonderLineCategories?: IWonderLineCategory[];
  t?: T;
}
