import { type ChangeEvent } from 'react';
import styles from './FormDataUser.module.scss';
import { IInfoLider } from '../../../../booking.model';
import { TFunction } from 'i18next';
import { PREFIX_LIST } from '@utils/prefixList';

const Form = ({
  onChange,
  data,
  isLider,
  t,
  inputCheck = []
}: {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  data: IInfoLider;
  isLider: boolean;
  t: TFunction<string, undefined>;
  inputCheck: string[]
}) => {

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    onChange(e);
  };

  return (
    <form className={styles['form_user']}>
      <label className={styles['form_user__name']} htmlFor='first_name'>
        {t('First Name', 'Nombre')}
      </label>
      <input
        id='book_first_name'
        type='text'
        name='first_name'
        defaultValue={data?.first_name ?? ''}
        onChange={onChangeInput}
        className={` ${
          inputCheck.includes('first_name') && styles['check']
        }  ${styles['form_user__name-input']}`}
        minLength={3}
      />

      <label className={styles['form_user__second']} htmlFor='book_second_name'>
        {t('Last Name', 'Apellido')}
      </label>
      <input
        id='book_second_name'
        type='text'
        name='last_name'
        defaultValue={data?.last_name ?? ''}
        onChange={onChangeInput}
        className={` ${
          inputCheck.includes('last_name') && styles['check']
        } ${styles['form_user__second-input']}`}
        minLength={3}
      />

      {isLider && (
        <>
          <label className={styles['form_user__email']} htmlFor='book_email'>
            {t('Email', 'Email')}
          </label>
          <input
            id='book_email'
            type='email'
            name='email'
            defaultValue={data?.email ?? ''}
            onChange={onChangeInput}
            className={`${
              inputCheck.includes('email') && styles['check']
            } ${styles['form_user__email-input']}`}
            pattern='^\w+@\w+\.[a-z]{2,4}$'
          />

          <label
            className={styles['form_user__number-prefix']}
            htmlFor='book_contact_number'
          >
            {t('prefix', 'prefijo')}
          </label>
          <input
            id='book_contact_number-prefix'
            list='prefix-list'
            type='tel'
            name='prefix_number'
            defaultValue={data?.prefix_number}
            onChange={onChangeInput}
            className={`${
              inputCheck.includes('prefix_number') && styles['check']
            } ${styles['form_user__number-prefix-input']}`}
            minLength={2}
            maxLength={4}
            placeholder='+xx'
            pattern='^\+{1}\d{1,3}$'
          />
          <datalist id='prefix-list'>
            {
              PREFIX_LIST.map((i, key) => 
                <option key={key} value={`+${i.phoneCode}`} label={`${i.nameES}` }/>
              )
            }
          </datalist>

          <label
            className={styles['form_user__number-contact']}
            htmlFor='book_contact_number'
          >
            {t('phone', 'Numero de Contacto')}
          </label>
          <input
            id='book_contact_number'
            type='tel'
            name='phone'
            defaultValue={data?.phone ?? ''}
            onChange={onChangeInput}
            className={`${
              inputCheck.includes('phone') && styles['check']
            } ${styles['form_user__number-contact-input']}`}
            minLength={10}
            placeholder='1111111111'
            pattern='^\d{10}$'
          />
        </>
      )}

      <label
        className={styles['form_user__document-type']}
        htmlFor='book_document_type'
      >
        {t('Document type', 'Tipo de documento')}
      </label>
      <select
        name='document_type'
        id='book_document_type'
        defaultValue={data?.document_type ?? ''}
        onChange={onChangeInput}
        className={`${
          inputCheck.includes('document_type') && styles['check']
        } ${styles['form_user__document-type-input']}`}
        required
      >
        <option value=''>{t('Document type', 'Selecciona tipo de documento')}</option>
        <option value='1'>
          {t('Cédula de ciudadanía', 'Cédula de ciudadanía')}
        </option>
        <option value='3'>
          {t('Tarjeta de identidad', 'Tarjeta de identidad')}
        </option>
        <option value='2'>
          {t('Cédula de extranjería', 'Cédula de extranjería')}
        </option>
        <option value='4'>{t('Pasaporte', 'Pasaporte')}</option>
        <option value='5'>
          {t(
            'Permiso especial de permanencia',
            'Permiso especial de permanencia'
          )}
        </option>
      </select>

      <label
        className={styles['form_user__doc-number']}
        htmlFor='book_document_number'
      >
        {t('Número de tarjeta', 'Número de documento')}
      </label>
      <input
        id='book_document_number'
        type='text'
        name='document_number'
        onChange={onChangeInput}
        className={`${
          inputCheck.includes('document_number') && styles['check']
        } ${styles['form_user__doc-number-input']}`}
        defaultValue={data?.document_number ?? ''}
        minLength={5}
      />
    </form>
  );
};

export default Form;
