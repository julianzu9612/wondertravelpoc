'use client';
import React, { useContext } from 'react';
import styles from './ErrorToast.module.scss';
import { useRouter } from 'next/navigation';
import { BookingContext } from '../../../bookingContext';
import { formatSingleDateRange } from '../../../../(itinerary)/trips/[slugName]/_components/Dates/utils/formateDAteRange';
import Image from 'next/image';

const ResumeModalPage = () => {
  const {
    dataContact,
    infoPackage,
    selectedDate,
    totalUsers,
    changeBookingForValidateDates,
    proccedPayment,
    lng,
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
    <div className={`${styles['modal-resume']}`}>
      <div className={styles['modal-resume__background']} onClick={back}></div>
      <div className={styles['modal-resume__info']}>
        <div  className={styles['info__btn-close']}>
          <Image onClick={back} src='/assets/icons/close.svg' alt='' width={24} height={24} />
        </div>
        <p className={styles['info__name']}>¡{dataContact.first_name}!</p>
        <p className={styles['info__title-trip-name']}>Vas a viajar a:</p>
        <p className={styles['info__trip-name']}>{infoPackage.title}</p>
        <p className={styles['info__start-date']}>
          del:{' '}
          <span>{formatSingleDateRange(selectedDate.start_date, lng)}</span>
        </p>
        <p className={styles['info__end-date']}>
          al: <span>{formatSingleDateRange(selectedDate.end_date, lng)}</span>
        </p>
        <p className={styles['info__total-persons']}>
          Van a viajar: {totalUsers()} personas
        </p>
        <h4 className={styles['info__title-important']}>¡Importante!</h4>
        <p className={styles['info__important']}>
          Este viaje <b>no incluye Vuelos</b> antes de hacer tu pago valida la disponibilidad de vuelos.
        </p>
        <button className={styles['info__btn-booking']} onClick={onClick}>
          Hacer Reserva
        </button>
      </div>
    </div>
  );
};

export default ResumeModalPage;
