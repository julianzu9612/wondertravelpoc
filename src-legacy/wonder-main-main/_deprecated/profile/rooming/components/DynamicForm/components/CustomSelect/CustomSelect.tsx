import React from 'react';
import { CustomInputProps } from '../../types';
import { useFormContext, useWatch } from 'react-hook-form';
import styles from './CustomSelect.module.scss';

export const CustomSelect = ({
  name,
  label,
  options,
  className,
  disabled,
  placeholder,
  ...props
}: CustomInputProps) => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  const id = `${name}-${props.type}-${label}`;

  const value = useWatch({ control, name });
  return (
    <div className={`${className} ${styles['custom-select']}`}>
      <label htmlFor={id}>{label}</label>
      <select
        {...props}
        {...register(name)}
        id={id}
        value={value}
        className={errors[name]?.message && 'error'}
        disabled={disabled ?? false}
      >
        <option disabled value='' className={styles['first-child']}>
          {placeholder ?? '--- Select option ---'}
        </option>
        {options &&
          options.map(({ desc, value }) => (
            <option key={`${value}-${desc}`} value={value}>
              {desc}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CustomSelect;
