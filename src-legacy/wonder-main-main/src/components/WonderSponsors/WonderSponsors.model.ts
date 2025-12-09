import { T } from '../../types/common';

export interface IWonderSponsor {
  name: string;
  image: string;
  width: number;
  height: number;
}

export interface IWonderSponsors {
  wonderSponsors: IWonderSponsor[];
  t: T;
}
