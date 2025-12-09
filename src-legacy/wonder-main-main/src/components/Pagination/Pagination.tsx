'use client';

import React from 'react';
// models
import { IPagination } from './Pagination.model';
// styles
import styles from './Pagination.module.scss';
import Image from 'next/image';
import useQueryParams from '@hooks/useQueryParams';

const Pagination = ({
  pagination: { count = 0, limit = 20, offset = 0 },
}: IPagination) => {
  limit = +limit;
  offset = +offset;
  const nextPage = offset + limit;
  const prevPage = offset - limit;
  const page = nextPage < count ? nextPage : count;
  const paramsPageNext = {
    offset: nextPage < count ? +nextPage : offset,
    limit,
  };
  const paramsPagePrev = {
    offset: prevPage >= 0 ? prevPage : offset,
    limit,
  };
  const { setQueryParams } = useQueryParams();

  return (
    <>
      {Boolean(count) && (
        <section className={styles['pagination-component']}>
          <nav className={styles['categories-filter__boxes']}>
            {offset > 0 && (
              <p onClick={() => setQueryParams(paramsPagePrev)}>
                <Image
                  src='/assets/icons/prev.svg'
                  alt=''
                  width={30}
                  height={30}
                />
              </p>
            )}
            {/* <span>
              {+page}/{count}P
            </span> */}
            {page !== count && (
              <p
                onClick={() => {
                  setQueryParams(paramsPageNext);
                }}
              >
                <Image
                  src='/assets/icons/next.svg'
                  alt=''
                  width={30}
                  height={30}
                />
              </p>
            )}
          </nav>
        </section>
      )}
    </>
  );
};

export default Pagination;
