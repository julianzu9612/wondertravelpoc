import Input from '@components/input/Input';
import styles from './Step3.module.scss';
import { useState } from 'react';
import { useTranslation } from '@i18n-client';

const Step3 = () => {
  const [otp, setOtp] = useState('');
  const { t } = useTranslation(undefined, 'profile');

  return (
    <div>
      <p className='subtitle'>{t('check_email')}</p>
      <p>{t('send_email')}</p>
      <Input type='text' value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button> {t('consult_reservation')}</button>
      <p className='subtitle'> {t('nothing_send_email')}</p>
      <button className={`${styles['l']} ghost`}></button>
    </div>
  );
};

export default Step3;
