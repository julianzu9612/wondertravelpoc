'use client';
import { useEffect, useState } from 'react';
// styles
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { personalDataSchema } from './validations';
import { CustomInput } from '../../DynamicForm/components/CustomInput/CustonInput';
import { getDataRooming } from '@services/rooming/travellers/getDataRooming';
import patchTravelers from '@services/rooming/travellers/patchTravelers';
import styles from './PersonalData.module.scss';
import { getDocumentTypes } from '@services/profile/documentTypes/getDocumentTypes';
import { IOpt } from '../../DynamicForm/types';
import { getCountries } from '@services/profile/countries/getCountries';
import { CustomCheckbox } from '../../DynamicForm/components/CustomCheckBox/CustomCheckBox';
import { ICommonProps } from '../../../[booking_id]/steps/common';
import { useTranslation } from '@i18n-client';
import { CustomSelect } from '../../DynamicForm/components/CustomSelect/CustomSelect';

export interface Personaldata {
  first_name: string;
  last_name: string;
  email: string;
  document_type: number;
  document_number: string;
  genre: string;
  nationality: string;
  birth_date: string;
  revised: boolean;
}

const PersonalData = ({ bookingId, userId, onNexButton }: ICommonProps) => {
  const [documentType, setDocumentType] = useState<IOpt[]>();
  const [nationalities, setNationalities] = useState<IOpt[]>();
  const formMethods = useForm({
    resolver: yupResolver(personalDataSchema),
    defaultValues: async () => {
      const roomingData = await getDataRooming<any>({
        section: 'personal_data',
        bookingId: bookingId,
        userId: userId,
      });
      delete roomingData.email;
      roomingData['terms-conditions'] = true;
      return roomingData;
    },
  });

  useEffect(() => {
    (async () => {
      const DocumentType = await getDocumentTypes();
      const convertToSelect: IOpt[] = DocumentType?.map((i) => ({
        desc: i.label,
        value: i.id,
      }));
      setDocumentType(convertToSelect);

      const NationalitiesTypes = await getCountries();
      const nationalitiesConvertToSelect: IOpt[] = NationalitiesTypes?.map(
        (i) => ({
          desc: i.name,
          value: i.code,
        })
      );

      setNationalities(nationalitiesConvertToSelect);
    })();
  }, []);

  const onSubmit = async (data: Personaldata) => {
    data.document_type = Number(data.document_type);
    data.revised = true;
    setTimeout(async () => {
      const response = await patchTravelers(
        data,
        'personal_data',
        userId,
        bookingId
      );
      if (response instanceof Response && response?.ok) onNexButton();
    }, 500);
  };
  const { t } = useTranslation(undefined, 'rooming');
  const trans = (value: string) => t('data_personal.' + value);
  return (
    <div>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className={styles['personal-data']}
        >
          <CustomInput
            className={`${formMethods.formState.errors.first_name && 'error'} ${
              styles['personal-data__first-name']
            }`}
            type='text'
            name='first_name'
            placeholder={trans('name')}
          />
          <CustomInput
            className={`${formMethods.formState.errors.last_name && 'error'} ${
              styles['personal-data__last-name']
            }`}
            type='text'
            name='last_name'
            placeholder={trans('last_name')}
          />

          <CustomSelect
            type='select'
            options={documentType}
            name='document_type'
          />

          <CustomInput
            className={`${
              formMethods.formState.errors.document_number && 'error'
            } ${styles['personal-data__document-number']}`}
            type='number'
            name='document_number'
            placeholder={trans('document_type')}
          />
          <CustomSelect
            type='select'
            className={styles['personal-data__gender']}
            options={[
              {
                desc: trans('genders.male'),
                value: 'MALE',
              },
              { value: 'FEMALE', desc: trans('genders.female') },
              { value: 'OTHER', desc: trans('genders.other') },
              { value: 'NON_SPECIFIC', desc: trans('genders.non_especific') },
            ]}
            name='genre'
          />

          {nationalities && (
            <CustomSelect
              type='select'
              className={styles['personal-data__nacionality']}
              options={nationalities}
              name='nationality'
            />
          )}
          <CustomInput
            className={`${formMethods.formState.errors.birth_date && 'error'} ${
              styles['personal-data__date']
            }`}
            type='date'
            name='birth_date'
            placeholder={trans('bithdate')}
          />

          <CustomCheckbox
            type='checkbox'
            name='terms-conditions'
            label={trans('terms_and_conditions')}
          />
          <div className={styles['personal-data__submit']}>
            <button>{t('send')}</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default PersonalData;
