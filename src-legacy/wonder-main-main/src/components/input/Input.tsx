import React, { ChangeEvent } from 'react';
// styles
import styles from './Input.module.scss';
// types
import { InputI } from './Input.model';


const Input = ({
  placeholder,
  type,
  name,
  id,
  className,
  error,
  onChange,
  value,
}: InputI ) => {

  const validateInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };
  

  if (type === 'checkbox') {
    return (
      <input
        className={`${styles['input']} ${
          className !== undefined ? className : ''
        } ${error ? styles['input__error'] : ''}`}
        type={type ?? 'text'}
        name={name}
        id={id ?? ''}
        placeholder={placeholder}
        onChange={validateInput}
        checked={value as boolean}
      />
    );
  } else {
    return (

      <input
        className={`${styles['input']} ${className ?? ''} ${error ? styles['input__error'] : ''}`}
        type={type ?? 'text'}
        name={name}
        id={id ?? ''}
        placeholder={placeholder}
        onChange={validateInput}
        value={value as string | number}
      />
    );
  }
};
;

export default Input;
