'use client';
import { useContext } from 'react';
import { BookingContext } from '../../../../bookingContext';
import style from './SubmitBooking.module.scss';
import { useTranslation } from '@i18n-client';
import { useRouter } from 'next/navigation';

const SubmitBooking = ({ className }: { className?: string }) => {
  const {
    lng,
    completedFormCreditCard,
    contractChecked,
    infoPackage,
    tripId,
    changeBookingForValidateDates,
  } = useContext(BookingContext);

  const { push } = useRouter();
  const { t } = useTranslation(lng, 'booking');

  const dependValidation = infoPackage.depend_availability_validation;

  const onClickSubmitBooking = async () => {
    if (dependValidation) {
      const response = await changeBookingForValidateDates();
      if (response) {
        push(`/${lng}/booking/${tripId}/date-validation`);
      }
    } else {
      push(`/${lng}/booking/${tripId}/resume`);
    }
  };

  const textButton = dependValidation
    ? t('total.send-validation-date', 'Enviar datos')
    : t('total.send-booking', 'Enviar Reserva');

  const disabledButton = dependValidation
    ? false
    : !(completedFormCreditCard && contractChecked);

  return (
    <div className={style['submit-button']}>
      <button
        className={`${className} ${style['submit-button__button']}`}
        type='button'
        onClick={onClickSubmitBooking}
        disabled={disabledButton}
      >
        {textButton}
      </button>
      {disabledButton && (
        <div className={style['submit-button__aclarations']}>
          Revisa los siguientes pasos:
          <p>Te falta aceptar Terminos y condiciones</p>
        </div>
      )}
    </div>
  );
};

export default SubmitBooking;
