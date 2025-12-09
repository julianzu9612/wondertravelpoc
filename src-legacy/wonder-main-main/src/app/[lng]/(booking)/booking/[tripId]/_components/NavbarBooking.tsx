import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { BookingContext } from '../../../bookingContext';
import styles from '../Booking.module.scss';

const NavbarBooking = () => {
  const {
    activeStep,
    lng,
    tripId,
    completedFormCreditCard,
    contractChecked,
    completedData,
    selectedDate,
    accommodationSelected,
    leaderCreated,
    totalUsers,
    checkAccompanying
  } = useContext(BookingContext);

  const haveAccommodation = Boolean(Object.keys(accommodationSelected)?.length) ?? 0;
  const haveDate = Boolean(Object.keys(selectedDate)?.length) ?? 0;
  const haveTravelers = totalUsers() > 0;


  return (
    <ul className={styles['new-booking__navbar']}>
      <Link
        href={`/${lng}/booking/${tripId}/viajeros`}
        className={`${
          activeStep === 'viajeros' ? styles['active'] : styles['deactive']
        } ${styles['first']} ${styles['last']} ${
          haveTravelers && styles['complete-data']
        }`}
      >
        <li>
          <Image
            src={
              haveTravelers
                ? '/assets/icons/check-white.svg'
                : '/assets/icons/booking/person.svg'
            }
            alt='icon 1'
            width={12}
            height={12}
          />
        </li>
      </Link>

      <Link
        href={`/${lng}/booking/${tripId}/dates`}
        className={`${
          activeStep === 'dates' ? styles['active'] : styles['deactive']
        } ${styles['last']} ${haveDate && styles['complete-data']} `}
      >
        <li>
          <Image
            src={
              haveDate
                ? '/assets/icons/check-white.svg'
                : '/assets/icons/booking/calendar.svg'
            }
            alt='icon 1'
            width={12}
            height={12}
          />
        </li>
      </Link>

      <Link
        href={`/${lng}/booking/${tripId}/accomodation`}
        className={`${
          activeStep === 'accomodation' ? styles['active'] : styles['deactive']
        } ${styles['last']} ${haveAccommodation && styles['complete-data']}`}
      >
        <li>
          <Image
            src={
              haveAccommodation
                ? '/assets/icons/check-white.svg'
                : '/assets/icons/booking/bed.svg'
            }
            alt='icon 1'
            width={12}
            height={12}
          />
        </li>
      </Link>

      <Link
        href={`/${lng}/booking/${tripId}/informacion-contacto`}
        className={`${
          activeStep === 'informacion-contacto'
            ? styles['active']
            : styles['deactive']
        } ${styles['last']} ${leaderCreated && styles['complete-data']}`}
        
      >
        <li>
          <Image
            src={
              completedData
                ? '/assets/icons/check-white.svg'
                : '/assets/icons/booking/form.svg'
            }
            alt='icon 1'
            width={12}
            height={12}
          />
        </li>
      </Link>
      <Link
        href={`/${lng}/booking/${tripId}/informacion-viajeros`}
        className={`${
          activeStep === 'informacion-viajeros'
            ? styles['active']
            : styles['deactive']
        } ${styles['last']} ${checkAccompanying && styles['complete-data']}`}
        
      >
        <li>
          <Image
            src={
              completedData
                ? '/assets/icons/check-white.svg'
                : '/assets/icons/booking/user-plus.svg'
            }
            alt='icon 1'
            width={12}
            height={12}
          />
        </li>
      </Link>
      <Link
        href={`/${lng}/booking/${tripId}/informacion-tarjeta`}
        className={`${
          activeStep === 'informacion-tarjeta'
            ? styles['active']
            : styles['deactive']
        } ${styles['last']} ${
          completedFormCreditCard && contractChecked && styles['complete-data']
        }`}
      >
        <li>
          <Image
            src={
              completedFormCreditCard && contractChecked
                ? '/assets/icons/check-white.svg'
                : '/assets/icons/booking/card.svg'
            }
            alt='icon 1'
            width={12}
            height={12}
          />
        </li>
      </Link>
    </ul>
  );
};

export default NavbarBooking;
