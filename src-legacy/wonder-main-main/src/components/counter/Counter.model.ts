
export enum typeUser {
  ADULT = 'adult',
  KIDS = 'children',
  BABY = 'children'
}

export interface CounterI {
  className?: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
