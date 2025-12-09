import React from 'react';
// components
import Image from 'next/image';
// styles
import styles from './Footer.module.scss';
import { linkTermsAndConditions, whatsappUrl } from '../../constants';
import { useTranslation } from '../../app/i18n';

const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  const linkPolicies = `/${lng}/datapolicy`;

  return (
    <footer className={`${styles.footer}`}>
      <Image
        src='/assets/images/footerimage.png'
        alt=''
        width={undefined}
        height={undefined}
        loading='lazy'
        quality={40}
        fill
      />
      <div className={`${styles.footer_wrap} wonder-grid`}>
        <Image
          src='/assets/images/wonder-white.png'
          alt=''
          width={120}
          height={41}
          className={styles.footer__logo}
          loading='lazy'
          quality={40}
        />
        <div className={styles['footer__contact-trip']}>
          <h2 className={styles['footer__title']}>{t('Ready to travel')}</h2>
          <a
            aria-label='link para ir a página contacto'
            href={whatsappUrl('¡Hola wonder! ando buscando un poco de ayuda con mi proceso', true)}
            target='_blank'
            rel='noreferrer noopener'
            className='button'
          >
            {t('Contact Us')}
          </a>
        </div>

        <div className={styles['footer__contact-links']}>
          <div className='number'>
            <i>
              <Image
                src='/assets/icons/whatsapp.svg'
                alt=''
                width={14}
                height={14}
                loading='lazy'
                quality={50}
              />
            </i>
            <p>(+57) 314-433-5224</p>
          </div>
          <div className='mail'>
            <i>
              <Image
                src='/assets/icons/mail.svg'
                alt=''
                width={14}
                height={14}
                loading='lazy'
                quality={50}
              />
            </i>
            <p>travelbuddy@wondertravel.co</p>
          </div>
          <div className='address'>
            <i>
              <Image
                src='/assets/icons/location-white.svg'
                alt=''
                width={14}
                height={14}
                loading='lazy'
                quality={50}
              />
            </i>
            <p>Calle 98 # 10 - 32 - Bogotá Colombia</p>
          </div>
        </div>

        <div className={styles['footer__legal-container']}>
          <div className={styles['footer__legal']}>
            <a
              aria-label='link para ir a politicas de tratamiento de datos'
              href={linkPolicies}
            >
              {t('TreatmentPolicies')}
            </a>
            <a
              aria-label='terminos de servicio'
              href={linkTermsAndConditions}
              target='_blank'
              rel='noreferrer'
            >
              {t('TermsAndConditions')}
            </a>
          </div>
        </div>

        <div className={styles['footer__social']}>
          <div className='hashtag'>
            <p>{t('HastTag1')}</p>
            <p>{t('HastTag2')}</p>
            <p>{t('HastTag3')}</p>
            <p>{t('HastTag4')}</p>
          </div>
          <div className='social'>
            <a
              href='https://www.linkedin.com/company/wonder-travel-latam/'
              target='_blank'
              rel='noreferrer'
              title='Wonder LinkedIn'
              aria-label='Wonder LinkedIn'
            >
              <i>
                <Image
                  src='/assets/icons/social-linkedin.svg'
                  alt=''
                  width={24}
                  height={24}
                  loading='lazy'
                  quality={50}
                />
              </i>
            </a>
            <a
              aria-label='instagram link'
              href='https://www.instagram.com/wondertravel.co/?hl=es'
              target='_blank'
              rel='noreferrer'
            >
              <i>
                <Image
                  src='/assets/icons/insta.svg'
                  alt=''
                  width={24}
                  height={24}
                  loading='lazy'
                  quality={50}
                />
              </i>
            </a>
            <a
              aria-label='whatsapp'
              href={whatsappUrl('¡Hola wonder! ando buscando un poco de ayuda con mi proceso', true)}
              target='_blank'
              rel='noreferrer'
            >
              <i>
                <Image
                  src='/assets/icons/whatsapp.svg'
                  alt=''
                  width={24}
                  height={24}
                  loading='lazy'
                  quality={50}
                />
              </i>
            </a>
            <a
              aria-label='facebook'
              href='https://www.facebook.com/wondertravelatam/'
              target='_blank'
              rel='noreferrer'
            >
              <i>
                <Image
                  src='/assets/icons/facebook.svg'
                  alt=''
                  width={24}
                  height={24}
                  loading='lazy'
                  quality={50}
                />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
