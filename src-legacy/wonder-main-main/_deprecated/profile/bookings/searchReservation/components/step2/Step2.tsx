'use client';
import Input from '@components/input/Input';
import React, { useState } from 'react';
import styles from './Step2.module.scss';
import { useTranslation } from '@i18n-client';

const Step2 = ({ onConsultBook }: { onConsultBook: () => void }) => {
  const [otp, setOtp] = useState('');
  const { t } = useTranslation(undefined, 'profile');
  return (
    <div className={styles['step-2']}>
      <p className='subtitle'>{t('check_email')}</p>
      <p className={styles['step-2__size-text']}>{t('send_email')}</p>
      <Input
        placeholder='Codigo'
        type='text'
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button
        onClick={onConsultBook}
        className={`${styles['step-2__cta-consult']} ${styles['step-2__size-text']}`}
      >
        {t('consult_reservation')}
      </button>
      <p className={`subtitle ${styles['step-2__size-text']}`}>
        {t('nothing_send_email')}
      </p>
      <button
        className={`${styles['ghost']} ${styles['step-2__size-text']} ghost`}
      >
        {t('resend_email')}
      </button>
    </div>
  );
};

export default Step2;
