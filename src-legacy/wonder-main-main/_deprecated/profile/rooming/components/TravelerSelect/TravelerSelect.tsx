'use client';

import React, { Dispatch } from 'react';
import styles from './TravelerSelect.module.scss';
import { ResTraveler } from '@services/rooming/travellers/getTravelers.model';
import { useTranslation } from '@i18n-client';

const TravelerSelect = ({
  className,
  setUserId,
  userId,
  travelers,
}: {
  className?: string;
  filledData: string | number;
  totalData: string | number;
  userId: string | number;
  setUserId: Dispatch<string | number>;
  travelers: ResTraveler[]
}) => {

  const { t } = useTranslation(undefined, 'rooming');
  const trans = (value: string) => t(`traveler_selected.${value}`);

  return (
    <div className={`${className} ${styles['traveler-select']}`}>
      {travelers.length > 1 ? (
        <select
          className={styles['traveler-select__select-user']}
          onChange={({ target: { value } }) => setUserId(+value)}
          defaultValue={userId}
        >
          <option disabled selected>
            {trans('select_a_travel')}
          </option>
          {travelers.map(({ first_name, last_name, id }) => {
            return (
              <option value={id.toString()} key={id}>
                {first_name} {last_name}
              </option>
            );
          })}
        </select>
      ) : (
        <div className={`${styles['traveler-select__user']}`}>
          <p>
            {travelers[0]?.first_name} {travelers[0]?.last_name}
          </p>
        </div>
      )}
      {/* <div className={styles['traveler-select__users-pending']}>
        {trans('travelers_earring')}
        {filledData ? `${filledData}/${totalData}` : trans('loading')}
      </div> */}
    </div>
  );
};

export default TravelerSelect;
