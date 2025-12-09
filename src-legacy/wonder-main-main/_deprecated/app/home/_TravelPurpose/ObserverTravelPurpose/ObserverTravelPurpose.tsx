'use client';
import Observer from '@components/Observer/Observer';
import styles from './ObserverTravelPurpose.module.scss';
import { useTranslation } from '@i18n-client';
import { useState } from 'react';
const ObserverTravelPurpose = () => {
  const { t } = useTranslation(undefined, 'home');
  const trans = (value: string) =>
    t('travelPurpose.' + value, { defaultValue: value });
  const [isIntersecting, setIntersecting] = useState(false);

  return (
    <Observer
      callback={(Intersection) => {
        setIntersecting(Intersection[0].isIntersecting);
      }}
    >
      <h2
        className={`${styles.title} ${
          isIntersecting && styles['title-animation']
        }`}
      >
        {trans('Travel with')} <br/><span>{trans('Purpose')}</span>
      </h2>
    </Observer>
  );
};

export default ObserverTravelPurpose;
