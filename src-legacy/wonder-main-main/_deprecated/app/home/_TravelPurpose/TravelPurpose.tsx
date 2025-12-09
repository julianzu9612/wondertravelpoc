/**
 * deprecated mon/15/04/2024
 */

import Image from 'next/image';
//styles
import styles from './TravelPurpose.module.scss';
//services

import { useTranslation } from '@i18n-server';
//components

import TargetPurpose from '../../../../src/app/[lng]/(home)/_components/TargetPurpose/TargetPurpose';
import ObserverTravelPurpose from './ObserverTravelPurpose/ObserverTravelPurpose';

const Travelpurpose = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'home');

  return (
    <section className={styles['travelPurpose']}>
      <picture className={styles['travelPurpose__bkg-img']}>
        <source
          media='(min-width: 720px)'
          srcSet='/assets/images/purposeDesktop.jpg'
        />
        <Image
          fill
          src={'/assets/images/purposeMobile.webp'}
          alt='we purpose'
        />
        <source />
      </picture>
      <div className={styles['travelPurpose__content']}>
        <ObserverTravelPurpose />
        <p className={styles['content__description']}>
          {t('travelPurpose.description')}
        </p>
        <div className={styles['content__targets']}>
          <TargetPurpose
            alt='travel purpose'
            description='We plant 1 native tree.'
            img='/assets/icons/treePlanting.png'
          />
          <TargetPurpose
            alt='travel purpose'
            description='We recover and protect 2.25 m² of native forest.'
            img='/assets/icons/Forest.png'
          />
        </div>
      </div>
    </section>
  );
};

export default Travelpurpose;
