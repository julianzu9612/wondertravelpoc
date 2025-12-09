'use client';
import { useTranslation } from '@i18n-client';
import styles from './SignUp.module.scss';
import SocialButtons from '@components/SocialButtons/SocialButtons';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUp } from '../types.model';
import { setUserSession } from '@store/actions';
import { useContext, useEffect } from 'react';
import ProfileContext from '@store/ProfileContext';
import { redirect } from 'next/navigation';
import useToaster from '@hooks/Toaster/Toaster';
import { CustomInput } from '../../../(profile)/profile/rooming/components/DynamicForm/components/CustomInput/CustonInput';
import { basicSignUp } from '@services/auth/auth';

const SignUp = ({ className, lng }: { className?: string; lng: string }) => {
  const { t } = useTranslation(lng, 'auth');
  const { state, dispatch } = useContext(ProfileContext);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(`${t('First Name')} ${t('IsRequired')}`),
    lastName: Yup.string().required(`${t('Last Name')} ${t('IsRequired')}`),
    email: Yup.string()
      .email()
      .required(`${t('Email')} ${t('IsRequired')}`),
    TyC: Yup.boolean().required().isTrue(t('error.TYC')),
    password: Yup.string()
      .min(8, `${t('Password must be at least 8 characters')}`)
      .required(`${t('Password')} ${t('IsRequired')}`),
  });
  const { ToastContainer, toast } = useToaster();
  const formState = useForm({
    resolver: yupResolver(validationSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formState;

  const onSubmit = (data: any) => {
    signUp(data);
  };

  const signUp = (payload: ISignUp) => {
    (async () => {
      try {
        const basicSignUpAuthTokenData = await basicSignUp({ payload });
        dispatch(
          setUserSession({ ...basicSignUpAuthTokenData, isLogged: true })
        );
      } catch (error: any) {
        toast('error', { type: 'error' });
      }
    })();
  };

  useEffect(() => {
    if (state && state?.userSession?.isLogged) {
      redirect('profile');
    }
  }, [state]);

  return (
    <div className={`${styles['last-trips']} ${className}`}>
      <ToastContainer hideProgressBar />

      <div className={styles['last-trips__sign-up']}>
        <p className={styles['sign-up__description']}>
          {t('signUn.description')}
        </p>
        <SocialButtons />
        <div className={styles['sign-up__basic-auth']}>
          <b className={styles['basic-auth__title']}>
            {t('Registration with email and password')}
          </b>
          <FormProvider {...formState}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles['basic-auth__form']}
            >
              <div className={styles['form__content']}>
                <div className={styles['content__user']}>
                  <CustomInput
                    {...register('firstName')}
                    className={styles['user__input-text']}
                    type='text'
                    placeholder={t('First Name')}
                    name='firstName'
                  />
                  <CustomInput
                    {...register('lastName')}
                    className={styles['user__input-text']}
                    type='text'
                    placeholder={t('Last Name')}
                    name='lastName'
                  />
                </div>
                <CustomInput
                  {...register('email')}
                  className={styles['content__input-text']}
                  type='text'
                  placeholder={t('Email')}
                  name='email'
                />
                <CustomInput
                  {...register('password')}
                  className={styles['content__input-text']}
                  type='password'
                  placeholder={t('Password')}
                  name='password'
                />
                <div className={styles['content__input-checkbox']}>
                  <input type='checkbox' {...register('TyC')} />
                  <label htmlFor=''>{t('I accept terms and conditions')}</label>
                  {errors.TyC && (
                    <p className={styles['error-input']}>
                      {errors?.TyC.message}
                    </p>
                  )}
                </div>
              </div>
              <button type='submit' className={`${styles['register']}`}>
                {t('Register')}
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
