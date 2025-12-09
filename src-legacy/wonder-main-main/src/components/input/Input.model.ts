import { ChangeEvent } from 'react';

export interface InputI {
  placeholder?: string;
  type: 'text' | 'email' | 'number' | 'checkbox';
  value?: string | number | boolean;
  error?: boolean;
  name?: string;
  id?: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement> ) => void;
}
