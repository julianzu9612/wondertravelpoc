'use client';
import Summary from '@components/summary/Summary';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
//import style
import styles from './customSelect.module.scss';
//import model of component
import { ICustomSelect } from './customSelect.model';
//import utilities
import { useFormContext, useWatch } from 'react-hook-form';
const CustomSelect = ({ options, title, name }: ICustomSelect) => {
  const {
    register,
    formState: { errors },
    setValue,
    control,
  } = useFormContext();
  const value = useWatch({ control, name });
  const error = errors[name]?.message;
  const [open, setOpen] = useState(false);
  const callBackOpen = useCallback((value: boolean) => {
    setOpen(value);
  }, []);

  const valueSelect = useMemo(() => {
    const values = options.find((option) => option.value === value)?.label;
    return values;
  }, [options, value]);
  useEffect(() => {
    if (options.length > 0 && !valueSelect) {
      setValue(name, null);
    }
  }, [value, valueSelect, options]);
  useEffect(() => {
    callBackOpen(false);
  }, [open, callBackOpen]);

  return (
    <div className={styles['content-form__type-doc']}>
      <Summary
        title={valueSelect?.toString() || title}
        className={`${styles['type-doc__summary-select']} ${
          valueSelect && styles['type-doc__summary-select--value']
        }`}
        defaultOpen={false}
        open={open}
      >
        <>
          {options.length > 0 && (
            <div className={`${styles['summary-select__form-doc']}`}>
              {options.map(({ label, value: TypeValue }, i) => {
                return (
                  <label htmlFor={label} key={i}>
                    <span>
                      <input
                        checked={TypeValue === value}
                        value={TypeValue ?? ''}
                        id={label}
                        className='input_radio'
                        type='radio'
                        onClick={() => {
                          callBackOpen(true);
                        }}
                        {...register(name)}
                      />
                    </span>
                    {label}
                  </label>
                );
              })}
            </div>
          )}
        </>
      </Summary>
      {error && <b className={styles['type-doc__error']}>{error.toString()}</b>}
    </div>
  );
};

export default CustomSelect;
