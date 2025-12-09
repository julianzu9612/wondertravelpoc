import { CPagination } from '../../../../constants';
import styles from './page.module.scss';
import { useTranslation } from '../../../i18n';
import { ISearchPage } from './page.model';
import FiltersSearch from '../_components/FiltersSearch/FilterSearch';
import Loading from '@components/Loading/Loading';
import dynamic from 'next/dynamic';
import Footer from '@components/footerV2/Footer';
import { getMetaTag } from './__actions/getMetaTag';
import ScrollInfiniteTrips from './_components/ScrollInfiniteTrips/ScrollInfiniteTrips';
import { Suspense } from 'react';

const FilterDeals = dynamic(
  () => import('./_components/FilterDeals/FilterDeals'),
  { ssr: false }
);

export async function generateMetadata(params: ISearchPage) {
  const metaTag = await getMetaTag(params);
  return metaTag;
}

export default async function PageSearch({
  params: { lng },
  searchParams: { offset = 0, limit = +CPagination.limit, ...restQueryParams },
}: ISearchPage) {
  const { hasDiscount } = restQueryParams;
  const { t } = await useTranslation(lng, 'search');
  const pagination = {
    count: 0,
    offset,
    limit,
  };

  return (
    <>
      <section className={styles['homepage']}>
        <div className={styles.homepage__content}>
          <section className={styles['section-page-grid']}>
            <div className={styles['section-page-grid__title']}>
              <h1>{t(hasDiscount ? 'Last minute deals' : 'Find your trip')}</h1>
              <div className={styles.title__filters}>
                <FilterDeals dealsQuery={hasDiscount} />
              </div>
            </div>
            <Suspense fallback={<Loading />}>
              <ScrollInfiniteTrips
                pagination={pagination}
                queryParams={restQueryParams}
                lng={lng}
              />
            </Suspense>
          </section>
          <FiltersSearch lng={lng} queryParams={restQueryParams} />
        </div>
      </section>
      <Footer lng={lng} />
    </>
  );
}
