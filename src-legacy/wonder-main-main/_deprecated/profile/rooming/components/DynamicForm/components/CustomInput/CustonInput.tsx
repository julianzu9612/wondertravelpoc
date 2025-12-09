import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CustomInputProps } from '../../types';
import styles from './CustomInput.module.scss';

export const CustomInput = ({ name, label, className, ...props }: CustomInputProps ) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const id = `${name}-${props.type}-${label}`;

  return (
    <div className={`${props.type} ${className} ${styles['custom-input']}`}>
      {label && (
        <label className='' htmlFor={id}>
          {label}
        </label>
      )}

      <input
        {...register(name)}
        {...props}
        id={id}
        className={errors[name]?.message && 'error'}
      />
    </div>
  );
};