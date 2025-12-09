import { ReactNode } from 'react';

export interface IDropDown {
  value: string;
  title: ReactNode;
  options: { value: string; label: string }[];
  event: (value: string) => void;
}
