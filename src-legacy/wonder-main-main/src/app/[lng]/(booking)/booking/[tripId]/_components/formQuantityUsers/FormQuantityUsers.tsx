'use client';

import React, { useContext } from 'react';
import { BookingContext } from '../../../../bookingContext';
import Counter from '@components/counter/Counter';
import { IIndividualTypeItem } from '../../Booking.model';
import styles from './FormQuantityUsers.module.scss';
import { useTranslation } from '@i18n-client';

const FormQuantityUsers = () => {
  const {lng, users, usersSelected, setUsersSelected, getIdForeign } =
    useContext(BookingContext);
  const { t } = useTranslation(lng, 'booking');

  const DEFAULT_VALUE = 0;

  const setUsersContext = ({
    individualType,
    quantity,
    id,
  }: {
    individualType: string;
    quantity: number;
    id: number;
  }) => {
    const newData = {
      ...usersSelected,
      [individualType]: {
        individual_id: id,
        quantity_individual: quantity,
      },
    };

    setUsersSelected(newData);
  };

  const onIncrement = (user: IIndividualTypeItem) => {
    const contextQuantity =
      usersSelected?.[user.individual_type]?.quantity_individual;
    const quantity = contextQuantity ? contextQuantity + 1 : 1;

    setUsersContext({
      individualType: user.individual_type,
      quantity,
      id: user.id,
    });
  };

  const onDecrement = (user: IIndividualTypeItem) => {
    const contextQuantity =
      usersSelected?.[user.individual_type]?.quantity_individual;
    let quantity = contextQuantity ? contextQuantity - 1 : 0;

    if (quantity === 0) quantity = 0;

    setUsersContext({
      individualType: user.individual_type,
      quantity,
      id: user.id,
    });
  };

  const Foreign: IIndividualTypeItem = {
    id: getIdForeign(),
    individual_type: 'FOREIGN',
    min_age: 18,
  };


  return (
    <div className={styles['form-quantity-users']}>
      <h2>{t('travelers.quantity-travelers')}</h2>

      <div className={styles['form-quantity-users__user-list']}>
        <h3>{t('travelers.nationals')}</h3>
        {users
          ?.filter((i) => i.id !== Foreign.id)
          ?.map((user, i) => (
            <div className={styles['user-list__item']} key={i}>
              <div className={styles['item__label']}>
                <p>{t(user.individual_type)}</p>
                <p>
                  {user.individual_type === 'CHILDREN' ||
                  user.individual_type === 'BABIES'
                    ? t('under-years', ' Menor de')
                    : t('over-years', 'Mayor de')}{' '}
                  {user.min_age} {t('years', 'años')}
                </p>
              </div>
              {/* [{"id":26,"individual_type":"ADULT","min_age":15} */}
              <Counter
                className={styles['item__counter']}
                value={
                  usersSelected?.[user?.individual_type]?.quantity_individual ??
                  DEFAULT_VALUE
                }
                onIncrement={() => onIncrement(user)}
                onDecrement={() => onDecrement(user)}
              />
            </div>
          ))}
        <h3 className={styles['user-list__foreign']}>
          {t('travelers.foreing')}
        </h3>
        <p className={styles['user-list__desc-foreign']}>
          {t(
            'travelers.description-foreing',
            'Personas no nacionalizadas en Colombia'
          )}
        </p>
        <div className={styles['user-list__item']}>
          <div className={styles['item__label']}>
            <p>{t('ADULT')}</p>
            <p>
              {lng === 'es' && t('min-years')} 18 {t('years')}{' '}
              {lng === 'en' && t('min-years')}
            </p>
          </div>
          <Counter
            className={styles['item__counter']}
            value={
              usersSelected?.[Foreign.individual_type]?.quantity_individual ??
              DEFAULT_VALUE
            }
            onIncrement={() => onIncrement(Foreign)}
            onDecrement={() => onDecrement(Foreign)}
          />
        </div>
      </div>
    </div>
  );
};

export default FormQuantityUsers;
