'use client';
// enhacer
import { useTranslation } from '@i18n-client';
import { useRouter } from 'next/navigation';
// external libraries
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
// components
import Summary from '@components/summary/Summary';
import DataPersonal from '../DataPersonal/DataPersonal';
import ChangePassword from '../ChangePassword/ChangePassword';
import DataContact from '../DataContact/DataContact';

// styles
import styles from './dataAccount.module.scss';
import 'react-toastify/dist/ReactToastify.css';

// types
import type { IDataAccount } from './dataAccount.model';
// services
import { getTraveler } from '@services/profile/traveler/getTraveler/getTraveler';
import { IGetTraveler } from '@services/profile/traveler/getTraveler/getTraveler.model';
import { updateTraveler } from '@services/profile/traveler/updateTraveler/updateTraveler';
import useToaster from '../../../../../../../customHooks/Toaster/Toaster';
type TModifiedGetTraveler = Omit<IGetTraveler, 'marital_status'> & {
  password: string | undefined;
  new_password: string | undefined;
  password_confirmation?: string | undefined;
};
const schema = (
  t: (key: string) => string
): yup.ObjectSchema<TModifiedGetTraveler> => {
  return yup.object().shape({
    first_name: yup.string().required(t('message_error.name')),
    last_name: yup.string().required(t('message_error.last_name')),
    email: yup.string().email().required(t('message_error.email')),
    phone: yup.string().min(7).max(11).required(t('message_error.phone')),
    code_phone: yup.string().required(t('message_error.code_phone')),
    document_type: yup.number().required(),
    document_number: yup.string().required(t('message_error.docußment')),
    genre: yup.string().nullable().defined(),
    birth_date: yup.string(),
    nationality: yup.string().nullable(),
    residential_country: yup.string().nullable(),
    address: yup.string().nullable(),
    city: yup.string().nullable(),
    //Inputs Password
    password: yup.string(),
    new_password: yup.string(),
    password_confirmation: yup
      .string()
      .oneOf(
        [yup.ref('new_password')],
        t('message_error.password_confirmation')
      ),
  });
};
const DataAccount = ({ lng }: IDataAccount) => {
  const { push } = useRouter();

  const getData = async () => {
    const dataTraveler = await getTraveler();
    return dataTraveler;
  };
  const { t } = useTranslation(lng, 'account');
  const { toast, ToastContainer } = useToaster();
  const methods = useForm({
    defaultValues: async () => {
      const data = await getData();
      const codePhone = data.phone?.slice(0, data.phone.length - 10);
      const phone = data.phone?.slice(-10);
      return {
        ...data,
        code_phone: codePhone,
        phone: phone,
      };
    },
    resolver: yupResolver(schema(t)),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <ToastContainer />

      <form
        className={styles['data-profile']}
        onSubmit={handleSubmit(async (data) => {
          data.phone = data.code_phone + data.phone;
          data.birth_date = dayjs(data.birth_date).format('YYYY-MM-DD');
          try {
            await updateTraveler(data);
            toast(t('update.success'), {
              type: 'success',
              onClose: () => {
                push('profile');
              },
              autoClose: 1500,
            });
          } catch (error) {
            toast(t('update.error'), {
              type: 'error',
              autoClose: 1500,
            });
          }
        })}
      >
        <div className={styles['data-profile__content-logo']}>
          <h2 className={styles['content-logo__title']}>
            <b>{t('title_profile')}</b>
          </h2>
        </div>
        <div className={styles['data-profile__content-form']}>
          <div className={styles['content-form__content-sumary']}>
            <Summary
              defaultOpen={false}
              title={t('data_personal.data_personal')}
            >
              <>
                <DataPersonal lng={lng} />
                <p>{t('input_required')}</p>
              </>
            </Summary>
          </div>
          <div className={styles['content-form__content-sumary']}>
            <Summary defaultOpen={false} title={t('data_contact.data_contact')}>
              <>
                <DataContact />
                <p>{t('input_required')}</p>
              </>
            </Summary>
          </div>
          <div className={styles['content-form__content-sumary']}>
            <Summary
              defaultOpen={false}
              title={t('data_password.change_password')}
            >
              <>
                <ChangePassword lng={lng} />
                <p>{t('input_required')}</p>
              </>
            </Summary>
          </div>
        </div>
        <button type='submit' className={styles['data-profile__send']}>
          {t('finish_send')}
        </button>
      </form>
    </FormProvider>
  );
};

export default DataAccount;
