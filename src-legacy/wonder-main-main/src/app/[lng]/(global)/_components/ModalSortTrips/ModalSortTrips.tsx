'use client';
import React, { useMemo, useState } from 'react';
import styles from './ModalSortTrips.module.scss';
import Image from 'next/image';
import useQueryParams from '@hooks/useQueryParams';
import Modal from '@components/Modal/Modal';
import { useTranslation } from '@i18n-client';

interface IFormSortTrips {
  price: string;
  label: string;
}

const ModalSortTrips = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const initFilters = {
    price: 'asc',
    label: 'asc',
  };

  const { queryParams, setQueryParams } = useQueryParams();
  const objectSearchParams = useMemo(() => {
    const object: IFormSortTrips = Object.create(null);
    Object.keys(initFilters).forEach((key) => {
      const valueParam = queryParams.get(key);
      if (valueParam) {
        object[key as keyof typeof initFilters] = valueParam;
      }
    });
    return object;
  }, [queryParams]);

  const { label, price } = objectSearchParams;
  const [formData, setFormData] = useState<IFormSortTrips>(objectSearchParams);
  const { t: trans } = useTranslation(undefined);
  const t = (key: string) => trans('ModalSortTrips.' + key);
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
    onClose();
  };

  const onFilter = (sort: IFormSortTrips) => {
    setQueryParams(sort);
  };

  return (
    <Modal open={isOpen}>
      <div className={`modal ${styles['modal-sort__modal']}`}>
        <button
          className={`${styles['modal__modal-close']}`}
          onClick={onClose}
          name='Boton para cerrado de modal'
        >
          <Image
            width={30}
            height={30}
            alt='close'
            src='/assets/icons/close.svg'
          />
        </button>
        <h1 className={styles['modal__modal-title']}>{t('Sort by')}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setApplyFilters();
          }}
        >
          <div className={`modal-content ${styles['modal__modal-content']}`}>
            <div className={styles['modal-content__modal-filters-trips']}>
              <section className={styles['modal-filters-trips__wrap']}>
                <section className={styles['wrap__section']}>
                  <h3>{t('Price')}</h3>
                  <div className={styles['section__inputs-groups']}>
                    <div>
                      <label htmlFor='priceAsc'>{t('Minor')}</label>
                      <input
                        defaultChecked={price === 'asc'}
                        type='radio'
                        id='priceAsc'
                        value='asc'
                        name='price'
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label htmlFor='priceDesc'>{t('Major')}</label>
                      <input
                        type='radio'
                        id='priceDesc'
                        defaultChecked={price === 'desc'}
                        value='desc'
                        name='price'
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </section>

                <section
                  className={`${styles['wrap__section']} ${styles['wrap__last']}`}
                >
                  <h3>{t('Name')}</h3>
                  <div className={styles['section__inputs-groups']}>
                    <div>
                      <label htmlFor='labelAsc'>{t('Asc')}</label>
                      <input
                        type='radio'
                        defaultChecked={label === 'asc'}
                        id='labelAsc'
                        value='asc'
                        name='label'
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <label htmlFor='labelDesc'>{t('Desc')}</label>
                      <input
                        type='radio'
                        id='labelDesc'
                        defaultChecked={label === 'desc'}
                        value='desc'
                        name='label'
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </section>
              </section>
            </div>
            <div className={styles['modal-content__buttons-modal']}>
              <button>
                {t('Apply')} {t('Sort')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalSortTrips;
