import dayjs from 'dayjs';
import 'dayjs/locale/es';
import React from 'react';
import styles from './FlightWonder.module.scss';
import { IFlightdata } from '../ExternalFlight/ExternalFlight';
import { useTranslation } from '@i18n-client';
import { useParams } from 'next/navigation';

const FlightWonder = ({ infoFlights }: { infoFlights: IFlightdata }) => {
  const { t } = useTranslation(undefined, 'rooming');
  const lng = useParams()?.lng as string;

  const formatDate = (date?: string) => {
    if (date === undefined) return '';
    return dayjs(date).locale(lng).format('HH:MM, d-MMM-YYYY ');
  };

  return (
    <div className={styles['flight-wonder']}>
      <h3>{t('title_flight_arrival')}</h3>
      <table>
        <tr>
          <td>{t('flight_number')}</td>
          <td>{infoFlights?.origin_flight_number}</td>
        </tr>
        <tr>
          <td>{t('airline')}</td>
          <td>{infoFlights?.origin_airline}</td>
        </tr>
        <tr>
          <td>{t('from_to')}</td>
          <td>{infoFlights?.origin_city}</td>
        </tr>
        <tr>
          <td>{t('arrival_hour')}</td>
          <td>
            {/* {dayjs(infoFlights?.origin_date).format('HH:MM ddd-MMM-YYYY ')} */}
            {infoFlights?.destination_date &&
              formatDate(infoFlights?.origin_date)}{' '}
            ({t('local_hour_arrive')})
          </td>
        </tr>
      </table>
      <h3>{t('title_flight_departure')}</h3>
      <table>
        <tr>
          <td>{t('flight_number')}</td>
          <td>{infoFlights?.destination_flight_number}</td>
        </tr>
        <tr>
          <td>{t('airline')}</td>
          <td>{infoFlights?.destination_airline}</td>
        </tr>
        <tr>
          <td>{t('from_to')}</td>
          <td>{infoFlights?.destination_city}</td>
        </tr>
        <tr>
          <td>{t('departur_hour')}</td>
          <td>
            {infoFlights?.destination_date &&
              formatDate(infoFlights?.destination_date)}{' '}
            ({t('local_hour_arrive')})
          </td>
        </tr>
      </table>
    </div>
  );
};

export default FlightWonder;
