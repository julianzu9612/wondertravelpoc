'use client';
import { ISearchTripsParams } from '@components/SearchTrip/SearchTrip.model';
import React, { useMemo, useState } from 'react';
import { useTranslation } from '../../../../i18n/client';
import styles from './ModalFiltersTrips.module.scss';
import Image from 'next/image';
import useQueryParams from '@hooks/useQueryParams';
import Modal from '@components/Modal/Modal';

const ModalFiltersTrips = ({
  isOpen,
  onClose,
  maxDays = 6,
}: {
  isOpen: boolean;
  onClose: () => void;
  maxDays?: number;
}) => {
  const initFilters = {
    page: undefined,
    priceMin: undefined,
    priceMax: undefined,
    productType: undefined,
    duration: undefined,
    physicalPerformance: undefined,
    acommodationQuality: undefined,
  };
  maxDays = Math.max(8, maxDays);
  const { queryParams, setQueryParams } = useQueryParams();
  const objectSearchParams = useMemo(() => {
    const object: ISearchTripsParams = {};
    Object.keys(initFilters).forEach((key) => {
      const valueParam = queryParams.get(key);
      if (valueParam) {
        object[key as keyof typeof initFilters] = valueParam;
      }
    });
    return object;
  }, [queryParams]);
  const {
    priceMin,
    priceMax,
    duration,
    physicalPerformance,
    acommodationQuality,
  } = objectSearchParams;
  const [formData, setFormData] =
    useState<ISearchTripsParams>(objectSearchParams);

  const { t: trans } = useTranslation(undefined);
  const t = (key: string) => trans('ModalFilterTrips.' + key);
  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const setApplyFilters = () => {
    onFilter(formData);
  };

  const setResetFilters = () => {
    setFormData(initFilters);
    onFilter(initFilters);
    onClose();
  };

  const onFilter = (data: ISearchTripsParams) => {
    setFormData(initFilters);
    setQueryParams(data);
  };

  return (
    <Modal open={isOpen}>
      <div className={`modal ${styles['modal-filter__modal']}`}>
        <div className={styles['modal__section-close']}>
          <button
            className={`${styles['section-close__modal-close']}`}
            onClick={onClose}
            name='Boton para cerrado de modal'
          >
            <Image
              width={30}
              height={30}
              alt='close'
              src='/assets/icons/close.svg'
            />{' '}
          </button>
        </div>
        <h1 className={styles['modal__modal-title']}>{t('Filters')}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setApplyFilters();
            onClose();
          }}
        >
          <div className={`modal-content ${styles['modal__modal-content']}`}>
            <div className={styles['modal-content__modal-filters-trips']}>
              <section className={styles['modal-filters-trips__wrap']}>
                <section className={styles['wrap__section']}>
                  <h3 className={styles['section__title']}>{t('Price')}</h3>
                  <div className={styles['section__inputs-groups']}>
                    <div>
                      <input
                        type='number'
                        placeholder='$0'
                        name='priceMin'
                        defaultValue={priceMin ?? ''}
                        onChange={handleInput}
                      />
                      <b className={styles['input-info']}>{t('Price Min')}</b>
                    </div>
                    <div>
                      <input
                        type='number'
                        placeholder='$3000000'
                        name='priceMax'
                        defaultValue={priceMax ?? ''}
                        onChange={handleInput}
                      />
                      <b className={styles['input-info']}>{t('Price Max')}</b>
                    </div>
                  </div>
                </section>

                <section className={styles['wrap__section']}>
                  <h3 className={styles['section__title']}>{t('Duration')}</h3>
                  <div className={styles['section__inputs-wrap']}>
                    <select
                      name='duration'
                      onChange={handleInput}
                      defaultValue={duration ?? ''}
                    >
                      {Array.from({ length: maxDays }, (_, index) => (
                        <option value={index + 1} key={index + 1}>
                          {index + 1} {t('Days')}
                        </option>
                      ))}
                    </select>
                  </div>
                </section>

                <section className={styles['wrap__section']}>
                  <h3 className={styles['section__title']}>
                    {t('Physical Level')}
                  </h3>
                  <div className={styles['section__inputs-groups']}>
                    <div>
                      <label
                        htmlFor='physicalPerformance1'
                        className='label-radio'
                      >
                        {t('High')}
                      </label>
                      <input
                        defaultChecked={physicalPerformance === '1'}
                        type='radio'
                        id='physicalPerformance1'
                        value='1'
                        name='physicalPerformance'
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='physicalPerformance3'
                        className='label-radio'
                      >
                        {t('Medium')}
                      </label>
                      <input
                        defaultChecked={physicalPerformance === '3'}
                        type='radio'
                        id='physicalPerformance3'
                        value='3'
                        name='physicalPerformance'
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='physicalPerformance5'
                        className='label-radio'
                      >
                        {t('Low')}
                      </label>
                      <input
                        defaultChecked={physicalPerformance === '5'}
                        type='radio'
                        id='physicalPerformance5'
                        value='5'
                        name='physicalPerformance'
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </section>

                <section
                  className={`${styles['wrap__section']} ${styles['wrap__last']}`}
                >
                  <h3 className={styles['section__title']}>
                    {t('Accommodation quality')}
                  </h3>
                  <div className={styles['section__inputs-groups']}>
                    <div>
                      <label htmlFor='' className='label-radio'>
                        1/5
                      </label>
                      <input
                        type='radio'
                        id='acommodationQuality1'
                        defaultChecked={acommodationQuality === '1'}
                        value='1'
                        name='acommodationQuality'
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label htmlFor='' className='label-radio'>
                        2/5
                      </label>
                      <input
                        type='radio'
                        id='acommodationQuality2'
                        defaultChecked={acommodationQuality === '2'}
                        value='2'
                        name='acommodationQuality'
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label htmlFor='' className='label-radio'>
                        3/5
                      </label>
                      <input
                        type='radio'
                        id='acommodationQuality3'
                        defaultChecked={acommodationQuality === '3'}
                        value='3'
                        name='acommodationQuality'
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label htmlFor='' className='label-radio'>
                        4/5
                      </label>
                      <input
                        type='radio'
                        id='acommodationQuality4'
                        defaultChecked={acommodationQuality === '4'}
                        value='4'
                        name='acommodationQuality'
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label htmlFor='' className={styles['label-radio']}>
                        5/5
                      </label>
                      <input
                        type='radio'
                        id='acommodationQuality5'
                        defaultChecked={acommodationQuality === '5'}
                        value='5'
                        name='acommodationQuality'
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </section>
              </section>
            </div>
            <div className={styles['modal-content__buttons-modal']}>
              <button
                onClick={() => setResetFilters()}
                className='button__link'
                type='button'
              >
                {t('Reset')} {t('Filters')}
              </button>
              <button type='submit'>
                {t('Apply')} {t('Filters')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalFiltersTrips;
