import { ChangeEventHandler } from 'react';

export interface IInputPrice {
  name: string;
  label: string;
  value: string | number | readonly string[];
  onChange: ChangeEventHandler<HTMLInputElement>;
}
