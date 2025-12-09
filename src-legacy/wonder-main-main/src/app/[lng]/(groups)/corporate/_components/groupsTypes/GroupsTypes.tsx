import styles from './GroupsTypes.module.scss';
import { TFunction } from 'i18next';

interface GroupsTypesProps {
  t: TFunction;
}

const GroupsTypes = ({ t }: GroupsTypesProps) => {
  return (

    <div className={styles['groups-types']}>
      <h2 className={styles['groups-types__title']}>
        {t('groupsTypes.title.what')} <br />{' '}
        <span>{t('groupsTypes.title.wonderGroups')}</span>
      </h2>
      <p className={styles['groups-types__description']}>
        {t('groupsTypes.description')}
      </p>
      <ul className={styles['groups-types__types']}>
        <li>
          <span>{t('groupsTypes.universityGroups.title')}</span>
          {t('groupsTypes.universityGroups.description')}
        </li>
        <li className={styles['types__list']}>
          {t('groupsTypes.list.mba')} <br />
          {t('groupsTypes.list.llm')} <br />
          {t('groupsTypes.list.other')} <br />
        </li>
      </ul>
    </div>
  );
};

export default GroupsTypes;
