import React from 'react';
import styles from './Experience.module.scss';
import Image from 'next/image';
import AnimatedComponent from '../animate/Appear';
import { TFunction } from 'i18next';

const getUrlsBrandsUniversity = (t: TFunction<any, string>) => [
  {
    url: '/assets/other-brands/clients-brands/chicago.png',
    alt: t('experience.universities.chicago'),
  },
  {
    url: '/assets/other-brands/clients-brands/columbia-business-school.png',
    alt: t('experience.universities.columbia'),
  },
  {
    url: '/assets/other-brands/clients-brands/harvard.png',
    alt: t('experience.universities.harvard'),
  },
  {
    url: '/assets/other-brands/clients-brands/MIT.png',
    alt: t('experience.universities.mit'),
  },
  {
    url: '/assets/other-brands/clients-brands/standford.png',
    alt: t('experience.universities.stanford'),
  },
  {
    url: '/assets/other-brands/clients-brands/University_of_California-Berkeley.png',
    alt: t('experience.universities.berkeley'),
  },
  {
    url: '/assets/other-brands/clients-brands/wharton_S_rev_rgb.png',
    alt: t('experience.universities.wharton'),
  },
];

const getUrlsBrandsBusiness = (t: TFunction<any, string>) => [
  {
    url: '/assets/other-brands/clients-brands/ypo.png',
    alt: t('experience.businesses.ypo'),
  },
  {
    url: '/assets/other-brands/clients-brands/Zemoga.png',
    alt: t('experience.businesses.zemoga'),
  },
  {
    url: '/assets/other-brands/clients-brands/columbia.png',
    alt: t('experience.businesses.columbia'),
  },
];

const Experience = ({ t }: { t: TFunction<any, string> }) => {
  const universities = getUrlsBrandsUniversity(t);
  const businesses = getUrlsBrandsBusiness(t);

  return (
    <div className={styles['experience']}>
      <h2 className={styles['experience__title']}>{t('experience.title')}</h2>
      <p className={styles['experience__desc-1']}>
        {t('experience.universitiesDescription')}
      </p>
      <div className={styles['experience__universities']}>
        {universities.map((i, key) => (
          <AnimatedComponent key={key}>
            <Image
              quality={100}
              src={i.url}
              alt={i.alt}
              width={150}
              height={70}
            />
          </AnimatedComponent>
        ))}
      </div>
      <p className={styles['experience__desc-2']}>
        {t('experience.businessesDescription')}
      </p>
      <div className={styles['experience__business']}>
        {businesses.map((i, key) => (
          <AnimatedComponent key={key}>
            <Image
              quality={100}
              src={i.url}
              alt={i.alt}
              width={120}
              height={70}
            />
          </AnimatedComponent>
        ))}
      </div>
    </div>
  );
};

export default Experience;
