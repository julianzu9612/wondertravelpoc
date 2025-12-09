'use client';

import dynamic from 'next/dynamic';
import { Suspense, ReactElement } from 'react';
import styles from './CardPrice.module.scss';

const ButtonBookNow = dynamic(() => import('./ButtonBookNow'), { ssr: false });
const ButtonWeTravel = dynamic(() => import('./buttonWeTravel'), {
  ssr: false,
});

export const RenderBookButton = ({
  hasBooking,
  tripId,
  title,
  uuidWeTravel,
  lng,
}: {
  hasBooking?: boolean;
  tripId: string ;
  title?: string;
  uuidWeTravel?: string;
  lng: string;
}): ReactElement | null => {
  
  if (hasBooking) {
    return (
      <ButtonBookNow idTrip={tripId ?? '0'} title={title || ''}/>
    );
  } else if (uuidWeTravel && uuidWeTravel.length > 0) {
    return (
      <Suspense>
        <ButtonWeTravel
          lng={lng}
          uuidWeTravel={uuidWeTravel}
          className={` ${styles['CardPrice__button-we-travel']}`}
        />
      </Suspense>
    );
  } else {
    return null;
  }
};