'use client';
import useQueryParams from '@hooks/useQueryParams';
import { IInput } from './InputDate.model';
import styles from './InputDate.module.scss';

const InputDate = ({ label, name, onChange, value, min }: IInput) => {
  const { setQueryParams } = useQueryParams();
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <input
        value={value || ''}
        name={name}
        id={name}
        type='date'
        placeholder={'dd/mm/yyyy'}
        min={min || ''}
        onChange={onChange}
        onKeyDown={({ key }) => {
          if (key === 'Enter') {
            setQueryParams({ query: name }, 'replace');
          }
        }}
      />
    </div>
  );
};

export default InputDate;
