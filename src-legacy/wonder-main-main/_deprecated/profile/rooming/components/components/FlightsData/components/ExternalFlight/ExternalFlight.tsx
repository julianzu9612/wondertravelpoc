import React from 'react';
import CustomSelect from '../../../../DynamicForm/components/CustomSelect/CustomSelect';
import { CustomInput } from '../../../../DynamicForm/components/CustomInput/CustonInput';
import styles from '../../FlightsData.module.scss';
import { IOpt } from '../../../../DynamicForm/types';
import { useTranslation } from '@i18n-client';

enum FLIGHT_CHOICES {
  'YES' = 'Si',
  'NO' = 'No',
  'NON_REQUIRED' = 'Mi viaje no requiere vuelos',
}
export interface IFlightdata {
  buyed_with_wonder?: FLIGHT_CHOICES;
  origin_city: string;
  origin_date?: string;
  origin_flight_number: string;
  origin_airline: string;
  destination_city: string;
  destination_date?: string;
  destination_flight_number: string;
  destination_airline: string;
  revised: boolean;
}

const ExternalFlight = ({
  nationalitiesOrigin,
  citiesOrigin,
  nationalitiesDestination,
  citiesDestination,
}: {
  nationalitiesOrigin?: IOpt[],
  citiesOrigin?: IOpt[],
  nationalitiesDestination?: IOpt[],
  citiesDestination?: IOpt[]
}) => {
  const { t } = useTranslation(undefined, 'rooming');

  return (
    <>
      <h3 className={styles['flights-data__title-return']}>{t('title_flight_arrival')}</h3>
      <CustomSelect
        type='select'
        className={styles['flights-data__country']}
        options={nationalitiesOrigin}
        name='origin_country'
        placeholder={t('origin_country')}
      />

      {citiesOrigin && citiesOrigin.length > 0 && (
        <CustomSelect
          type='select'
          className={styles['flights-data__city']}
          options={citiesOrigin}
          name='origin_city'
          // label={t('origin_city')}
          placeholder={t('origin_city')}
        />
      )}

      <CustomInput
        className={styles['flights-data__date']}
        label={t('arrival_hour')}
        type='datetime-local'
        name='origin_date'
        placeholder={t('arrival_hour')}
      />

      <CustomInput
        className={styles['flights-data__airlane']}
        type='text'
        name='origin_airline'
        placeholder={t('airline')}
      />

      <CustomInput
        className={styles['flights-data__flight-number']}
        type='text'
        name='origin_flight_number'
        placeholder={t('flight_number')}
      />

      <h3 className={styles['flights-data__title-return']}>
        {t('title_flight_departure')}
      </h3>

      <CustomSelect
        type='select'
        className={styles['flights-data__country']}
        options={nationalitiesDestination}
        name='destination_country'
        placeholder={t('origin_country')}
      />
      {citiesDestination && citiesDestination?.length > 0 && (
        <CustomSelect
          type='select'
          className={styles['flights-data__city']}
          options={citiesDestination}
          name='destination_city'
          label={t('origin_city')}
        />
      )}

      <CustomInput
        label={t('departur_hour')}
        className={styles['flights-data__date']}
        type='datetime-local'
        name='destination_date'
        placeholder={t('departure_hour')}
      />

      <CustomInput
        className={styles['flights-data__airlane']}
        type='text'
        name='destination_airline'
        placeholder={t('airline')}
      />

      <CustomInput
        className={styles['flights-data__flight-number']}
        type='text'
        name='destination_flight_number'
        placeholder={t('Flight number')}
      />
    </>
  );
};

export default ExternalFlight;
