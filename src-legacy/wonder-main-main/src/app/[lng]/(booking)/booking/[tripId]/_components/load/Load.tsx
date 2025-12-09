import React, { useContext } from 'react';
import styles from './Load.module.scss';
import { BookingContext } from '../../../../bookingContext';
import LottieLoad from '@components/lottieLoad/LottieLoad';

const LoadLottie = () => {
  const { load } = useContext(BookingContext);

  return (
    <>
      {load && (
        <div className={styles['load']}>
          <LottieLoad />;
        </div>
      )}
    </>
  );
};

export default LoadLottie;
