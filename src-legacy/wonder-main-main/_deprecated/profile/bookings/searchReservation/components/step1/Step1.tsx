'use client';
import Input from '@components/input/Input';
import React, { useState } from 'react';
import styles from './Step1.module.scss';
import { useTranslation } from '@i18n-client';

const Step1 = ({ onSendOtp }: { onSendOtp: () => void }) => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation(undefined, 'profile');
  return (
    <div className={styles['step-1']}>
      <p className={`${styles['step-1__subtitle']} subtitle`}>
        {t('find_reservation')}
      </p>
      <p className={styles['step-1__description']}>{t('send_code_email')}</p>
      <Input
        placeholder='E-mail'
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles['step-1__input-email']}
      />
      <button onClick={onSendOtp} className={styles['step-1__cta']}>
        {t('send_code')}
      </button>
      <p className={`${styles['step-1__not-found-reservation']} subtitle`}>
        {t('no_reservation')}
      </p>
      <p className=''>{t('message_explore_our_travel')}</p>
    </div>
  );
};

export default Step1;
