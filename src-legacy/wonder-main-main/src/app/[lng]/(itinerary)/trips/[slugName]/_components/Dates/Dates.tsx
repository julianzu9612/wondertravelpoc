//utilities
import { useTranslation } from '@i18n-server';
//interfaces
import { IDatesModel } from './Dates.model';
//services
//Import styles
import styles from './Dates.module.scss';
//components
import Image from 'next/image';
import useGetLanguage from '@hooks/useGetLanguaje';
// import BtnClickWeTravel from '@components/btnClickWeTravel/btnClickWeTravel';
// utils
import formatDateRange from './utils/formateDAteRange';
import { getCurrencyCookie } from '../../../../../../actions';
import { whatsappUrl } from '../../../../../../../constants';
import Link from 'next/link';

const Dates = async ({
  datesItinerary,
  tripName,
  newItinerary,
}: IDatesModel) => {
  const lng = useGetLanguage();
  const { t } = await useTranslation(lng, 'itinerary');
  const currency = await getCurrencyCookie();

  if (datesItinerary?.length === 0) {
    return <></>;
  }

  return (
    <div className={styles.dates}>
      <div className={styles.dates__title}>
        <Image
          alt='calendar'
          src={'/assets/icons/calendarBlack-icon.svg'}
          width={20}
          height={20}
        />
        <h1 className={styles['dates__title-txt']}>{t('dates')}</h1>
      </div>

      <ul className={styles.dates__list}>
        {datesItinerary?.map(
          ({
            end_date,
            start_date,
            id,
            price,
            discount,
            // wetravel_uuid,
            price_discount,
          }) => {
            const dateFormat: string = formatDateRange(
              start_date,
              end_date,
              lng
            );
            return (
              <li key={id} className={styles['item']}>
                <p className={styles['item__text-date']}>{dateFormat}</p>
                {discount > 0 && (
                  <p className={styles['item__text-without-discount']}>
                    {currency} {price}
                  </p>
                )}
                <p className={styles['item__text-price']}>
                  {currency} {discount > 0 ? price_discount : price}
                </p>
                <p className={styles['item__pp']}>{t('per-person')}</p>
                {/* 
                  <BtnClickWeTravel
                    className={styles['item__btn']}
                    uuid={wetravel_uuid}
                    lng={lng}
                    type='secondary--small'
                /> */}
                {newItinerary && (
                  <div className={styles['item__btn']}>
                    <Link
                      href={`/${lng}/booking/${newItinerary}?start-date=${start_date}&end-date=${end_date}`}
                    >
                      <button className='secondary'>{t('bookNow', 'Reservar Ahora')}</button>
                    </Link>
                  </div>
                )}

                {discount > 0 && (
                  <div className={styles['item__ribbon']}>{t('Deals')}</div>
                )}
              </li>
            );
          }
        )}
      </ul>
      <p className={styles['dates__perfect-date-title']}>
        {t('perfect-date-title')}
      </p>
      <p className={styles['dates__perfect-date-text']}>
        {t('perfect-date-text')}
      </p>
      <a
        href={whatsappUrl(
          `no encontré la fecha que deseo en ${tripName} me puedes ayudar buscando una`,
          true
        )}
      >
        <button className={styles['']}>
          {t('cardPrice.Chat with an agent')}
        </button>
      </a>
    </div>
  );
};

export default Dates;
