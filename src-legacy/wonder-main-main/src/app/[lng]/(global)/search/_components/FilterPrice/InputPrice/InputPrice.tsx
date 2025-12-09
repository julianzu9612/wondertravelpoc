'use client';
import { IInputPrice } from './InputPrice.model';
import styles from './InputPrice.module.scss';
import { getCurrencyCookieClient } from '@utils/getCurrencyClient';

const InputPrice = ({ label, name, onChange, value }: IInputPrice) => {
  const money = getCurrencyCookieClient();
  return (
    <div className={styles.inputPrice}>
      <label className={styles.inputPrice__label}>
        {label}
        <div className={styles.inputPrice__inputContent}>
          <p>{money}</p>
          <input
            type='number'
            name={name}
            onChange={onChange}
            value={+value > 0 ? value : ''}
            min={0}
          />
        </div>
      </label>
    </div>
  );
};

export default InputPrice;
