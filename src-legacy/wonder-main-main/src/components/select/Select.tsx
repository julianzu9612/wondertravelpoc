'use client';
import React from 'react';
// styles
import styles from './Select.module.scss';
// types
import { SelectI } from './Select.model';

const Select = ({
  options,
  className,
  onChange,
  name,
  value,
  placeholder,
  transparent,
}: SelectI) => (
  <div className={`${styles['custom-select']}  ${className}`}>
    <select
      className={`${styles.select} ${
        transparent && styles['select--transparent']
      }`}
      onChange={onChange}
      name={name}
      value={value}
      defaultValue={''}
      aria-label='select options'
    >
      <option className={styles.select__option} disabled value=''>
        {placeholder}
      </option>
      {options.map((option, i) => (
        <option className={styles.select__option} key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
