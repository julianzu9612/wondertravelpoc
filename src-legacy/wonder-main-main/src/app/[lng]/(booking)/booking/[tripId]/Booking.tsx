import React, { ReactElement } from 'react';
import styles from './Booking.module.scss';
import Image from 'next/image';

interface IBookingPage {
  title: string;
  nextStep: () => void;
  prevStep: () => void;
  children: ReactElement;
  goSuccess: boolean;
  NextButtonDisabled: boolean;
}

const BookingPage = ({
  title,
  children,
  nextStep,
  NextButtonDisabled,
  prevStep,
  goSuccess,
}: IBookingPage) => (
  <div className={styles['booking']}>
    <h1 className={styles['booking__title']}>{title}</h1>
    {children}
    <button className={styles['booking__prev-btn']} onClick={() => prevStep()}>
      <Image
        src='/assets/icons/right-arrow.svg'
        alt=''
        width={18}
        height={18}
      />
    </button>
    {!goSuccess && (
      <button
        disabled={NextButtonDisabled}
        className={styles['booking__next-btn']}
        onClick={() => nextStep()}
      >
        <Image
          src='/assets/icons/right-arrow.svg'
          alt=''
          width={18}
          height={18}
        />
      </button>
    )}
  </div>
);
export default BookingPage;
