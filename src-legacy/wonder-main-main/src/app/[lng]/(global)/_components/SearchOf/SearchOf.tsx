'use client';

import useQueryParams from '@hooks/useQueryParams';
import { useEffect } from 'react';
import styles from './SearchOf.module.scss';
import { InputEvent } from '../../../../../types/common';
import { useTranslation } from '@i18n-client';
import Image from 'next/image';
import { useContextFilters } from '../../search/__context/ContextFilters';

const nameKey = 'query';
const SearchOf = ({ querySearch }: { querySearch?: string }) => {
  const { setQueryParams } = useQueryParams();
  const {
    queryParamsContext: { query },
    changeQueryParamsContext,
  } = useContextFilters();

  const search = query;

  const handleFbSearch = (searchTerm: string) => {
    const fbq = window.fbq;
    const prod = process.env.NODE_ENV === 'production';

    if (fbq && prod) {
      try{
        fbq('track', 'Search', { search_string: searchTerm });
      }catch (e) {
        console.error('error fb event');
        console.error(e);
      }
    }
  };

  const changeSearch = ({ target: { value } }: InputEvent) => {
    changeQueryParamsContext({ name: nameKey, value });
    handleFbSearch(value);
  };

  const { t } = useTranslation(undefined, 'search');

  const clearSearch = () => {
    setQueryParams({ query: '' }, 'replace');
    changeQueryParamsContext({ name: nameKey, value: '' });
  };

  useEffect(() => {
    if (!!!querySearch) {
      clearSearch();
    }
  }, [querySearch]);

  return (
    <div className={styles.search}>
      <span
        className={`${styles.search__icon} ${styles['search__icon--search']} `}
        onClick={() => {
          setQueryParams({ query: search }, 'replace');
        }}
      >
        <Image
          src={'/assets/icons/searchBlack.svg'}
          alt=''
          width={24}
          height={24}
        />
      </span>
      <input
        className={styles.search__input}
        value={search || ''}
        onChange={changeSearch}
        onKeyUp={({ key }) => {
          if (key === 'Enter') {
            setQueryParams({ query: search }, 'replace');
          }
        }}
        placeholder={search || t('Search')}
      />
      <span
        className={`${styles.search__icon} ${styles['search__icon--close']}`}
        onClick={clearSearch}
      >
        {!!search && (
          <Image
            src={'/assets/icons/search/close.svg'}
            alt=''
            width={24}
            height={24}
          />
        )}
      </span>
    </div>
  );
};

export default SearchOf;
