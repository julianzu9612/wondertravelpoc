import { Tag } from '@services/trips/getDataItinerary.model';
import { T } from '../../types/common';

export interface RecomendationsI {
  lng: string;
  t: T;
  query?: string;
  tags?: Tag[];
}
