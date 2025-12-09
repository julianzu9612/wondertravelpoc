'use client';
import InputPrice from './InputPrice/InputPrice';
import styles from './FilterPrice.module.scss';
import { useTranslation } from '@i18n-client';
import { InputEvent } from '../../../../../../types/common';
import { useContextFilters } from '../../__context/ContextFilters';
import { ISearchParams } from '../../page.model';
const [keyPriceFrom, keyPriceTo] = ['priceMin', 'priceMax'];
const FilterPrice = () => {
  const { changeQueryParamsContext, queryParamsContext } = useContextFilters();
  const { t } = useTranslation(undefined, 'search');
  const priceMin = queryParamsContext.priceMin;
  const priceMax = queryParamsContext.priceMax;
  const onChangePrice = ({ target: { value, name } }: InputEvent) => {
    const nameCatch = name as keyof ISearchParams;
    changeQueryParamsContext({ name: nameCatch, value: +value });
  };

  return (
    <div className={styles['filter-price']}>
      <InputPrice
        label={t('From')}
        name={keyPriceFrom}
        onChange={onChangePrice}
        value={priceMin || 0}
      />
      <InputPrice
        label={t('To')}
        name={keyPriceTo}
        onChange={onChangePrice}
        value={priceMax || 0}
      />
    </div>
  );
};

export default FilterPrice;
