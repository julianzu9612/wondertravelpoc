'use client';
import styles from './dataContact.module.scss';
import Input from '../Input/Input';
import { useTranslation } from '@i18n-client';
import { useEffect, useState } from 'react';
import { IGetPhoneCode } from '@services/profile/phoneCode/getPhoneCode.model';
import { getPhoneCode } from '@services/profile/phoneCode/getPhoneCode';
import { IGetCountries } from '@services/profile/countries/getCountries.model';
import { getCountries } from '@services/profile/countries/getCountries';
import { getCities } from '@services/profile/cities/getCities';
import { IGetCities } from '@services/profile/cities/getCities.model';
import { IDataPerson } from '../DataPersonal/DataPersonal.model';
import { useFormContext, useWatch } from 'react-hook-form';
import CustomSelect from '../../../rooming/components/DynamicForm/components/CustomSelect/CustomSelect';

const DataContact = ({ lng }: IDataPerson) => {
  const {
    control,
    formState: { defaultValues },
    setValue,
  } = useFormContext();
  const { t } = useTranslation(lng, 'account');
  const [phoneCodes, setPhoneCodes] = useState<IGetPhoneCode[]>([]);
  const [countries, setCountries] = useState<IGetCountries[]>([]);
  const [cities, setCities] = useState<IGetCities>();
  const country = useWatch({ control, name: 'residential_country' });
  useEffect(() => {
    const getData = async () => {
      const codesPhone = await getPhoneCode();
      setPhoneCodes(codesPhone);
      const countries = await getCountries();
      setCountries(countries);
    };
    getData();
  }, []);

  const uniqueCodesPhone = phoneCodes.filter((obj, index, array) => {
    return (
      index === array.findIndex((o) => o.country_code === obj.country_code)
    );
  });

  useEffect(() => {
    const getData = async () => {
      if (country) {
        setValue('city', null);
        const data = await getCities(country);
        if ('city_list' in data) setCities(data);
      }
    };
    getData();
  }, [country]);
  const email = defaultValues && defaultValues['email'];
  return (
    <div className={styles['content-form']}>
      <div className={styles['content-form__content']}>
        <Input
          name='email'
          required
          disabled={email?.length > 0 ? true : false}
          placeholder={t('data_contact.email')}
          className={styles['content-form__content']}
        />
      </div>
      <div className={styles['content-form__content']}>
        <CustomSelect
          name='residential_country'
          options={countries.sort().map(({ code, name }) => ({
            desc: name,
            value: code,
          }))}
          type='select'
          placeholder={t('data_contact.country_residence')}
        />
      </div>
      <div className={styles['content-form__content']}>
        <CustomSelect
          name='city'
          options={
            cities?.city_list.sort().map((city) => ({
              desc: city,
              value: city,
            })) ?? []
          }
          placeholder={t('data_contact.city')}
          type='select'
        />
      </div>

      <div className={styles['content-form__content']}>
        <Input
          name='address'
          required
          placeholder={t('data_contact.direction')}
        />
      </div>
      <div className={styles['content-form__phone']}>
        <CustomSelect
          placeholder={t('data_contact.code_phone')}
          name='code_phone'
          options={uniqueCodesPhone.map(({ country_name, country_code }) => ({
            desc: '+' + country_code + '   ' + country_name,
            value: '+' + country_code,
          }))}
          type='select'
        />
        <Input
          type='number'
          name='phone'
          required
          placeholder={t('data_contact.phone')}
        />
      </div>
    </div>
  );
};

export default DataContact;
