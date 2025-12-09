'use client';
import { useTranslation } from '@i18n-client';
import styles from './SignIn.module.scss';
import SocialButtons from '@components/SocialButtons/SocialButtons';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { setUserSession } from '@store/actions';
import { ISignIn } from '../types.model';
import { useContext, useEffect } from 'react';
import ProfileContext from '@store/ProfileContext';
import { redirect } from 'next/navigation';
import useToaster from '@hooks/Toaster/Toaster';
import { basicSignIn } from '@services/auth/auth';
import { CustomInput } from '../../../(profile)/profile/rooming/components/DynamicForm/components/CustomInput/CustonInput';

const SignIn = ({ className, lng }: { className?: string; lng: string }) => {
  const { t } = useTranslation(lng, 'auth');
  const { state, dispatch } = useContext(ProfileContext);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(`${t('Email')} ${t('IsRequired')}`),
    password: Yup.string()
      .min(6, t('Password must be at least 8 characters'))
      .required(`${t('Password')} ${t('IsRequired')}`),
  });
  const formState = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { register, handleSubmit } = formState;

  const onSubmit = (data: any) => {
    signIn(data);
  };

  const signIn = (payload: ISignIn) => {
    (async () => {
      try {
        const basicSignInAuthTokenData = await basicSignIn({ payload });
        toast(t('signIn.success'), {
          type: 'success',
          autoClose: 800,
          onClose() {
            dispatch(
              setUserSession({ ...basicSignInAuthTokenData, isLogged: true })
            );
            redirect('profile');
          },
        });
      } catch (e) {
        console.error('socialAuthTokenData', e);
        const error = true;
        if (error) return showError(t('signIn.error'));
      }
    })();
  };
  const { ToastContainer, toast } = useToaster();
  useEffect(() => {
    if (state && state?.userSession?.isLogged) {
      redirect('profile');
    }
  }, [state]);

  const showError = (error: string) => {
    toast(error, { type: 'error' });
  };

  return (
    <div className={`${styles['last-trips']} ${className}`}>
      <ToastContainer hideProgressBar />
      <div className={styles['sign-in']}>
        <p className={styles['sign-in__description']}>
          {t('signIn.description')}
        </p>
        <SocialButtons />
        <div className={styles['sign-in__basic-auth']}>
          <b className={styles['basic-auth__title']}>
            {t('LogIn with email and password')}
          </b>
          <FormProvider {...formState}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles['basic-auth__form']}>
                <CustomInput
                  {...register('email')}
                  className={styles['input-text']}
                  type='text'
                  placeholder={t('Email')}
                  name='email'
                />

                <CustomInput
                  {...register('password')}
                  className={styles['input-text']}
                  type='password'
                  placeholder={t('Password')}
                  name='password'
                />
              </div>
              <button type='submit' className={`${styles['register']}`}>
                {t('Sign In')}
              </button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
