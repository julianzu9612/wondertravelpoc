import CategoryFilter from '@components/CategoryFilter/CategoryFilter';
import FiltersMenu from '../../../(global)/_components/FiltersMenu/FiltersMenu';
import Footer from '@components/footer/Footer';
import GridTrips from '@components/GridTrips/GridTrips';
import SearchTrip from '@components/SearchTrip/SearchTrip';
import { getTripsData } from '@services/getTripsData';
import { CPagination, CWonderLines } from '../../../../../constants';
import { useTranslation } from '../../../../i18n';
import { IVertical } from '../page.model';
import styles from '../page.module.scss';
import { UseAddaptedCountries } from '../../../(global)/_utilities/useAddaptedCountriesTrips';
import { UseSortTrip } from '../../../(global)/_utilities/useSort';
import { useGetMaxDays } from '../../../(global)/_utilities/useGatMaxDaysTrips';
import { useAddaptedTags } from '../../../(global)/_utilities/useAddaptedTags';

export default async function Lines({
  params: { lng, vertical },
  searchParams: {
    offset = 0,
    limit = CPagination.limit,
    priceMin,
    priceMax,
    duration,
    physicalPerformance,
    acommodationQuality,
    price,
    label,
    productType,
    countries,
    tags,
  },
}: IVertical) {
  const sort = UseSortTrip({ label, price });

  const { countriesService } = await UseAddaptedCountries({
    lng,
  });

  const searchParams = {
    tags,
    offset: offset.toString(),
    limit: limit.toString(),
    price_min: priceMin,
    price_max: priceMax,
    sort,
    product_type: productType,
    product_acommodation_quality: acommodationQuality,
    duration,
    product_physical_performance: physicalPerformance,
    countries: countries,
  };

  const responseData = await getTripsData({
    queryParams: searchParams,
    lang: lng,
  });

  if (!responseData || !responseData.results) {
    return <> not result found </>;
  }

  const { results: tripsData, count } = responseData;

  const wonderLineCategory = CWonderLines.find(
    (wonderCategoryData) => wonderCategoryData.landing == `/${vertical}`
  );
  const pagination = {
    count: count,
    offset: offset,
    limit: limit,
  };
  const { t } = await useTranslation(lng);
  const maxDays = useGetMaxDays(tripsData);
  const { randomTags } = await useAddaptedTags(lng, {
    quantityCategory: 4,
  });

  return (
    <>
      <section className={styles['vertical-page']}>
        <section
          className={`${styles['top-section']} mask-dark-gradient header-fixed-space`}
          style={{ backgroundImage: `url(${wonderLineCategory?.image})` }}
        >
          <div className={`wonder-grid ${styles['section-content']}`}>
            <div className={styles['inner-content']}>
              <div className={styles['main-info']}>
                <h1>{t(`${wonderLineCategory?.label}`)}</h1>
                <p>{t(`${wonderLineCategory?.headline}`)}</p>
                <div className={styles['search-wrap']}>
                  <SearchTrip placeholder={t('Search your trip')} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='wonder-grid' id='main-content'>
          {process.env.NODE_ENV === 'development' && (
            <section className={styles['section-page']}>
              <CategoryFilter wonderLineCategories={randomTags} t={t} />
            </section>
          )}
          <section className={styles['section-page-filter']}>
            <FiltersMenu maxDays={maxDays} countriesPage={countriesService} />
          </section>
          <section className={styles['section-page-grid']}>
            <GridTrips
              isCategories
              tripsData={tripsData}
              pagination={pagination}
              mobileBehavior='listing-simple-card'
              t={t}
              lng={lng}
            />
          </section>
        </section>
      </section>
      <Footer lng={lng} />
    </>
  );
}
