import React from 'react';
import styles from './Recognition.module.scss';
import Image from 'next/image';
import { TFunction } from 'i18next';

const Recognition = ({ t }: { t: TFunction<any, string> }) => {
  return (
    <div className={styles['recognition']}>
      <h2 className={styles['recognition__title']}>{t('recognition.title')}</h2>
      <p className={styles['recognition__description']}>
        {t('recognition.description')}
      </p>
      <ul className={styles['recognition__certified']}>
        <li className={styles['certified__tourcert']}>
          <Image
            src='/assets/images/homepage/TourCertSiegel.svg'
            width={170}
            height={170}
            alt={t('recognition.certifications.tourcert')}
          />
        </li>
        <li className={styles['certified__paz']}>
          <Image
            src='/assets/images/homepage/sello.png'
            width={170}
            height={170}
            alt={t('recognition.certifications.paz')}
          />
        </li>
      </ul>
      <p className={styles['recognition__bellow']}>
        {t('recognition.associations.title')}
      </p>
      <ul className={styles['recognition__association']}>
        <li className={styles['association']}>
          <Image
            src='/assets/other-brands/acotur.png'
            width={170}
            height={170}
            alt={t('recognition.associations.acotur')}
            quality={100}
          />
        </li>
        <li className={styles['association']}>
          <Image
            src='/assets/other-brands/atta-2.png'
            width={170}
            height={170}
            alt={t('recognition.associations.atta')}
            quality={100}
          />
        </li>
      </ul>
    </div>
  );
};

export default Recognition;
