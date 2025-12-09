
import React from 'react';
import styles from './Step.module.scss';

export enum statusTypes {
  COMPLETE = 'complete',
  INCOMPLETE = 'incomplete',
  ACTUAL = 'actual',
}
export const Step = ({ number, status, className} : {number: number; status: string; className?: string; }) => {
  return (
    <div
      className={`
      ${className}
      ${styles['step']} 
        ${styles[`step--${status}`]}
      `}
    >
      {number}
    </div>
  );
};
