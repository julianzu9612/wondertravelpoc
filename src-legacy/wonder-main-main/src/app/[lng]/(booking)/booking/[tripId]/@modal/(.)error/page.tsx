'use client';
import React from 'react';
import style from './Error.module.scss';
import { whatsappUrl } from '../../../../../../../constants';
import { useTranslation } from '@i18n-client';

const page = () => {
  const {t} = useTranslation();
  const titleTrip =
    typeof window !== 'undefined'
      ? localStorage.getItem('titleTrip') ?? ''
      : '';
 
  return (
    <div className={style['slider']}>
      <h3>{t('not_disponibility')}</h3>
      <a href={whatsappUrl(titleTrip ?? 'undefined title trip in booking')} target='_blank' rel='noreferrer'>
        <button>{t('Contact Us')}</button>
      </a>
    </div>
  );
};

export default page;
