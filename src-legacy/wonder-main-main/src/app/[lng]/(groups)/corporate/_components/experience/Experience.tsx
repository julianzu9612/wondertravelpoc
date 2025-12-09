import React from 'react';
import styles from './Experience.module.scss';
import Image from 'next/image';
import AnimatedComponent from '../animate/Appear';
import { TFunction } from 'i18next';

const urlsBrandsUniversity = [
  {
    url: '/assets/other-brands/clients-brands/chicago.png',
    alt: 'Logo of chicago university',
  },
  {
    url: '/assets/other-brands/clients-brands/columbia-business-school.png',
    alt: 'Logo of columbia university',
  },
  {
    url: '/assets/other-brands/clients-brands/harvard.png',
    alt: 'Logo of harvard university',
  },
  {
    url: '/assets/other-brands/clients-brands/MIT.png',
    alt: 'Logo of MIT university',
  },
  {
    url: '/assets/other-brands/clients-brands/standford.png',
    alt: 'Logo of standford university',
  },
  {
    url: '/assets/other-brands/clients-brands/University_of_California-Berkeley.png',
    alt: 'Logo of Berkeley university',
  },
  {
    url: '/assets/other-brands/clients-brands/wharton_S_rev_rgb.png',
    alt: 'Logo of Wharton university',
  },
];

const urlsBrandsBusiness = [
  {
    url: '/assets/other-brands/clients-brands/ypo.png',
    alt: 'Logo of university',
  },
  {
    url: '/assets/other-brands/clients-brands/Zemoga.png',
    alt: 'Logo of university',
  },
  {
    url: '/assets/other-brands/clients-brands/columbia.png',
    alt: 'Logo of university',
  },
];



const Experience = async ({ t }: { t: TFunction<any, string> }) => {

  return (
    <div className={styles['experience']}>
      <h2 className={styles['experience__title']}>
        {t('experience.title')}
      </h2>
      <p className={styles['experience__desc-1']}>
        {t('experience.descUniversities')}
      </p>
      <div className={styles['experience__universities']}>
        {urlsBrandsUniversity.map((i, key) => (
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
        {t('experience.descBusinesses')}
      </p>
      <div className={styles['experience__business']}>
        {urlsBrandsBusiness.map((i, key) => (
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
