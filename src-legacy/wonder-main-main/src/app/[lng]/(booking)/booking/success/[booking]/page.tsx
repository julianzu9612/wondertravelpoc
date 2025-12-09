'use client';
import React from 'react';
// enhacer
import Image from 'next/image';
// styles
import styles from './SuccessBook.module.scss';
// components
import { useTranslation } from '@i18n-client';
import copyToClipboard from '@utils/copyToClipboard';

const SuccessPage = ({
  params: { booking, lng },
}: {
  params: { booking: string; lng: string };
}) => {
  const { t } = useTranslation(lng, 'booking');

  return (
    <div className={styles['success-booking']}>
      <div className={styles['success-booking__message']}>
        <h1> {t('title_success', '¡Pago En Proceso!')}</h1>
        <p className={styles['message__description']}>
          {t(
            'success.description_success',
            'Te contactaremos cuando validemos tu pago'
          )}
        </p>
        <Image
          className={styles['message__image']}
          src='/assets/images/booking/backpack.png'
          width={256}
          height={344}
          alt=''
          quality={100}
        />
        <p>{t('success.bags', 'Ve alistando tus maletas')}</p>
      </div>

      <div className={styles['success-booking__link-to-form']}>
        <Image
          className={styles['link-to-form__alert']}
          src='/assets/icons/booking/ring-bell.svg'
          width={40}
          height={40}
          alt=''
        />
        <h2>{t('success.important', '¡importante!')}</h2>
        <p className={styles['text']}>
          {t(
            'success.description-important-section',
            'Si viajas con alguien más completa los datos de tus acompañante en el siguiente link:'
          )}
        </p>
        <a
          href='https://wonderer.paperform.co/'
          target='_blank'
          rel='noreferrer'
        >
          <button>
            {t('success.cts-complete-data', 'Ir a completar los datos')}
          </button>
        </a>
      </div>

      <div className={styles['success-booking__booking-number']}>
        <h2 className={styles['success-booking__title']}>
          {t('subtitle_success', 'Número de booking')}:
        </h2>
        <p className={styles['text']}>
          {t(
            'success.save-number-booking',
            'Guarda tu número de booking para hacer seguimiento de tu viaje'
          )}
        </p>
        <p className={styles['id-bookint__data']}>{booking}</p>
        <button
          onClick={() =>
            copyToClipboard(`Número de booking en Wonder: ${booking}`)
          }
          className='secondary'
        >
          {t('success.copy-number', 'Copiar número de booking')}
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
