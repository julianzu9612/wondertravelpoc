import React from 'react';
import { Step } from '../Step/Step';
import styles from './StepByStep.module.scss';
import { Step as IStepService, Step as useStep } from '../utiles/useGetSteps';

const StepByStep = ({
  steps,
  onClick,
  className,
  actualStep
}: {
  steps: IStepService[];
  className?: string;
  onClick: (e: IStepService) => void;
  actualStep?: useStep
}) => {

  
  return (
    <div className={`${className} ${styles['step-by-step']}`}>
      {steps?.map((step, i) => (
        <div
          onClick={() => onClick(step)}
          key={i}
          className={styles['step-by-step__step']}
        >
          <Step
            number={i + 1}
            status={step?.id === actualStep?.id ? 'actual' : step?.status}
            key={i}
            className={styles['step__number']}
          />

          <div
            className={`${styles['step__line']} ${
              i + 1 === steps.length && styles['last']
            }`}
          >
            <svg
              width='100%'
              height='100%'
              viewBox='0 0 100 100'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line
                x1='0'
                y1='50%'
                x2='100'
                y2='50%'
                stroke='black'
                strokeWidth={3}
              />
            </svg>
          </div>

          <p className={styles['step__title']}>{step?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StepByStep;
