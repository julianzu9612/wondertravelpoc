'use client';
import React from 'react';
import { IChangePassword } from './changePassword.model';
import styles from './changePassword.module.scss';
import Input from '../Input/Input';
import { useTranslation } from '@i18n-client';
export const ChangePassword = ({ lng }: IChangePassword) => {
  const { t } = useTranslation(lng, 'account');
  return (
    <div className={styles['content-form']}>
      <Input
        type='password'
        name='password'
        placeholder={t('data_password.password')}
        className={styles['content-form__input']}
      />

      <Input
        type='password'
        name='new_password'
        placeholder={t('data_password.new_password')}
        className={styles['content-form__input']}
      />
      <Input
        type='password'
        name='password_confirmation'
        placeholder={t('data_password.confirm_password')}
        className={styles['content-form__input']}
      />
    </div>
  );
};
export default ChangePassword;
