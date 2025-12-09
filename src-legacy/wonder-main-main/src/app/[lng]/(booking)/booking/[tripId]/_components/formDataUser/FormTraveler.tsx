import styles from './FormDataUser.module.scss';
import { IAccompanying, IAccompanyingState } from '../../../../booking.model';
import { useForm } from 'react-hook-form';
import { Dispatch, FormEvent, forwardRef, useImperativeHandle } from 'react';
import { TFunction } from 'i18next';

export interface FormTravelerRef {
  submit: () => Promise<IAccompanying | null>;
  getValues: () => IAccompanying;
}

const FormTraveler = forwardRef<
  FormTravelerRef | null,
  {
    t: TFunction<string, undefined>;
    index: number;
    data: IAccompanyingState;
    setData: Dispatch<IAccompanyingState>;
    label: string;
  }
>(
  (
    {
      t,
      index,
      data,
      setData,
      label,
    }: {
      t: TFunction<string, undefined>;
      index: number;
      data: IAccompanyingState;
      setData: Dispatch<IAccompanyingState>;
      label: string;
    },
    ref
  ) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
    } = useForm<IAccompanying>({
      defaultValues: data[`${label}-${index}`] || {
        name: '',
        document_type: '',
        document_number: '',
      },
    });

    useImperativeHandle(ref, () => ({
      submit: () =>
        new Promise((resolve) => {
          handleSubmit(
            (dataForm) => {
              resolve(dataForm);
            },
            (errors) => {
              console.error('Error en la validación del formulario:', errors);
              resolve(null); // Rechazar si la validación falla
            }
          )();
        }),
      getValues: () => getValues(),
    }));

    const updateStore = (e: FormEvent) => {
      const target = e.target as HTMLInputElement | HTMLSelectElement;
      const newData = {
        ...data,
        [`${label}-${index}`]: {
          ...data[`${label}-${index}`],

          [target.name]: target.value,
        },
      };

      setData(newData);
    };

    return (
      <form className={styles['form_user']} onChange={(e) => updateStore(e)}>
        <label className={styles['form_user__name']} htmlFor='first_name'>
          {t('First Name', 'Nombre')}
          {errors?.name?.message}
        </label>
        <input
          id='book_first_name'
          type='text'
          defaultValue={data?.[`${label}-${index}`]?.name ?? ''}
          className={`${styles['form_user__name-input']} ${
            errors.name && 'error'
          }`}
          {...register('name', { required: true })}
        />

        <label className={styles['form_user__second']} htmlFor='first_name'>
          {t('Last Name', 'Apellido')}
          {errors?.last_name?.message}
        </label>
        <input
          id='book_last_name'
          type='text'
          defaultValue={data?.[`${label}-${index}`]?.last_name ?? ''}
          className={`${styles['form_user__second-input']} ${
            errors.name && 'error'
          }`}
          {...register('last_name', { required: true })}
        />
        <label
          className={styles['form_user__document-type']}
          htmlFor='book_document_type'
        >
          {t('Document type', 'Tipo de documento')}{' '}
          {errors?.document_type?.message}
        </label>
        <select
          id='book_document_type'
          defaultValue={data?.[`${label}-${index}`]?.document_type ?? ''}
          className={`${styles['form_user__document-type-input']} ${
            errors.document_type && 'error'
          }`}
          {...register('document_type', { required: true })}
        >
          <option value=''>
            {t('Document type', 'Selecciona tipo de documento')}
          </option>
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
          {t('Número de tarjeta', 'Número de documento')}{' '}
          {errors?.document_number?.message}
        </label>
        <input
          id='book_document_number'
          type='text'
          className={`${styles['form_user__doc-number-input']} ${
            errors.document_number && 'error'
          }`}
          defaultValue={data?.[`${label}-${index}`]?.document_number ?? ''}
          {...register('document_number', { required: true })}
        />
      </form>
    );
  }
);

FormTraveler.displayName = 'FormTraveler';

export default FormTraveler;
