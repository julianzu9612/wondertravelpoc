import { InputHTMLAttributes } from 'react';
import { Inputs } from '../DataPersonal/DataPersonal.model';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: keyof Inputs;
  variant?: 'dark';
}
