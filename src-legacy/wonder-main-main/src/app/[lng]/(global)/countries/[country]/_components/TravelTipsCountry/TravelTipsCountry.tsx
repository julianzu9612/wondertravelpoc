import { useTranslation } from '@i18n-server';
import TitleCountry from '../TitleCountry/TitleCountry';
import styles from './TravelTipsCountry.module.scss';
import { ResGetCountry } from '../../../../../../../../statics/countries';

const TravelTipsCountry = async ({
  tips,
  lng,
}: {
  tips: ResGetCountry['tips'];
  lng: string;
}) => {
  const { t } = await useTranslation(lng, 'countries');
  return (
    <>
      <section className={styles['travel-tips']}>
        <TitleCountry title={t('Travel Tips')} />
        <ul className={styles['travel-tips__list']}>
          {tips.map((value, i) => (
            <li key={i}>{value}</li>
          ))}
        </ul>
        <hr className={styles['travel-tips__hr']} />
      </section>
    </>
  );
};

export default TravelTipsCountry;
