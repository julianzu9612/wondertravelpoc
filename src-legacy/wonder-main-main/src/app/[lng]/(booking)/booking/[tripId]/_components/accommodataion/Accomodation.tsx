'use client';
import { useContext } from 'react';
import { BookingContext } from '../../../../bookingContext';
import styles from './Accommodation.module.scss';
import Image from 'next/image';
import { whatsappUrl } from '../../../../../../../constants';
import { useTranslation } from '@i18n-client';

const Accomodation = () => {
  const {
    lng,
    accommodations,
    setAccommodationSelected,
    accommodationSelected,
    selectedDate,
    infoPackage
  } = useContext(BookingContext);

  const { t } = useTranslation(lng, 'booking');

  if (accommodations?.length <= 0) {
    const message = `¡Hola Wonder! me puedes ayudar buscando alojamiento para esta feha ${selectedDate?.start_date} - ${selectedDate?.end_date} para el itinerario de ${infoPackage.title}`;
    
    return (
      <div className={styles['accommodation-empty']}>
        <h4>Upps..</h4>
        <p>Para esta fecha no contamos con acomodaciones disponibles</p>
        <p>Contactate con un asesor para ver si se libero alguno.</p>
        <a href={whatsappUrl(message, true)} target='__blank'>
          <button>Contactar asesor</button>
        </a>
      </div>
    );
  }

  return (
    <div className={styles['accommodation']}>
      <h2 className={styles['accommodation__title-main']}>
        {t('accommodation.title')}
      </h2>
      <form>
        <fieldset>
          {accommodations?.map((accommodation, ie) => (
            <label
              key={ie}
              className={`${styles['accommodation__item']} ${
                accommodation?.id ===
                accommodationSelected?.id
                  ? styles['selected']
                  : ''
              }`}
            >
              
              <Image
                src='/assets/icons/accomodations.svg'
                width={56}
                height={56}
                alt=''
                className={styles['item__img']}
              />
              <div className={styles['item__info']}>
                <div className={styles['info__label']}>
                  <p>{accommodation?.name}</p>
                  <p>{accommodation?.type}</p>
                </div>
              </div>
              <input
                onClick={() => setAccommodationSelected(accommodation)}
                defaultChecked={
                  accommodationSelected?.id ===
                  accommodation?.id
                }
                value={accommodation.id}
                className={styles['item__input']}
                type='radio'
                name='accommodation'
                id={`accomodation-${accommodation?.id}`}
              />
            </label>
          ))}
        </fieldset>
      </form>
    </div>
  );
};

export default Accomodation;
