'use client';
import { ReactNode, useEffect, useState } from 'react';
import styles from './FilterHamburger.module.scss';
import { useTranslation } from '@i18n-client';
import FilterDeals from '../../search/_components/FilterDeals/FilterDeals';
import { IFilterSearch } from '../FiltersSearch/FilterSearch.model';

const FilterHamburgerClient = ({
  children,
  queryParams,
}: {
  children: ReactNode;
  queryParams: IFilterSearch['queryParams'];
}) => {
  const [hiddenFilter, setHiddenFilter] = useState(true);
  const { t } = useTranslation(undefined, 'search');
  const changeHiddenFilter = () => {
    setHiddenFilter(!hiddenFilter);
  };
  const { hasDiscount } = queryParams;
  const onHiddenFilter = () => {
    if (!hiddenFilter) {
      setHiddenFilter(true);
    }
  };
  useEffect(() => {
    onHiddenFilter();
  }, [queryParams]);

  return (
    <div
      onClick={() => !hiddenFilter && changeHiddenFilter()}
      className={`${styles.FilterHamburger} ${
        !hiddenFilter && styles['FilterHamburger--open']
      }`}
    >
      {hiddenFilter && (
        <>
          <div className={styles.FilterHamburger__filters}>
            <div className={styles['filters__button']}>
              <button className='secondary-dark' onClick={changeHiddenFilter}>
                {t('Filters')}
              </button>
            </div>
            <FilterDeals dealsQuery={hasDiscount} />
          </div>
        </>
      )}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.FilterHamburger__content} ${
          !hiddenFilter && styles['FilterHamburger__content--open']
        }`}
      >
        <div className={styles['content__filters']}>
          <button
            onClick={changeHiddenFilter}
            className={styles.filters__close}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FilterHamburgerClient;
