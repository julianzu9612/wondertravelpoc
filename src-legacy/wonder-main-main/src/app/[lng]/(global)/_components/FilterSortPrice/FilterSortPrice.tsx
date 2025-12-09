'use client';

import styles from './FilterSortPrice.module.scss';
import { useTranslation } from '@i18n-client';
import { useContextFilters } from '../../search/__context/ContextFilters';
import useQueryParams from '@hooks/useQueryParams';
const FilterSortPrice = () => {
  const { changeQueryParamsContext, queryParamsContext } = useContextFilters();
  const { setQueryParams } = useQueryParams();
  const sort = queryParamsContext.priceSort;
  const { t } = useTranslation(undefined, 'search');
  const trans = (value: string) =>
    t('sortPrice.' + value, { defaultValue: value });
  const onChangeSort = (value: 'price' | '-price') => {
    changeQueryParamsContext({ name: 'priceSort', value });
    setQueryParams({ priceSort: value });
  };
  return (
    <div className={styles.filterPrice}>
      <p>{trans('Sort By Price')}</p>
      <div className={styles.filterPrice__options}>
        <p
          className={`${styles.options__option} ${
            sort === '-price' && styles['options__option--active']
          }`}
          onClick={() => onChangeSort('-price')}
        >
          {trans('High to Low')}
        </p>
        <p
          className={`${styles.options__option} ${
            sort === 'price' && styles['options__option--active']
          }`}
          onClick={() => onChangeSort('price')}
        >
          {trans('Low to High')}
        </p>
      </div>
    </div>
  );
};

export default FilterSortPrice;
