'use client';
import styles from './DataPersonal.module.scss';
import { IDataPerson } from './DataPersonal.model';
import Input from '../Input/Input';
import { useTranslation } from '@i18n-client';
import { useEffect, useState } from 'react';
import { getGenders } from '@services/profile/genders/getGenders';
import { IGetGenders } from '@services/profile/genders/getGenders.model';
import { IGetDocumentTypes } from '@services/profile/documentTypes/getDocumentTypes.model';
import { getDocumentTypes } from '@services/profile/documentTypes/getDocumentTypes';
import { getCountries } from '@services/profile/countries/getCountries';
import { IGetCountries } from '@services/profile/countries/getCountries.model';
import CustomSelect from '../../../rooming/components/DynamicForm/components/CustomSelect/CustomSelect';

const DataPersonal = ({ lng }: IDataPerson) => {
  const { t } = useTranslation(lng, 'account');
  const [genders, setGenders] = useState<IGetGenders[]>([]);
  const [documentTypes, setDocumentTypes] = useState<IGetDocumentTypes[]>([]);
  const [nationalities, setNationalities] = useState<IGetCountries[]>([]);
  const getData = async () => {
    const [dataGenders, dataTypesDocument, dataNationalities] = [
      await getGenders(),
      await getDocumentTypes(),
      await getCountries(),
    ];
    setGenders(dataGenders);
    setDocumentTypes(dataTypesDocument);
    setNationalities(dataNationalities);
  };
  useEffect(() => {
    getData();
  }, []);
  const trans = (value: string) => t('data_personal.' + value);
  return (
    <div className={styles['content-form']}>
      <Input name='first_name' required placeholder={trans('name')} />
      <Input name={'last_name'} placeholder={trans('lastName')} />
      <CustomSelect
        name='document_type'
        options={documentTypes.map((type) => {
          return { desc: trans('type_document.' + type.code), value: type.id };
        })}
        type='select'
        placeholder={trans('title')}
      />
      <Input
        name={'document_number'}
        placeholder={trans('document')}
        required
      />
      <div className={styles['content-form__selects']}>
        <CustomSelect
          name='genre'
          options={genders.map(({ key }) => {
            return { desc: trans('genres.' + key), value: key };
          })}
          type='select'
          placeholder={trans('gender')}
        />
        <CustomSelect
          name={'nationality'}
          options={nationalities.sort().map((nationality) => {
            return { desc: nationality.name, value: nationality.code };
          })}
          type='select'
          placeholder={trans('nationality')}
        />
        <label htmlFor='birth_date' className={styles['selects__date']}>
          {trans('birthday')}
          <Input
            type='date'
            placeholder={trans('birthday')}
            name={'birth_date'}
          />
        </label>
      </div>
    </div>
  );
};

export default DataPersonal;
