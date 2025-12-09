'use client';
import { useTranslation } from '@i18n-client';
import styles from './FilterDeals.module.scss';
import useQueryParams from '@hooks/useQueryParams';
import { ChangeEvent, useEffect, useState } from 'react';
const FilterDeals = ({ dealsQuery }: { dealsQuery?: string | boolean }) => {
  const { t } = useTranslation(undefined, 'search');
  const { setQueryParams } = useQueryParams();
  const [deals, setDeals] = useState(dealsQuery);
  const changeQueryDeals = ({
    target: { value, checked },
  }: ChangeEvent<HTMLInputElement>) => {
    setDeals(checked ? value : '');
  };
  useEffect(() => {
    if (deals !== dealsQuery) {
      setQueryParams({ hasDiscount: deals });
    }
  }, [deals]);
  useEffect(() => {
    setDeals(dealsQuery);
  }, [dealsQuery]);
  return (
    <label className={styles['deals']}>
      {t('View Deals')}
      <input
        type='checkbox'
        checked={deals === 'true'}
        className='form-check-input-false'
        value={'true'}
        name={'deals'}
        onChange={changeQueryDeals}
      />
    </label>
  );
};

export default FilterDeals;
