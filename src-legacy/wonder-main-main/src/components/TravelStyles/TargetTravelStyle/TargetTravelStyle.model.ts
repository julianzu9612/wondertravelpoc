import { ITravelStyles } from '@services/trips/travelStyles/getTravelStyles';
import { T } from '../../../types/common';

export interface TargetTravelStyleI extends ITravelStyles {
  t: T;
  lng: string;
  link?: string;
}
