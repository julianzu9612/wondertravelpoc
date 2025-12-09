'use client';
import React, { useContext } from 'react';
import styles from './ErrorToast.module.scss';
import { useRouter } from 'next/navigation';
import { BookingContext } from '../../../bookingContext';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappUrl } from '../../../../../../constants';

const DateValidationPage = () => {
  const {
    lng,
    infoPackage,
    changeBookingForValidateDates,
    proccedPayment,
    selectedDate,
  } = useContext(BookingContext);

  const { back } = useRouter();

  const onClick = () => {
    if (infoPackage.depend_availability_validation) {
      changeBookingForValidateDates();
    } else {
      proccedPayment();
    }
  };

  return (
    <div className={`${styles['modal-date-validation']}`}>
      <div className={styles['background']} onClick={back}></div>
      <div className={styles['info']}>
        <div className={styles['info__btn-close']}>
          <Image
            onClick={back}
            src='/assets/icons/close.svg'
            alt=''
            width={24}
            height={24}
          />
        </div>
        <h4 className={styles['info__title']}>¡Información eviada!</h4>
        <p className={styles['info__text']}>
          Dentro de poco nos contactaremos contigo por whatsapp, para seguir
          gestionando tu experiencia
        </p>
        <Link
          target='_blank'
          rel='noreferrer'
          href={whatsappUrl(
            `hola quiero reservar a ${infoPackage.title} y estoy esperando verificar disponibilidad para las fechas ${selectedDate.start_date} - ${selectedDate.end_date}`,
            true
          )}
        >
          <button className={styles['info__btn-contact']} onClick={onClick}>
            Contactar un asesor
          </button>
        </Link>
        <Link href={`/${lng}`}>
          <button
            className={`${styles['info__btn']} secondary`}
            onClick={onClick}
          >
            Ir Al Inicion
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DateValidationPage;
