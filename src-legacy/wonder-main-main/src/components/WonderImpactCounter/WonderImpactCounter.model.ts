import { T } from '../../types/common';

export interface IWonderImpactItems {
  label: string;
  value: string;
}

export interface IWonderImpactCounter {
  wonderImpactItems: IWonderImpactItems[];
  t: T;
}
