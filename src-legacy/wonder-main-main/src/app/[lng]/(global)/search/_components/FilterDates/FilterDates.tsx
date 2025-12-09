'use client';

import styles from './FilterClient.module.scss';
import InputDate from './InputDate/InputDate';
import { useTranslation } from '@i18n-client';
import { InputEvent } from '../../../../../../types/common';
import { useContextFilters } from '../../__context/ContextFilters';
import { ISearchParams } from '../../page.model';
const [keyDateStart, keyDateEnd] = ['dateStart', 'dateEnd'];

const FilterDates = () => {
  const { queryParamsContext, changeQueryParamsContext } = useContextFilters();
  const dateStart = queryParamsContext.dateStart;
  const dateEnd = queryParamsContext.dateEnd;
  const { t } = useTranslation(undefined, 'search');

  const onChangeInput = ({ target: { value, name } }: InputEvent) => {
    const nameCatch = name as keyof ISearchParams;
    if (name === keyDateStart) {
      changeQueryParamsContext({ name: nameCatch, value });
    } else if (name === keyDateEnd) {
      changeQueryParamsContext({ name: nameCatch, value });
    }
  };

  return (
    <div className={styles.filterDates}>
      <InputDate
        label={t('From')}
        name={keyDateStart}
        onChange={onChangeInput}
        value={dateStart}
      />
      <InputDate
        label={t('To')}
        name={keyDateEnd}
        value={dateEnd}
        min={dateStart}
        onChange={onChangeInput}
      />
    </div>
  );
};
export default FilterDates;
