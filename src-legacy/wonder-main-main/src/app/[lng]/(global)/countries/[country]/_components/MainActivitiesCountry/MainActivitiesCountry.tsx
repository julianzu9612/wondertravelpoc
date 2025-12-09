import { useTranslation } from '@i18n-server';
import CarouselCountry from '../CarouselCountry/CarouselCountry';
import TitleCountry from '../TitleCountry/TitleCountry';
import styles from './MainActivities.module.scss';
import { ResGetCountry } from '../../../../../../../../statics/countries';
type IMainActivities = ResGetCountry['mainActivities'];
interface IMainActivitiesCountry extends IMainActivities {
  lng: string;
}
const MainActivitiesCountry = async ({
  description,
  images,
  lng,
}: IMainActivitiesCountry) => {
  const { t } = await useTranslation(lng, 'countries');
  return (
    <section className={styles.mainActivities}>
      <TitleCountry title={t('Main Activities')} />
      <p>{description}</p>
      <div className={styles['mainActivities__images']}>
        <CarouselCountry images={images} />
      </div>
    </section>
  );
};

export default MainActivitiesCountry;
