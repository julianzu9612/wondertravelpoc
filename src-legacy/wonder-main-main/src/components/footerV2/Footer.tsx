import React from 'react';
// components
import Image from 'next/image';
// styles
import styles from './Footer.module.scss';
import { useTranslation } from '@i18n-server';
import { linkTermsAndConditions, whatsappUrl, sostenibilityPoliticsLink } from '../../constants';
import RedirectIcon from './_components/RedirectIcon';
import IconText from './_components/IconText/IconText';
import Link from 'next/link';

const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'translation');
  const linkPolicies = `/${lng}/datapolicy`;
  const linksPolicies = (
    <>
      <Link aria-label={t('TreatmentPolicies')} role='link' href={linkPolicies}>
        {t('TreatmentPolicies')}
      </Link>
      <Link
        aria-label={t('TermsAndConditions')}
        role='link'
        href={linkTermsAndConditions}
        target='_blank'
        rel='noreferrer'
      >
        {t('TermsAndConditions')}
      </Link>
      <Link
        aria-label={t('sustainabilityPolicies')}
        role='link'
        href={sostenibilityPoliticsLink}
        target='_blank'
        rel='noreferrer'
      >
        {t('sustainabilityPolicies')}
      </Link>
    </>
  );
  return (
    <footer className={`${styles.footer}`}>
      <picture className={styles['footer__bkg-img']}>
        <source
          media='(min-width: 800px)'
          srcSet='/assets/images/footerimageDesktop.webp'
        />
        <Image
          src={'/assets/images/footerimage.webp'}
          alt='bkg footer'
          fill
          blurDataURL='/assets/images/footerDesktopBlur.webp'
          sizes='(max-width: 768px) 33vw, 100vw'
          quality={70}
          placeholder='blur'
          style={{ objectFit: 'cover' }}
        />
        <source />
      </picture>
      <div className={`${styles.footer__wrap} wonder-grid`}>
        <div className={styles.wrap__logo}>
          <Image
            src='/assets/images/wonder-white2.png'
            alt='logo wonder'
            width={247}
            height={84}
            className={styles.footer__logo}
            quality={40}
          />
        </div>

        <div className={styles.wrap__contact}>
          <h2 className={styles.contact__title}>{t('Ready to travel')}</h2>
          <a
            aria-label={t('Contact Us')}
            href={whatsappUrl(
              '¡Hola wonder! ando buscando un poco de ayuda con mi proceso',
              true
            )}
            target='_blank'
            rel='noreferrer noopener'
          >
            <button>{t('Contact Us')}</button>
          </a>
          <div className={styles['contact__legal-container']}>
            {linksPolicies}
          </div>
        </div>
        <div className={styles.wrap__trip}>
          <div className={styles.trip__links}>
            <h2 className={styles.links__title}>{t('Contact information')}</h2>
            <IconText
              alt='Whatsapp'
              text='+57 311 515 0177'
              img='/assets/icons/whatsapp.png'
              size={25}
            />
            <IconText
              alt='Correo'
              text='travelbuddy@wondertravel.co'
              img='/assets/icons/mail.svg'
            />
            <IconText
              alt='Direction'
              text='Calle 98 # 10 - 32 - Bogotá Colombia'
              img='/assets/icons/location-white.svg'
            />
          </div>
          <div className={styles['trip__legal-container']}>{linksPolicies}</div>
          <div className={styles.trip__social}>
            <RedirectIcon
              href='https://www.linkedin.com/company/wonder-travel-latam/'
              title='Wonder LinkedIn'
              aria-label='Wonder LinkedIn'
              img='/assets/icons/linkedin.svg'
              alt='Linkedin'
            />
            <RedirectIcon
              aria-label='instagram link'
              href='https://www.instagram.com/wondertravel.co/?hl=es'
              img='/assets/icons/instagram.svg'
              alt='Instagram'
            />
            <RedirectIcon
              aria-label='whatsapp'
              href={whatsappUrl(
                '¡Hola wonder! ando buscando un poco de ayuda con mi proceso', true
              )}
              img='/assets/icons/whatsapp.svg'
              alt='whatsapp'
            />
            <RedirectIcon
              aria-label='facebook'
              href='https://www.facebook.com/wondertravelatam/'
              img='/assets/icons/facebook.svg'
              alt='facebook'
            />
            <RedirectIcon
              aria-label='youtube'
              href='https://www.youtube.com/@Wondertravelco'
              img='/assets/icons/youtube.svg'
              alt='youtube'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
