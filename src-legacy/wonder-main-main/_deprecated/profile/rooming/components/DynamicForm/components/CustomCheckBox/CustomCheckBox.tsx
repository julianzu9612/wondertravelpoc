import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CustomInputProps } from '../../types';
import styles from './CustomCheckbox.module.scss';

export const CustomCheckbox = ({ name, label, className, ...props }: CustomInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  const id = `${name}-${props.type}-${label}`;

  return (
    <div className={`${className} ${styles['custom-checkbox']}`}>
      <input id={id} {...props} {...register(name)} className={error && 'error'} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};
