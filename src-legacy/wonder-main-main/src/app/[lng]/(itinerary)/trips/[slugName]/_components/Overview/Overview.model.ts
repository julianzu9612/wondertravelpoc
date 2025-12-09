import { ReactNode } from 'react';

export interface IOverview {
  description?: string;
  details: ReactNode;
  cardPrice: ReactNode;
}
