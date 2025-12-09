import Link from 'next/link';
import TitleCountry from '../TitleCountry/TitleCountry';
import styles from './EntryRequirementsCountry.module.scss';
import { useTranslation } from '@i18n-server';
import { CommonProps } from '../../page.model';
import { ResGetCountry } from '../../../../../../../../statics/countries';
type IEntryRequirementsInfo = ResGetCountry['entryRequirements'];
interface IEntryRequirements extends IEntryRequirementsInfo, CommonProps {
  lng: string;
}
const EntryRequirements = async ({
  requirements,
  linkMoreInformation,
  lng,
  countryLabel,
}: IEntryRequirements) => {
  const entriesInfo = Object.entries(requirements);
  const { t } = await useTranslation(lng, 'countries');
  return (
    <section className={styles['entry-requirements']}>
      <div className={styles['entry-requirements__description']}>
        <TitleCountry title={t('entryRequirements.title')} />
        <p>{t('entryRequirements.description', { country: countryLabel })} </p>
        <ul className={styles['description__list']}>
          {entriesInfo.map(([key, value], i) => (
            <li key={i}>
              <span>{key}: </span>
              {value}
            </li>
          ))}
        </ul>
        <div className={styles['description__more-info']}>
          <p>{t('entryRequirements.moreInfoDescription')}</p>
          {linkMoreInformation && (
            <Link href={linkMoreInformation} target='_blank' rel='noreferrer'>
              {t('entryRequirements.moreInfoLink')}{' '}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default EntryRequirements;
