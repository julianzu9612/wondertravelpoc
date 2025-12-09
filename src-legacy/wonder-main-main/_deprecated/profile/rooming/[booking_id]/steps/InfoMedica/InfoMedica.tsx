'use client';
import { FormProvider, useForm } from 'react-hook-form';
import ContentInput from '../../../components/ContentInput/ContentInputs';
import ListItems from '../../../components/ListItems/ListItems';
import styles from './InfoMedica.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BloodType } from '../../../../../../../../types/common';
import { useTranslation } from '@i18n-client';
import { ICommonProps } from '../common';
import { getDataRooming } from '@services/rooming/travellers/getDataRooming';
import patchTravelers from '@services/rooming/travellers/patchTravelers';
import Buttons from '../../../components/Buttons/Buttons';
import { InfoMedica as IInfoMedica } from './InfoMedica.model';

const schema = yup.object().shape({
  blood_type: yup.string().nullable(),
  is_pregnant: yup.string().nullable(),
  allergies: yup.array().nullable(),
  mobility_problems: yup.array().nullable(),
});

const InfoMedica = ({
  bookingId,
  userId,
  onNexButton,
  onPrevButton,
}: ICommonProps) => {
  const nameSection = 'medical_data';
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: async () => {
      const data = await await getDataRooming<any>({
        section: nameSection,
        bookingId: bookingId,
        userId: userId,
      });

      if (data.is_pregnant) {
        data.is_pregnant = ' ';
      } else {
        data.is_pregnant = '';
      }
      return data;
    },
  });
  const { register } = methods;
  const { t } = useTranslation(undefined, 'rooming');
  const trans = (value: string) => t('information_medical.' + value);

  const onSubmit = async (data: IInfoMedica) => {
    data.is_pregnant = !!data.is_pregnant;
    data.revised = true;
    const response = await patchTravelers(data, nameSection, userId, bookingId);

    if (response instanceof Response && response.ok) onNexButton();
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles['info-medica']}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <select {...register('blood_type')}>
          <option value='' selected disabled>
            {trans('type_blood.title')}
          </option>
          {Object.entries(BloodType).map(([item, value]) => {
            return (
              <option key={item} value={value}>
                {value}
              </option>
            );
          })}
        </select>
        <ContentInput title={trans('pregnant.title')}>
          <div className={styles['content-emabarazo']}>
            <label htmlFor='form-check-input-true'>
              <input
                type='radio'
                className='form-check-input-true'
                value={' '}
                {...register('is_pregnant')}
              />
              {trans('pregnant.yes')}
            </label>

            <label htmlFor='form-check-input-false'>
              <input
                type='radio'
                className='form-check-input-false'
                value={''}
                {...register('is_pregnant')}
              />
              {trans('pregnant.no')}
            </label>
          </div>
        </ContentInput>
        <ListItems name='allergies' title={trans('allergies.title')} />
        <ListItems
          name='mobility_problems'
          title={trans('mobility_problems.title')}
        />
        <Buttons onPrevButton={onPrevButton} />
      </form>
    </FormProvider>
  );
};

export default InfoMedica;
