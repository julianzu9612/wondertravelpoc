'use client';
import { useContextFilters } from '../../__context/ContextFilters';
import useQueryParams from '@hooks/useQueryParams';
import styles from './ApplyFilters.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { updateQueryParams } from '../../../../../actions';
import { useTranslation } from '@i18n-client';
const ApplyFilters = () => {
  const { queryParamsContext } = useContextFilters();
  const { queryParams } = useQueryParams();
  const onApplyFilters = async () => {
    const params = await updateQueryParams({
      params: queryParamsContext,
      searchParams: queryParams,
    });
    setQueryParamsObj(params);
  };
  const [queryParamsObj, setQueryParamsObj] = useState('');
  const url = usePathname();
  useEffect(() => {
    onApplyFilters();
  }, [queryParamsContext]);
  const { t } = useTranslation(undefined, 'search');
  return (
    <Link
      className={`button ${styles.applyFilters}`}
      href={`${url}${queryParamsObj}`}
    >
      {t('Apply filters')}
    </Link>
  );
};

export default ApplyFilters;
