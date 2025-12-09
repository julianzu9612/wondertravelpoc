import { ChangeEvent } from 'react';

export type T = (value: string) => string;
export enum BloodType {
  APositive = 'A+',
  ANegative = 'A-',
  BPositive = 'B+',
  BNegative = 'B-',
  ABPositive = 'AB+',
  ABNegative = 'AB-',
  OPositive = 'O+',
  ONegative = 'O-',
}
export type InputEvent = ChangeEvent<HTMLInputElement>;
