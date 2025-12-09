import React, { useContext } from 'react';
import style from './ErrorToast.module.scss';
import { BookingContext } from '../../../../bookingContext';
import { useTranslation } from '@i18n-client';

const ErrorToast = () => {
  const {lng, error, showError } = useContext(BookingContext);
  const {t} = useTranslation(lng, 'booking');

  return (
    <>
      {error.show && (
        <div className={style['error-toast']}>
          <div className={style['toast']}>
            <p className={style['title']}>Upps!</p>
            <p className={style['message']}>
              {error?.message}
            </p>
            <button
              className='primary-dark'
              onClick={() => showError({ show: false })}
            >
              {t('close', 'Cerrar')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorToast;
