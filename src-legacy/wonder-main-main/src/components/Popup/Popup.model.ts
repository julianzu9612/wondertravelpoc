import { ReactNode } from 'react';

export interface IPopup {
  title: string | ReactNode;
  content: string;
  icon?: string;
}
