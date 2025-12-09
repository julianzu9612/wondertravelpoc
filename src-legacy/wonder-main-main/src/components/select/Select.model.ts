import { ChangeEvent } from 'react';

export interface optionI {
  value: string | number;
  label: string;
}

export interface SelectI {
  options: optionI[];
  name: string;
  value?: number | string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  transparent?: boolean;
}
