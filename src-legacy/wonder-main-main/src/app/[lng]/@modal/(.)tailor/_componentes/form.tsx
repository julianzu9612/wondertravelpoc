import React, { FormEvent } from 'react';
import styles from '../TailorMade.module.scss';

export interface BasicForm {
  inputLabel: string;
  name: string;
  type: string;
}


export const FormTailor = ({
  inputs,
  submitFormAction,
  cta,
}: {
  inputs: BasicForm[];
  submitFormAction: (e: FormEvent<HTMLFormElement>) => void;
  cta: string;
}) => {
  return (
    <form onSubmit={submitFormAction} className={styles['form']}>
      {inputs &&
        inputs.map((input, i) => (
          <input
            key={i}
            type={input.type}
            name={input.name}
            placeholder={input.inputLabel}
            required
          />
        ))}
      <button type='submit'>{cta}</button>
    </form>
  );
};
