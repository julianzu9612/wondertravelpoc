import CategoryFilter from '@components/CategoryFilter/CategoryFilter';
import FiltersMenu from '../../(global)/_components/FiltersMenu/FiltersMenu';
import Footer from '@components/footer/Footer';
import GridTrips from '@components/GridTrips/GridTrips';
import { IProductTrip } from '@components/GridTrips/GridTrips.model';
// import SearchTrip from '@components/SearchTrip/SearchTrip';
import { getTripsData } from '@services/getTripsData';
import { CPagination, CWonderLines } from '../../../../constants';
import { useTranslation } from '../../../i18n';
import { IVertical } from './page.model';
import styles from './page.module.scss';
import SearchTrip from '@components/SearchTrip/SearchTrip';
import { UseSortTrip } from '../../(global)/_utilities/useSort';
import { UseAddaptedCountries } from '../../(global)/_utilities/useAddaptedCountriesTrips';
import { useGetMaxDays } from '../../(global)/_utilities/useGatMaxDaysTrips';
import { useAddaptedTags } from '../../(global)/_utilities/useAddaptedTags';

export default async function Lines({
  params: { lng },
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
    tags,
    countries,
  },
}: IVertical) {
  const sort = UseSortTrip({ label, price });
  //services to get tags and countries
  const { countriesAddapted, countriesService } = await UseAddaptedCountries({
    queryCountry: countries,
    lng,
  });

  //params of the page category
  const searchParams = {
    countries: countriesAddapted,
    offset: offset.toString(),
    limit: limit.toString(),
    price_min: priceMin,
    price_max: priceMax,
    product_type: productType,
    sort,
    duration,
    physical_performance: physicalPerformance,
    acommodation_quality: acommodationQuality,
    tags,
  };

  const responseData = await getTripsData({
    queryParams: searchParams,
    lang: lng,
  });

  if (!responseData || !responseData.results) {
    return <> not result found </>;
  }

  const { results, count } = responseData;

  const tripsData: IProductTrip[] = results;
  const wonderLineCategory = CWonderLines.find(
    (wonderCategoryData) => wonderCategoryData.landing == '/'
  );
  const pagination = {
    count: count,
    offset: offset,
    limit: limit,
  };
  //get max days of trips
  const maxDays = useGetMaxDays(tripsData);
  const { t } = await useTranslation(lng);
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
                <SearchTrip placeholder='' />
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
