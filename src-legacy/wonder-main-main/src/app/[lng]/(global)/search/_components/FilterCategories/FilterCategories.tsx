'use client';
import { IFilterCategories } from './FilterCategories.model';
import { useState } from 'react';
import ListCheckbox from '@components/ListCheckbox/ListCheckbox';
import styles from './FilterCategories.module.scss';
import useUpdateQueryParamList from '../../_hooks/useUpdateQueryParamList';
import { useTranslation } from '@i18n-client';
const FilterCategories = ({ categories }: IFilterCategories) => {
  const { t } = useTranslation(undefined, 'search');
  const { eventQueryParam, getQueryParam } = useUpdateQueryParamList('tags');
  const [showMore, setShowMore] = useState(false);
  const changeShowMore = () => {
    setShowMore(!showMore);
  };
  const checkInfoCategories = categories.map(({ ...info }) => ({
    ...info,
    checked: getQueryParam?.includes(info.value),
  }));
  const sliceCategories = checkInfoCategories.slice(0, 4);

  return (
    <div className={styles.filterCategories}>
      <ListCheckbox
        name='tags'
        listCheck={showMore ? checkInfoCategories : sliceCategories}
        onChange={eventQueryParam}
      />
      <button onClick={changeShowMore}>
        {showMore ? t('view less') : t('view all')}
      </button>
    </div>
  );
};

export default FilterCategories;
