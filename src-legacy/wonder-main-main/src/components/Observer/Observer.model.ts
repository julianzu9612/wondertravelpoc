import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IObserver
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  options?: IntersectionObserverInit;
  callback?: IntersectionObserverCallback;
  children: ReactNode;
}
