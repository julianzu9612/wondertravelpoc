import CategoryFilter from '@components/CategoryFilter/CategoryFilter';
import GridTrips from '@components/GridTrips/GridTrips';
import Link from 'next/link';
// models
import { IHomepageTabsContentTab } from './HomepageTabsContent.model';
// styles
import styles from './HomepageTabsContent.module.scss';
import { useAddaptedTags } from '../../app/[lng]/(global)/_utilities/useAddaptedTags';
import { useTranslation } from '@i18n-server';
import useGetLanguaje from '@hooks/useGetLanguaje';

const HomepageTabsContentTab = async ({
  tab,
  allTrips,
}: IHomepageTabsContentTab) => {
  const lng = useGetLanguaje() + '';
  const { t } = await useTranslation(lng);
  const { randomTags } = await useAddaptedTags(lng, {
    quantityCategory: 8,
  });
  return (
    <section className={styles['tabs-content']}>
      <section className={styles['tabs-content__listing']}>
        <div className={styles['listing__inner-content']}>
          <h2 className={styles['inner-content__title-section']}>
            {t('titleTravelsHome')}
          </h2>
          <GridTrips tripsData={allTrips} t={t} lng={lng} />
        </div>

        <Link
          className='button__primary'
          href={`/${lng}/trips?=type=${tab?.landing}`}
        >
          {t('See all')}
        </Link>
      </section>

      <section className={styles['tabs-content__listing']}>
        <h3 className={styles['listing__title-section']}>
          {t('title_categories')}
        </h3>
        <CategoryFilter wonderLineCategories={randomTags} t={t} />
        <Link className='button__primary' href={`/${lng}/categories/`}>
          {t('See all')}
        </Link>
      </section>
    </section>
  );
};

export default HomepageTabsContentTab;
