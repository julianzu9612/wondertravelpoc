import React, { useContext } from 'react';
import { BookingContext } from '../../../../bookingContext';
import Form from './Form';
import styles from './FormDataUser.module.scss';
import { useTranslation } from '@i18n-client';

const FormDataContact = () => {
  const {
    lng,
    formContactRef,
    dataContact,
    setDataContact,
    setLeaderCreated,
    leaderCreated,
    toggleLoad
  } = useContext(BookingContext);

  const { t } = useTranslation(lng, 'booking');

  return (
    <div className={styles['form-data-user']}>
      <h2 className={styles['form-data-user__title-user']}>
        {t('data-contact.title', 'Datos de contacto')}
      </h2>

      <div className={styles['form-data-user__forms-users']}>
        <Form
          t={t}
          refForm={formContactRef}
          setLeaderCreated={setLeaderCreated}
          leaderCreated={leaderCreated}
          data={dataContact}
          setDataLeader={setDataContact}
          dataLeader={dataContact}
          toggleLoad={toggleLoad}
        />
      </div>
    </div>
  );
};

export default FormDataContact;
