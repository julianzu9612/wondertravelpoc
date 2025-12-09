'use client';
import React, { useState } from 'react';
import Input from '@components/input/Input';
import style from './ConsultarBooking.module.scss';
import { useTranslation } from '@i18n-client';

const ConsultBooking =  ({ onClickButton, lng } : { onClickButton: ({mail, idBooking} : {mail: string, idBooking: string}) => void, lng:string}) => {
  const [mail, setMail] = useState('');
  const [idBooking, setIdBooking] = useState('');
  const {t}= useTranslation(lng, 'profile');
  return (
    <div className={style['consult-booking']}>
      <h3>
        {t('consult_you_reservation')}
      </h3>
      <Input
        type='text'
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        placeholder='E-mail'
      />
      <Input
        type='text'
        value={idBooking}
        onChange={(e) => setIdBooking(e.target.value)}
        placeholder='ID Reserva'
      />
      <button
        onClick={() => onClickButton({mail, idBooking})}
        className={style['consult-booking__cta']}>{t('consult_reservation')}</button>
    </div>
  );
};

export default ConsultBooking;
