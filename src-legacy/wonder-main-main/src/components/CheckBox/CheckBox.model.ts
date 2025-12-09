import { ChangeEvent } from 'react';

export interface ICheckBox {
  label: string;
  checked: boolean;
  value?: string | number | readonly string[];
  action: (e: ChangeEvent<HTMLInputElement>) => void;
}
