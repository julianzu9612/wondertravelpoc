'use client';
import { type ReactNode } from 'react';
import { BookingProvider } from '../../bookingContext';
import SummaryBooking from './_components/summary/Summary';
import styles from './Booking.module.scss';
import Total from './_components/total/Total';
import TitleBooking from './_components/TitleBooking';
import ImageBooking from './_components/ImageBooking';
import NavbarBooking from './_components/NavbarBooking';
import LoadLottie from './_components/load/Load';
import ErrorToast from './_components/error-toast/ErrorToast';

const layout = ({
  children,
  steps,
}: {
  children: ReactNode;
  steps: ReactNode;
}) => {
  return (
    <>
      <BookingProvider>
        <div className={styles['new-booking']}>
          <ImageBooking className={styles['new-booking__img-main']} />

          <NavbarBooking />

          <div className={styles['new-booking__step']}>{steps}</div>

          <h1 className={styles['new-booking__name-trip']}>
            <TitleBooking />
          </h1>

          <div className={styles['new-booking__summary']}>
            <SummaryBooking />
          </div>

          <div className={styles['new-booking__total']}>
            <Total />
          </div>

          {children}

          <LoadLottie />
          <ErrorToast />
        </div>
      </BookingProvider>
    </>
  );
};

export default layout;
