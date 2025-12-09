import React from 'react';
import { IInput } from './input.model';
import styles from './input.module.scss';
import { useFormContext } from 'react-hook-form';
const Input = (props: IInput) => {
  const { name, placeholder, required, disabled, ...data } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message;
  return (
    <div className={styles.contentInput}>
      <input
        className={`${styles.contentInput__input} ${
          error && styles['contentInput__input--error']
        }`}
        {...data}
        placeholder={`${required ? placeholder + '*' : placeholder ?? ''}`}
        {...register(name)}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
