import { typeIconStep } from './Step.utils';

export interface StepI {
  type?: typeIconStep;
  text?: string | null;
  title?: string | null;
  subtitle?: string | null;
  urlIcon?: string | null;
  highlightColor?: string | null;
}

export interface StepStyleI {
  type: string;
  subtitle?: string;
  highlightColor?: string;
}
