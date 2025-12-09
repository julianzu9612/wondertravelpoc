import { CSSProperties, ReactNode } from 'react';

export interface itemsCollapse {
  title: ReactNode;
  content: ReactNode;
  open?: boolean;
}
export interface ICollapse {
  open?: boolean;
  items: itemsCollapse[];
  acordion?: boolean;
  withoutBorder?: boolean;
  style?: CSSProperties;
  lng: string;
}
