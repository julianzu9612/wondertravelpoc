'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './FiltersMenu.module.scss';
import { ItemContent } from '@components/DropdownCheck/DropdownCheck.model';
import { useRouter, useParams, usePathname } from 'next/navigation';
import { UseAddaptedCountries } from '../../_utilities/useAddaptedCountriesTrips';
import { useAddaptedTags } from '../../_utilities/useAddaptedTags';
import { useTranslation } from '@i18n-client';
import DropdownCheck from '@components/DropdownCheck/DropdownCheck';
import ModalFiltersTrips from '../ModalFiltersTrips/ModalFiltersTrips';
import ModalSortTrips from '../ModalSortTrips/ModalSortTrips';

const FiltersMenu = ({
  maxDays = 6,
  countriesPage,
  tagsPage,
}: {
  maxDays?: number;
  tagsPage?: ItemContent[];
  countriesPage?: ItemContent[];
}) => {
  const [toggleOpenModalFilter, setToggleOpenModalFilter] = useState(false);
  const [toggleOpenModalSort, setToggleOpenModalSort] = useState(false);
  const lng = useParams().lng as string;
  const { t } = useTranslation(lng, 'translation');

  const [tags, setTags] = useState<ItemContent[]>(tagsPage || []);
  const [countries, setCountries] = useState<ItemContent[]>(
    countriesPage || []
  );
  useEffect(() => {
    const getData = async () => {
      const { tagsFilter } = await useAddaptedTags(lng);
      setTags(tagsFilter);

      const { countriesService } = await UseAddaptedCountries({ lng });
      setCountries(countriesService);
    };
    getData();
  }, []);
  const { push } = useRouter();
  const route = usePathname();
  return (
    <section className={styles['filters-menu']}>
      <nav>
        <div className={styles.filter}>
          <DropdownCheck
            title={t('filterCountry.title')}
            content={countries}
            queryParam='countries'
          />
          <DropdownCheck
            title={t('filterTravelStyle.title')}
            content={tags}
            queryParam='tags'
          />
          <button
            className='button__grey-outline'
            onClick={() => setToggleOpenModalFilter((prev) => !prev)}
          >
            <Image
              src='/assets/icons/filter.svg'
              width={21}
              height={21}
              alt='Filter'
            />
            {t('ModalFilterTrips.Filters', { defaultValue: 'Filters' })}
          </button>
          <button
            className='button__grey-outline'
            onClick={() => setToggleOpenModalSort((prev) => !prev)}
          >
            <Image
              src='/assets/icons/sort.svg'
              width={21}
              height={21}
              alt='Filter'
            />
            {t('ModalSortTrips.Sort', { defaultValue: 'Sort' })}
          </button>
        </div>
        <button
          className={' button__grey-outline'}
          id={styles['clear-filter']}
          onClick={() => push(route)}
        >
          {t('clear filter')}
        </button>
      </nav>
      <ModalFiltersTrips
        maxDays={maxDays}
        isOpen={toggleOpenModalFilter}
        onClose={() => setToggleOpenModalFilter((prev) => !prev)}
      />
      <ModalSortTrips
        isOpen={toggleOpenModalSort}
        onClose={() => setToggleOpenModalSort((prev) => !prev)}
      />
    </section>
  );
};

export default FiltersMenu;
