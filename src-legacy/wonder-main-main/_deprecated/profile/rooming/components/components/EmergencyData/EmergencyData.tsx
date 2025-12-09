'use client';
import { useEffect, useState } from 'react';
// styles
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactDataSchema } from './validations';
import { CustomInput } from '../../DynamicForm/components/CustomInput/CustonInput';
import { getDataRooming } from '@services/rooming/travellers/getDataRooming';
import patchTravelers from '@services/rooming/travellers/patchTravelers';
import styles from './EmergencyData.module.scss';
import { IOpt } from '../../DynamicForm/types';
import { getPhoneCode } from '@services/profile/phoneCode/getPhoneCode';
import { ICommonProps } from '../../../[booking_id]/steps/common';
import { useTranslation } from '@i18n-client';
import { CustomSelect } from '../../DynamicForm/components/CustomSelect/CustomSelect';

export interface IEmergencydata {
  first_name: string;
  last_name: string;
  relationship: string;
  phone?: string | undefined;
  phone_code?: string | undefined;
  country_code?: string | undefined;
}

const EmergencyData = ({
  bookingId,
  userId,
  onNexButton,
  onPrevButton,
}: ICommonProps) => {
  const [phoneCode, setPhoneCode] = useState<IOpt[]>();

  const formMethods = useForm({
    resolver: yupResolver(contactDataSchema),
    defaultValues: async () => {
      const rooming = await getDataRooming<any>({
        section: 'emergency_data',
        bookingId: bookingId,
        userId: userId,
      });

      if (rooming) {
        rooming.phone_code = rooming?.phone?.slice(0, -10);
        rooming.phone = rooming?.phone?.slice(-10);
        return rooming;
      }
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

  const onSubmit = async (data: IEmergencydata & { revised: boolean }) => {
    if (data.phone) data.phone = `${data.phone_code}${data.phone}`;
    delete data.phone_code;
    data.revised = true;
    const response = await patchTravelers(
      data,
      'emergency_data',
      userId,
      bookingId
    );
    if (response instanceof Response && response.ok) onNexButton();
  };

  const onClickPrev = () => {
    onPrevButton();
  };
  const { t } = useTranslation(undefined, 'rooming');
  const trans = (value: string) => t('emergency.' + value);

  return (
    <div>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className={styles['emergency-data']}
        >
          <CustomInput
            className={`${
              formMethods.formState.errors.first_name && 'errors'
            } ${styles['emergency-data__first-name']}`}
            type='text'
            name='first_name'
            placeholder={trans('name')}
          />
          <CustomInput
            className={`${formMethods.formState.errors.last_name && 'errors'} ${
              styles['emergency-data__last-name']
            }`}
            type='text'
            name='last_name'
            placeholder={trans('last_name')}
          />
          <CustomInput
            className={`${
              formMethods.formState.errors.relationship && 'errors'
            } ${styles['emergency-data__relationship']}`}
            type='text'
            name='relationship'
            placeholder={trans('relation_ship')}
          />

          <CustomSelect
            type='select'
            className={styles['emergency-data__phone-code']}
            options={phoneCode}
            name='phone_code'
          />

          <CustomInput
            className={styles['emergency-data__phone-number']}
            type='number'
            name='phone'
            placeholder={trans('phone')}
          />

          <div className={styles['emergency-data__submit']}>
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

export default EmergencyData;
