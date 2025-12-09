'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { updateQueryParams } from '../app/actions';

export default function useQueryParams<T>() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  async function setQueryParams(
    params: Partial<T>,
    replace: 'replace' | 'push' = 'push'
  ) {
    const queryParams = await updateQueryParams({ params, searchParams });
    router[replace](`${pathname}${queryParams}`, {
      scroll: false,
    });
  }

  return { queryParams: searchParams, setQueryParams };
}
