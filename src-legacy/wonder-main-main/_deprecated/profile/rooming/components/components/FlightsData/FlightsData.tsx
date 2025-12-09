'use client';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getDataRooming } from '@services/rooming/travellers/getDataRooming';
import { CustomRadio } from '../../DynamicForm/components/CustomRadio/CustomRadio';
import { flightDataSchema } from './validations';
import { getCountries } from '@services/profile/countries/getCountries';
import { IOpt } from '../../DynamicForm/types';
import styles from './FlightsData.module.scss';
import { getCities } from '@services/profile/cities/getCities';
import FlightWonder from './components/FlightWonder/FlightWonder';
import ExternalFlight from './components/ExternalFlight/ExternalFlight';
import patchTravelers from '@services/rooming/travellers/patchTravelers';
import { ICommonProps } from '../../../[booking_id]/steps/common';
import { useTranslation } from '@i18n-client';

const FlightsData = ({
  bookingId,
  userId,
  onNexButton,
  onPrevButton,
}: ICommonProps) => {
  const formMethods = useForm({
    resolver: yupResolver(flightDataSchema),
    defaultValues: async () =>
      await getDataRooming<any>({
        section: 'flight_data',
        bookingId: bookingId,
        userId: userId,
      }),
  });

  const [nationalitiesOrigin, setNationalitiesOrigin] = useState<IOpt[]>();
  const [nationalitiesDestination, setNationalitiesDestination] =
    useState<IOpt[]>();
  const [citiesOrigin, setCitiesOrigin] = useState<IOpt[]>([]);
  const [citiesDestination, setCitiesDestination] = useState<IOpt[]>([]);

  useEffect(() => {
    (async () => {
      const NationalitiesTypes = await getCountries();
      const nationalitiesConvertToSelect: IOpt[] = NationalitiesTypes?.map(
        (i) => ({
          desc: i.name,
          value: i.code,
        })
      );
      setNationalitiesDestination(nationalitiesConvertToSelect);

      const countrySelected = formMethods?.watch('destination_country');
      const citiesTypes = await getCities(countrySelected);

      if ('city_list' in citiesTypes) {
        const citiesToSelect = citiesTypes?.city_list?.map((city) => ({
          desc: city,
          value: city,
        }));

        setCitiesDestination(citiesToSelect);
      }
    })();
  }, [formMethods?.watch('destination_country')]);

  useEffect(() => {
    (async () => {
      const NationalitiesTypes = await getCountries();
      const nationalitiesConvertToSelect: IOpt[] = NationalitiesTypes?.map(
        (i) => ({
          desc: i.name,
          value: i.code,
        })
      );
      setNationalitiesOrigin(nationalitiesConvertToSelect);

      const countrySelected = formMethods?.watch('origin_country');
      const citiesTypes = await getCities(countrySelected);

      if ('city_list' in citiesTypes) {
        const citiesToSelect = citiesTypes?.city_list?.map((city) => ({
          desc: city,
          value: city,
        }));

        setCitiesOrigin(citiesToSelect);
      }
    })();
  }, [formMethods?.watch('origin_country')]);

  const nameMainSelect = 'buyed_with_wonder';

  const renderStepFlight = () => {
    switch (formMethods.watch(nameMainSelect)) {
      case 'YES':
        return <FlightWonder infoFlights={formMethods.getValues()} />;
      case 'NO':
        return (
          <FormProvider {...formMethods}>
            <ExternalFlight
              nationalitiesOrigin={nationalitiesOrigin}
              citiesOrigin={citiesOrigin}
              nationalitiesDestination={nationalitiesDestination}
              citiesDestination={citiesDestination}
            />
          </FormProvider>
        );
      case 'without-fly':
        return <p>not required</p>;
      default:
        return;
    }
  };

  const onSubmit = async (
    data: keyof typeof flightDataSchema & { revised: boolean }
  ) => {
    data.revised = true;

    const patchData = await patchTravelers(
      data,
      'flight_data',
      userId,
      bookingId
    );
    if (patchData instanceof Response && patchData?.ok) onNexButton();
  };

  const onClickPrev = () => {
    onPrevButton();
  };
  const { t } = useTranslation(undefined, 'rooming');
  const trans = (value: string) => t('flight_data.' + value);
  return (
    <div>
      <FormProvider {...formMethods}>
        <form
          className={styles['flights-data']}
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          <div className={styles['flights-data__question']}>
            <p className={styles['flights-data__description']}>
              {trans('buy')}
            </p>
            <CustomRadio
              type='checkbox'
              name='buyed_with_wonder'
              options={[
                {
                  desc: trans('buyed_with_us.yes'),
                  value: 'YES',
                },
                {
                  desc: trans('buyed_with_us.no'),
                  value: 'NO',
                },
                {
                  desc: trans('buyed_with_us.flight_no_requires'),
                  value: 'NON_REQUIRED',
                },
              ]}
            />
          </div>

          {renderStepFlight()}
          <div className={styles['flights-data__submit']}>
            <button type='button' onClick={onClickPrev} className='secondary'>
              {t('back')}
            </button>
            <button>{t('finish_progress')}</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FlightsData;
