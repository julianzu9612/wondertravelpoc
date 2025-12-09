import { useContext } from 'react';
import { BookingContext } from '../../../../bookingContext';
import styles from './Summary.module.scss';
import { duePaymentDate, formatSingleDateRange } from '../../../../../(itinerary)/trips/[slugName]/_components/Dates/utils/formateDAteRange';
import { useTranslation } from '@i18n-client';

const SummaryBooking = () => {
  const {
    lng,
    selectedDate,
    accommodationSelected,
    userSummary,
  } = useContext(BookingContext);

  const {t} = useTranslation(lng, 'booking');

  return (
    <div className={styles['summary']}>
      <h3>{t('summary-title', 'Resumen')}</h3>
      {userSummary?.length > 0 && (
        <>
          <p className={styles['summary__title']}>
            {t('summary.total-travelers', 'Total viajeros')}
          </p>
          {userSummary.map((i, key) => (
            <p className={styles['summary__users']} key={key}>
              {i?.value} {t(i?.label)}
            </p>
          ))}
        </>
      )}

      {selectedDate?.start_date && (
        <>
          <p className={styles['summary__title']}>
            {t('titleDates', 'Fechas de nuestro viaje:')}
          </p>
          <p className={styles['summary__start-date']}>
            {t('from', 'desde')}:{' '}
            <span>{formatSingleDateRange(selectedDate?.start_date, lng)}</span>{' '}
          </p>
          <p className={styles['summary__end-date']}>
            {t('to', 'hasta')}:{' '}
            <span>{formatSingleDateRange(selectedDate?.end_date, lng)}</span>
          </p>
          <p className={styles['summary__title']}>
            {t('max-date-payment', 'fecha Máxima total pago')}:
          </p>
          <p className={styles['summary__due-date']}>
            {duePaymentDate(selectedDate?.start_date, lng)}
          </p>
        </>
      )}

      {accommodationSelected?.name && (
        <>
          <p className={styles['summary__title']}>{t('summary.accommodation', 'Acomodación')}</p>
          <p className={styles['summary__accomodation']}>
            {accommodationSelected?.name}
          </p>
        </>
      )}
    </div>
  );
};

export default SummaryBooking;
