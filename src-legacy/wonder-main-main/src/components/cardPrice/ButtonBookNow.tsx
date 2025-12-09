'use client';
import Link from 'next/link';
import React from 'react';
import styles from './CardPrice.module.scss';
import { useTranslation } from '@i18n-client';
import useGetLanguaje from '@hooks/useGetLanguaje';

const ButtonBookNow = ({
  idTrip,
  title,
}: {
  idTrip: string;
  title: string;
}) => {
  const goBookNow = () => {
    localStorage.setItem('titleTrip', title ?? '');
  };
  const lng = useGetLanguaje();

  const { t } = useTranslation(undefined, 'itinerary');

  return (
    <Link href={`/${lng}/booking/${idTrip}`}>
      <button
        className={`${styles['CardPrice__btn-book']} `}
        onClick={goBookNow}
      >
        {t('cardPrice.Book Now')}
      </button>
    </Link>
  );
};

export default ButtonBookNow;
