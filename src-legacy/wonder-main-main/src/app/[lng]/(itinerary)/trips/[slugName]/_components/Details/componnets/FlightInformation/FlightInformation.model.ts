import { ProductFligths } from '@services/trips/getDataItinerary.model';
import { ReactNode } from 'react';

export interface IFlightInformation {
  flights: ProductFligths;
  detailVisa?: ReactNode;
}
