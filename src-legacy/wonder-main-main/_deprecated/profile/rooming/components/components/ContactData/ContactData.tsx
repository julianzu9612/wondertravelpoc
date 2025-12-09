'use client';
import { useEffect, useState } from 'react';
// styles
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactDataSchema } from './validations';
import { CustomInput } from '../../DynamicForm/components/CustomInput/CustonInput';
import { getDataRooming } from '@services/rooming/travellers/getDataRooming';
import patchTravelers from '@services/rooming/travellers/patchTravelers';
import styles from './ContactData.module.scss';
import { IOpt } from '../../DynamicForm/types';
import { getCountries } from '@services/profile/countries/getCountries';
import { getPhoneCode } from '@services/profile/phoneCode/getPhoneCode';
import { getCities } from '@services/profile/cities/getCities';
import { ICommonProps } from '../../../[booking_id]/steps/common';
import { useTranslation } from '@i18n-client';
import { CustomSelect } from '../../DynamicForm/components/CustomSelect/CustomSelect';

export interface IContactdata {
  email: string | undefined;
  country_code: string | undefined;
  phone: string | undefined;
  phone_code: string | undefined;
  residential_country: string | null | undefined;
  city: string | undefined;
  address: string | undefined;
}

const ContactData = ({
  bookingId,
  userId,
  onNexButton,
  onPrevButton,
}: ICommonProps) => {
  const [phoneCode, setPhoneCode] = useState<IOpt[]>();
  const [nationalities, setNationalities] = useState<IOpt[]>();
  const [cities, setCities] = useState<IOpt[]>();
  const [citiesDisabled, setCitiesDisabled] = useState(true);

  const formMethods = useForm({
    resolver: yupResolver(contactDataSchema),
    defaultValues: async () => {
      const rooming = await getDataRooming<any>({
        section: 'contact_data',
        bookingId: bookingId,
        userId: userId,
      });
      rooming.phone_code = rooming?.phone?.slice(0, -10);
      rooming.phone = rooming?.phone?.slice(-10);
      return rooming;
    },
  });

  useEffect(() => {
    (async () => {
      const phoneCodeTypes = await getPhoneCode();
      const phoneCodeConvertToSelect: IOpt[] = phoneCodeTypes?.map((i) => ({
        desc: `+${i.country_code} ${i.region}`,
        value: `+${i.country_code}`,
      }));

      setPhoneCode(phoneCodeConvertToSelect);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const NationalitiesTypes = await getCountries();
      const nationalitiesConvertToSelect: IOpt[] = NationalitiesTypes?.map(
        (i) => ({
          desc: i.name,
          value: i.code,
        })
      );
      setNationalities(nationalitiesConvertToSelect);

      const countrySelected = formMethods?.watch('residential_country');
      const citiesTypes = await getCities(countrySelected);

      if ('city_list' in citiesTypes) {
        const citiesToSelect = citiesTypes?.city_list?.map((city) => ({
          desc: city,
          value: city,
        }));

        setCities(citiesToSelect);
        setCitiesDisabled(!(countrySelected !== ''));
      }
    })();
  }, [formMethods?.watch('residential_country')]);

  const onSubmit = async (data: IContactdata & { revised: boolean }) => {
    if (data.phone && data.phone_code) {
      data.phone = `${data.phone_code}${data.phone}`;
    }

    delete data.phone_code;

    data.revised = true;

    const patchData = await patchTravelers(
      data,
      'contact_data',
      userId,
      bookingId
    );
    if (patchData instanceof Response && patchData?.ok) onNexButton();
  };

  const onClickPrev = () => {
    onPrevButton();
  };
  const { t } = useTranslation(undefined, 'rooming');
  const trans = (value: string) => t('contact_data.' + value);
  return (
    <div>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className={styles['contact-data']}
        >
          <CustomInput
            className={`${formMethods.formState.errors.email && 'error'} ${
              styles['contact-data__email']
            }`}
            type='text'
            name='email'
            placeholder={trans('email')}
          />

          <CustomSelect
            type='select'
            className={styles['contact-data__country-residence']}
            options={nationalities}
            name='residential_country'
          />

          {cities && (
            <CustomSelect
              disabled={citiesDisabled}
              type='select'
              className={styles['contact-data__city']}
              options={cities}
              name='city'
            />
          )}

          <CustomInput
            className={styles['contact-data__address']}
            type='text'
            name='address'
            placeholder={trans('address')}
          />

          <CustomSelect
            type='select'
            className={styles['contact-data__phone-code']}
            options={phoneCode}
            name='phone_code'
          />

          <CustomInput
            className={styles['contact-data__phone-number']}
            type='number'
            name='phone'
            placeholder={trans('phone')}
          />

          <div className={styles['contact-data__submit']}>
            <button type='button' onClick={onClickPrev} className='secondary'>
              {t('back')}
            </button>
            <button>{t('send')}</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactData;
