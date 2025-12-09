'use client';
import React, { useEffect, useState } from 'react';
import { setCookie } from 'cookies-next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { updateQueryParams } from '../../../../app/actions';
import useQueryParams from '@hooks/useQueryParams';

const ButtonLanguage = ({ label, value }: { label: string; value: string }) => {
  
  const route = usePathname();
  const { push } = useRouter();
  const { queryParams } = useQueryParams();
  
  const searchParams = useSearchParams();
  const [queryParamsObj, setQueryParamsObj] = useState('');

  const onApplyFilters = async () => {
    const params = await updateQueryParams({
      searchParams,
    });
    if (params && params !== '?') setQueryParamsObj(params);
  };

  useEffect(() => {
    onApplyFilters();
  }, [searchParams, queryParams]);

  const changeLanguage = () => {
    const routeSplit = route.split('/');
    routeSplit[1] = value;
    const routeChangeParam = routeSplit.join('/');
    setCookie('i18next', value);
    push(routeChangeParam + queryParamsObj, { scroll: false });
  };

  return (
    <button className='ghost-dark' onClick={() => changeLanguage()}>
      {label}
    </button>
  );
};

export default ButtonLanguage;
