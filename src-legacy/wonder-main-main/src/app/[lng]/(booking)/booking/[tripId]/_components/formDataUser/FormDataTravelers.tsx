import React, { useContext } from 'react';
import { BookingContext } from '../../../../bookingContext';
import styles from './FormDataUser.module.scss';
import { useTranslation } from '@i18n-client';
import FormTraveler from './FormTraveler';

const FormDataTraveler = () => {
  const {
    lng,
    userSummary,
    formListTravelerstRef,
    accompanying,
    setAccompaying,
  } = useContext(BookingContext);
  const { t } = useTranslation(lng, 'booking');

  if (userSummary.length <= 0) return false;

  return (
    <div className={styles['form-data-user']}>
      <h2 className={styles['form-data-user__title-user']}>
        {t('data-user.title')}
      </h2>
      <div className={styles['form-data-user__forms-users']}>
        {userSummary.length > 0 &&
          userSummary.map((user, xx) =>
            [...Array(user.value)].map((x, s) => {
              const currentFormNumber =
                userSummary
                  .slice(0, xx)
                  .reduce((acc, cur) => acc + cur.value, 0) +
                s +
                1;
              return (
                <div
                  key={`${user.label}-${s + 1}`}
                  style={{ marginBottom: '20px' }}
                >
                  <h3>Datos de Viajero {currentFormNumber}</h3>
                  <FormTraveler
                    t={t}
                    index={s}
                    label={user.label}
                    data={accompanying}
                    setData={setAccompaying}
                    ref={(el) => {
                      // Asegúrate de que current no es null
                      if (formListTravelerstRef.current) {
                        formListTravelerstRef.current[currentFormNumber - 1] = el;
                      } 
                    }}
                  />
                </div>
              );
            })
          )}
      </div>
    </div>
  );
};

export default FormDataTraveler;
