'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './SummaryPayment.module.scss';
import { formatMoney } from '../../utils/formatMoney';
import { CalendarFormat } from '@utils/DateFormat';
import { useTranslation } from '@i18n-client';
import { formatCurrencyI18n } from '@utils/formatCurrencyI18n';

const SummaryPayment = ({ className = '' }) => {
  const {t} = useTranslation(undefined, 'booking');
  const [localStorageState, setLocalStorageState] = useState({
    selectedDate: {
      start_date: '',
      end_date: '',
    }
  });

  const [dataLocal, setDataLocal] = useState({
    totalLocal: '',
    itemsSumary: [],
  });
  const total = formatMoney(dataLocal?.totalLocal);

  useEffect(() => {
    const totalLocal = localStorage.getItem('totalLocal') ?? '';
    const itemsSumary = localStorage.getItem('itemsSumary') ?? '[]';
    const localStorageState = localStorage.getItem('state') ?? '';

    setDataLocal({ totalLocal, itemsSumary: JSON.parse(itemsSumary) });
    if (localStorageState) setLocalStorageState( JSON.parse(localStorageState));
  }, []);

  return (
    <motion.div
      itemID='card-summary-payment'
      id='card-summary-payment'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, y: 20 }}
      className={`${styles['summary-payment__card-summary']} ${className}`}
    >
      <p className={styles['card-summary__title-dates']}>{t('resume')}</p>
      <p className={styles['card-summary__subtitle-dates']}>
        {CalendarFormat(localStorageState?.selectedDate?.start_date, localStorageState?.selectedDate?.end_date) }
      </p>
      {dataLocal.itemsSumary?.map((item, i) => (
        <div className={styles['card-summary__persons']} key={i}>
          <p className={styles['persons__type']}>{item[0]}</p>
          <p className={styles['persons__price']}>
            ${formatMoney(`${item[1]}`)} <span>{item[1] && item[1] > 0 && formatCurrencyI18n(`${item[1]}` as string)}</span>
          </p>
        </div>
      ))}

      <hr className={styles['card-summary__line']} />
      <div className={styles['card-summary__total-trip']}>
        <p className={styles['card__title']}>Total:</p>
        <p className={styles['card__price']}>
          ${total} <span>{total && formatCurrencyI18n(total as string)}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default SummaryPayment;
