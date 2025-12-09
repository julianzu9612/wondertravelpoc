'use client';
// styles
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  getDataRooming,
  sendData,
} from '@services/rooming/travellers/getDataRooming';
import patchTravelers from '@services/rooming/travellers/patchTravelers';
import styles from './AdditionalData.module.scss';
import * as Yup from 'yup';
import { ICommonProps } from '../../../[booking_id]/steps/common';
import { useTranslation } from '@i18n-client';
import { CustomSelect } from '../../DynamicForm/components/CustomSelect/CustomSelect';

export const aditionalDataSchema = Yup.object({
  additional: Yup.string().required(),
});

const AdditionalData = ({
  bookingId,
  userId,
  onNexButton,
  onPrevButton,
}: ICommonProps) => {
  const formMethods = useForm({
    resolver: yupResolver(aditionalDataSchema),
    defaultValues: async () => {
      const rooming = await getDataRooming<any>({
        section: 'additional_data',
        bookingId: bookingId,
        userId: userId,
      });
      return rooming;
    },
  });

  const onSubmit = async (data: sendData<typeof aditionalDataSchema>) => {
    data.revised = true;
    const patchData = await patchTravelers(
      data,
      'additional_data',
      userId,
      bookingId
    );
    if (patchData instanceof Response && patchData?.ok) onNexButton();
  };

  const onClickPrev = () => {
    onPrevButton();
  };
  const { t } = useTranslation(undefined, 'rooming');
  const trans = (value: string) => t('additional_data.additional.' + value);
  return (
    <div>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className={styles['additional-data']}
        >
          <CustomSelect
            type='select'
            className={`${formMethods.formState.errors.additional && 'error'} ${
              styles['additional-data__additional-types']
            }`}
            label={t('additional_data.select_swim')}
            options={[
              { desc: trans('non_swim'), value: 'DONT_KNOW_SWIM' },
              { desc: trans('swim'), value: 'KWON_SWIM' },
              { desc: trans('preferences_no_swim'), value: 'PREFER_DONT_SWIM' },
              { desc: trans('profesional_swim'), value: 'PROFETIONAL_SWIMMER' },
            ]}
            name='additional'
          />
          <div className={styles['additional-data__submit']}>
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

export default AdditionalData;
