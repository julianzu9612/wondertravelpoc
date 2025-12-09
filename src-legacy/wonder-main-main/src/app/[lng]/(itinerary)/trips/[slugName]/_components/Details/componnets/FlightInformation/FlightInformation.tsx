import useGetLanguaje from '@hooks/useGetLanguaje';
import { useTranslation } from '@i18n-server';
import Image from 'next/image';
import { IFlightInformation } from './FlightInformation.model';
import styles from './FlightInformation.module.scss';
const FlightInformation = async ({
  flights,
  detailVisa,
}: IFlightInformation) => {
  const lng = useGetLanguaje() + '';
  const { t: trans } = await useTranslation(lng, 'itinerary');
  const t = (value: string) =>
    trans(`details.${value}`, { defaultValue: value });
  const {
    domestic_flights_included,
    domestic_flights_not_included,
    international_flights_included,
    international_flights_not_included,
  } = flights;
  const existField = (value?: string) => value && value.length > 1;

  return (
    <section className={styles.detail}>
      <div className={styles['detail__title-list']}>
        <Image
          className={styles['title-list__img']}
          src={'/assets/icons/airPlane.png'}
          alt={t('flightInformation')}
          width={12}
          height={12}
        />
        <h2 className={styles['title-list__text']}>{t('flightInformation')}</h2>
      </div>
      <ul className={styles['detail__list']}>
        {domestic_flights_included && (
          <li className={styles['list__first']}>
            <b>{t('Domestic Flights')}</b>
            <br />
            {existField(domestic_flights_included) && (
              <>
                <b>{t('Included')}</b>
                <br />
                <p>{domestic_flights_included}</p>
              </>
            )}
            {existField(domestic_flights_not_included) && (
              <>
                <b>{t('Not included')}</b>
                <p>{domestic_flights_not_included}</p>
              </>
            )}
          </li>
        )}
        {international_flights_included && (
          <li>
            <b>{t('International Flights')}</b>
            <br />
            {existField(international_flights_included) && (
              <>
                <b>{t('Included')}</b>
                <br />
                <p>{international_flights_included}</p>
              </>
            )}
            {existField(international_flights_not_included) && (
              <>
                <b>{t('Not included')}</b>
                <p>{international_flights_not_included}</p>
              </>
            )}
          </li>
        )}
      </ul>
      {detailVisa}
    </section>
  );
};

export default FlightInformation;
