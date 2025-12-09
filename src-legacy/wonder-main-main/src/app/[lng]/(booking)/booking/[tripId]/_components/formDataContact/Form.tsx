import styles from './FormDataUser.module.scss';
import { IContactInfo } from '../../../../booking.model';
import { TFunction } from 'i18next';
import { PREFIX_LIST } from '@utils/prefixList';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Dispatch, RefObject } from 'react';
import postCreateLeader from '@services/booking/createLeader/createLeader';
import { useParams, useRouter } from 'next/navigation';


const Form = ({
  data,
  t,
  refForm,
  leaderCreated,
  setLeaderCreated,
  setDataLeader,
  dataLeader,
  toggleLoad,
}: {
  data: IContactInfo;
  dataLeader: IContactInfo;
  setDataLeader: Dispatch<IContactInfo>;
  leaderCreated: boolean;
  setLeaderCreated: Dispatch<boolean>;
  t: TFunction<string, undefined>;
  refForm:  RefObject<HTMLFormElement>
  toggleLoad:  Dispatch<boolean>
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setError,
  } = useForm<IContactInfo>({
    defaultValues: dataLeader || {}
  });
  
  const router = useRouter();
  const {lng, tripId} = useParams();

  const onSubmit: SubmitHandler<IContactInfo> = async (data) => {
    if (!data.prefix_number?.match(/^\+?\d{1,3}$/)) {
      setError('prefix_number', {message: 'solo + numerof'});
      return;
    };
    if (!data.email?.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError('email', {message: 'solo + numerof'});
      return;
    };

    try {
      toggleLoad(true);
      const newData = {...data};

      if (!newData.prefix_number?.match(/ˆ\+/)) newData.prefix_number = `+${newData.prefix_number}`;

      newData.phone = `${newData.prefix_number}${newData.phone}`;

      delete newData.prefix_number;

      if (!leaderCreated) {
        const res = await postCreateLeader(newData);
        if (res !== null){ 
          setLeaderCreated(true);
          setDataLeader({...res, prefix_number: data.prefix_number});
          router.push(`/${lng}/booking/${tripId}/informacion-viajeros`);
        }
        else throw new Error();
      } else {
        router.push(`/${lng}/booking/${tripId}/informacion-viajeros`);
      }
    } catch (e) {
      console.log(e);
      
      setError('phone', {message: 'Número no valido'});
      setFocus('phone');
    }finally {
      toggleLoad(false);
    }
  };

  return (
    <form
      ref={refForm}
      className={styles['form_user']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className={styles['form_user__name']} htmlFor='first_name'>
        {t('First Name', 'Nombre')}{errors?.first_name?.message}
      </label>
      <input
        id='book_first_name'
        type='text'
        defaultValue={data?.first_name ?? ''}
        minLength={3}
        className={`${styles['form_user__name-input']} ${errors.first_name && 'error'}`}
        {...register('first_name', { required: true })}
      />
      
      <label className={styles['form_user__second']} htmlFor='book_second_name'>
        {t('Last Name', 'Apellido')}
      </label>
      <input
        id='book_second_name'
        type='text'
        defaultValue={data?.last_name ?? ''}
        minLength={3}
        className={`${styles['form_user__second-input']} ${errors.last_name && 'error'}`}
        {...register('last_name', { required: true })} 

      />

      <label className={styles['form_user__email']} htmlFor='book_email'>
        {t('Email', 'Email')}
      </label>
      <input
        id='book_email'
        type='email'
        className={`${
          styles['form_user__email-input']
        } ${errors.email && 'error'}`}
        pattern='^\w+@\w+\.[a-z]{2,4}$'
        {...register('email', { required: true })} 

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
        className={`${styles['form_user__number-prefix-input']} ${errors.prefix_number && 'error'}`}
        minLength={2}
        maxLength={4}
        placeholder='+xx'
        pattern='^\+{1}\d{1,3}$'
        {...register('prefix_number', { required: true })} 
      />
      <datalist id='prefix-list'>
        {PREFIX_LIST.map((i, key) => (
          <option key={key} value={`+${i.phoneCode}`} label={`${i.nameES}`} />
        ))}
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
        defaultValue={data?.phone ?? ''}
        className={`${
          styles['form_user__number-contact-input']
        } ${errors.phone && 'error'}`}
        minLength={10}
        placeholder='1111111111'
        pattern='^\d{10}$'
        {...register('phone', { required: true })} 

      />

    </form>
  );
};

export default Form;
