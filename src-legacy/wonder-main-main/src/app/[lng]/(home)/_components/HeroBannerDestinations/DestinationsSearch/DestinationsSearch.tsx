'use client';
import Select from '@components/select/Select';
import { useTranslation } from '@i18n-client';
// styles
import styles from './DestinationsSearch.module.scss';
import { DestinationsSearchI } from './DestinationsSearch.model';
import { useState } from 'react';
import Link from 'next/link';
interface RangeDates {
  startDate: string;
  endDate: string;
}
const DestinationsSearch = ({ destinations, lng }: DestinationsSearchI) => {
  const { t } = useTranslation(lng, 'home');
  const trans = (value: string) =>
    t('heroBannerDestinations.' + value, { defaultValue: value });

  const [destination, setDestination] = useState('');
  const [rangeDates, setRageDates] = useState<RangeDates>({
    startDate: '2024-01-01',
    endDate: '2026-01-02',
  });
  const { endDate, startDate } = rangeDates;
  const onChangeRangeDates = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    name = name as keyof RangeDates;

    if (name === 'startDate' && value >= endDate) {
      setRageDates((current) => ({
        ...current,
        startDate: value,
        endDate: value,
      }));
    } else if (name === 'endDate' && value <= startDate) {
      setRageDates((current) => ({
        ...current,
        endDate: value,
        startDate: value,
      }));
    } else {
      setRageDates((current) => ({
        ...current,
        [name]: value,
      }));
    }
  };
  return (
    <form className={styles['search-form']}>
      <div className={styles['search-form__search-wrap']}>
        <div className={styles['search-wrap__field']}>
          <h2 className={styles['field__title']}>
            {trans('Which country are you going to?')}
          </h2>
          <Select
            onChange={({ target: { value } }) => {
              setDestination(value);
            }}
            className={styles['field__select']}
            name='trip'
            placeholder={trans('Select a country')}
            options={destinations}
            transparent
          />
        </div>
        <div className={styles['search-wrap__field']}>
          <h2 className={styles['field__title']}>
            {trans('When would you travel?')}
          </h2>
          <div className={styles['field__range-dates']}>
            <input
              type='date'
              aria-label='from'
              name='startDate'
              value={startDate}
              onChange={onChangeRangeDates}
            />
            <span>{t('to')}</span>
            <input
              min={startDate}
              type='date'
              aria-label='to'
              name='endDate'
              value={endDate}
              onChange={onChangeRangeDates}
            />
          </div>
        </div>
      </div>
      <Link
        href={`/${lng}/search?countries=${destination}&dateStart=${startDate}&dateEnd=${endDate}&utm_source=website&utm_medium=herobanner&utm_campaign=datatracking`}
        aria-label={t('Lets Go')}
      >
        <button>{t('Lets Go')}</button>
      </Link>
    </form>
  );
};

export default DestinationsSearch;
