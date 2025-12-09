import { ReactElement } from 'react';

export interface SummaryPropsI {
  title: string;
  children: ReactElement;
  className?: string;
  defaultOpen?: boolean;
  open?: boolean;
}
