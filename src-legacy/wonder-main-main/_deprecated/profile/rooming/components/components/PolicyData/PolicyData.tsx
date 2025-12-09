'use client';
import { useEffect, useState } from 'react';
// styles
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { policyDataSchema } from './validations';
import { CustomInput } from '../../DynamicForm/components/CustomInput/CustonInput';
import { getDataRooming } from '@services/rooming/travellers/getDataRooming';
import patchTravelers from '@services/rooming/travellers/patchTravelers';
import styles from './PolicyData.module.scss';
import { IOpt } from '../../DynamicForm/types';
import { getPhoneCode } from '@services/profile/phoneCode/getPhoneCode';
import dayjs from 'dayjs';
import { ICommonProps } from '../../../[booking_id]/steps/common';
import { useTranslation } from '@i18n-client';
import { CustomSelect } from '../../DynamicForm/components/CustomSelect/CustomSelect';

export interface Policydata {
  start_date?: string;
  expiration_date?: string;
  number: string;
  supplier: string;
  phone: string;
  phone_code?: string;
  revised: boolean;
}

const PolicyData = ({
  bookingId,
  userId,
  onNexButton,
  onPrevButton,
}: ICommonProps) => {
  const [phoneCode, setPhoneCode] = useState<IOpt[]>();

  const formMethods = useForm({
    resolver: yupResolver(policyDataSchema),
    defaultValues: async () => {
      const rooming = await getDataRooming<any>({
        section: 'policy_data',
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

  const onSubmit = async (data: Policydata) => {
    data.expiration_date = dayjs(data.expiration_date).format('YYYY-MM-DD');
    data.start_date = dayjs(data.start_date).format('YYYY-MM-DD');

    if (data.phone) data.phone = `${data.phone_code}${data.phone}`;
    delete data.phone_code;
    data.revised = true;
    const response = await patchTravelers(
      data,
      'policy_data',
      userId,
      bookingId
    );

    if (response instanceof Response && response?.ok) onNexButton();
  };

  const onClickPrev = () => {
    onPrevButton();
  };
  const { t } = useTranslation(undefined, 'rooming');
  const trans = (value: string) => t('policy_data.' + value);

  return (
    <div>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className={styles['policy-data']}
        >
          <CustomInput
            className={`${formMethods.formState.errors.start_date && 'error'} ${
              styles['policy-data__start-date']
            }`}
            type='date'
            name='start_date'
            placeholder={trans('date')}
            label={trans('date')}
          />

          <CustomInput
            className={`${
              formMethods.formState.errors.expiration_date && 'error'
            } ${styles['policy-data__expiration-date']}`}
            type='date'
            name='expiration_date'
            placeholder={trans('date_end')}
            label={trans('date_end')}
          />

          <CustomInput
            className={styles['policy-data__number-policy']}
            type='text'
            name='number'
            placeholder={trans('number_policy')}
          />

          <CustomSelect
            type='select'
            className={styles['policy-data__phone-code']}
            options={phoneCode}
            name='phone_code'
          />

          <CustomInput
            className={styles['policy-data__phone-number']}
            type='number'
            name='phone'
            placeholder={trans('phone')}
          />

          <CustomInput
            className={styles['policy-data__supplier']}
            type='text'
            name='supplier'
            placeholder={trans('supplier')}
          />

          <div className={styles['policy-data__submit']}>
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

export default PolicyData;
