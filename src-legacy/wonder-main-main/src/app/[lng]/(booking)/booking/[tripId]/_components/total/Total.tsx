import { useContext } from 'react';
import { BookingContext } from '../../../../bookingContext';
import SubmitBooking from '../submitBooking/SubmitBooking';
import styles from './Total.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@i18n-client';
import { useRouter } from 'next/navigation';

const Total = () => {
  const {
    resumeBooking,
    prevNextSteps,
    activeStep,
    amountSelected,
    lng,
    tripId,
    submitForm,
    submitFormListTravelers,
  } = useContext(BookingContext);

  const { t } = useTranslation(lng, 'booking');
  const router = useRouter();

  const nextStep = () => {
    if (activeStep === 'informacion-contacto') submitForm();
    else if (activeStep === 'informacion-viajeros') submitFormListTravelers();
    else router.push(`/${lng}/booking/${tripId}/${prevNextSteps?.nextStep?.url}`);
  };

  return (
    <div className={styles['total']}>
      <div className={styles['total__value']}>
        <p className={styles['summary__total-subtitle']}>{t('total.total')}:</p>
        <p className={styles['summary__total']}>${resumeBooking?.total ?? 0}</p>
      </div>
      <div className={styles['total__value']}>
        <p className={styles['summary__total-subtitle']}>
          {t('total.total-payment')}:
        </p>
        <p className={styles['summary__total']}>
          ${amountSelected?.length != 0 ? amountSelected : 0}
        </p>
      </div>

      {activeStep === 'informacion-tarjeta' ? (
        <>
          <Link
            href={`/${lng}/booking/${tripId}/${prevNextSteps?.prevStep?.url}`}
            className={`${styles['total__button-prev']}`}
          >
            <button className='secondary'>
              <i>
                <Image
                  width={16}
                  height={16}
                  src={'/assets/icons/arrow-down.svg'}
                  alt=''
                />
              </i>
              {prevNextSteps?.prevStep?.label[lng as 'es' | 'en']}
              <i>
                <Image
                  width={16}
                  height={16}
                  src={`/assets/icons/booking/${
                    prevNextSteps?.prevStep?.icon ?? 'bed.svg'
                  }`}
                  alt=''
                />
              </i>
            </button>
          </Link>
          <SubmitBooking className={styles['total__button-pay']} />
        </>
      ) : (
        <>
          {activeStep !== 'viajeros' && (
            <Link
              href={`/${lng}/booking/${tripId}/${prevNextSteps?.prevStep?.url}`}
              className={`${styles['total__button-prev']}`}
            >
              <button className='secondary'>
                <i>
                  <Image
                    width={16}
                    height={16}
                    src={'/assets/icons/arrow-down.svg'}
                    alt=''
                  />
                </i>
                {prevNextSteps?.prevStep?.label[lng as 'es' | 'en']}
                <i>
                  <Image
                    width={16}
                    height={16}
                    src={`/assets/icons/booking/${
                      prevNextSteps?.prevStep?.icon ?? 'bed.svg'
                    }`}
                    alt=''
                  />
                </i>
              </button>
            </Link>
          )}
          
          <button
            onClick={nextStep}
            className={`${styles['total__button']}`}
          >
            <i>
              <Image
                width={16}
                height={16}
                src={'/assets/icons/arrow-down.svg'}
                alt=''
              />
            </i>

            {prevNextSteps?.nextStep?.label[lng as 'es' | 'en']}
            <i>
              <Image
                width={16}
                height={16}
                src={`/assets/icons/booking/${
                  prevNextSteps?.nextStep?.icon ?? 'bed.svg'
                }`}
                alt=''
              />
            </i>
          </button>
        </>
      )}
    </div>
  );
};

export default Total;
