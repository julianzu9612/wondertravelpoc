import { ChangeEventHandler } from 'react';

export interface IInput {
  name: string;
  label: string;
  value?: string | null;
  onChange: ChangeEventHandler<HTMLInputElement>;
  min?: string | number | null;
  max?: string | number | null;
}
