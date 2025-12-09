'use client';
import { useTranslation } from '@i18n-client';
import styles from './Signin.module.scss';
import Slider from './pastTrips/PastTrips';
import CardSharedTrip from '@components/CardTrip/CardSharedTrip/CardSharedTrip';
import { StructureSearchBooking } from '@utils/formaters/structureSearchBooking';
import dayjs from 'dayjs';
import { State } from '../types.model';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TripsState } from '../searchReservation/components/contentReservation/contentReservation.model';
import Link from 'next/link';

const SignIn = ({
  className,
  lng,
  queryState = State.MENU_EMPTY,
}: {
  className?: string;
  lng: string;
  queryState?: State;
}) => {
  const { t } = useTranslation(lng, 'profile');
  const [bookings, setBookings] = useState<TripsState[]>([]);

  useEffect(() => {
    const getDataBooking = async () => {
      const bookings = await StructureSearchBooking(lng);
      setBookings(bookings);
    };
    getDataBooking();
  }, []);

  const seeDetail = t('see_detail');

  const items = bookings
    .filter(({ dates }) => {
      const [start_date] = dates;
      const dayToday = dayjs();
      const dayStart = dayjs(start_date);
      return dayStart.isBefore(dayToday);
    })
    .map(
      (
        {
          date,
          image,
          linkCompleteData,
          linkItinerary,
          title,
          travellers,
          typeTravel,
        },
        i
      ) => {
        return (
          <CardSharedTrip
            isShared
            key={i}
            title={title as string}
            image={image as string}
            date={date as string}
            travellers={travellers}
            linkCompleteData={linkCompleteData as string}
            linkItinerary={linkItinerary as string}
            className={styles['next-trip__card']}
            textMainCta={seeDetail}
            typeTravel={typeTravel}
          />
        );
      }
    );

  return (
    <div className={`${styles['last-trips']} ${className}`}>
      {queryState === State.MENU_EMPTY ? (
        <div className={styles['last-trips__with-account']}>
          {items.length > 0 ? (
            <Slider items={items} className={styles['with-account__cards']} />
          ) : (
            <div className={styles['with-account__empty']}>
              <p className={styles['empty__title']}>{t('empty.title')}</p>
              <p className={styles['empty__description']}>
                {t('empty.description')}{' '}
              </p>
              <Image
                src={'/assets/images/footerimage.png'}
                alt=''
                height={100}
                width={100}
              />
            </div>
          )}
          <Link
            href={`/${lng}/lines/trips`}
            className={`button secondary ${styles['next-trip__cta-more-trips']}`}
          >
            {t('explore_more_travel')}
          </Link>
        </div>
      ) : (
        <div className={styles['sign-in']}>
          <p className={styles['sign-in__title']}>{t('sign_in.title')}</p>
          <p className={styles['sign-in__description']}>
            {t('sign_in.description')}{' '}
          </p>
          <Link
            href={`/${lng}/auth?state=signup`}
            className={`button ${styles['sign-in__cta']}`}
          >
            {t('regist_me')}
          </Link>
        </div>
      )}
    </div>
  );
};

export default SignIn;
