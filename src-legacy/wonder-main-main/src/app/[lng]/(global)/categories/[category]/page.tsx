import dynamic from 'next/dynamic';
import Image from 'next/image';
//styles
import styles from './page.module.scss';
//services
import { getTripsData } from '@services/getTripsData';
//utils
import { UseSortTrip } from '../../_utilities/useSort';
import { useGetMaxDays } from '../../_utilities/useGatMaxDaysTrips';
import { useAddaptedTags } from '../../_utilities/useAddaptedTags';
import { UseAddaptedCountries } from '../../_utilities/useAddaptedCountriesTrips';
import { useTranslation } from '@i18n-server';
//const
import { CPagination, CWonderCategoryData } from '../../../../../constants';
//models
import { ICategory } from './page.model';
//components
import { IWonderLineCategory } from '@components/CategoryFilter/CategoryFilter.model';
import Footer from '@components/footer/Footer';
import CategoryFilter from '@components/CategoryFilter/CategoryFilter';
import GridTrips from '@components/GridTrips/GridTrips';
import { getCurrencyCookie } from '../../../../actions';
const FiltersMenu = dynamic(
  () => import('../../_components/FiltersMenu/FiltersMenu'),
  { ssr: false }
);
export default async function Categories({
  params: { lng, category },
  searchParams: {
    offset = 0,
    limit = CPagination.limit,
    priceMin,
    priceMax,
    productType,
    duration,
    physicalPerformance,
    acommodationQuality,
    tags,
    price,
    label,
    countries,
  },
}: ICategory) {
  category = decodeURIComponent(category);
  const sort = UseSortTrip({ label, price });
  //services to get tags and countries
  const { TagsAddaptToListCheck, randomTags } = await useAddaptedTags(lng);

  const { countriesAddapted, countriesService } = await UseAddaptedCountries({
    queryCountry: countries,
    lng,
  });
  const findTag = TagsAddaptToListCheck.find((tag) => tag.name === category);
  const currency = await getCurrencyCookie();
  //params of the page category\

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
    category: category,
    lang: lng,
    currency: currency,
  };

  const responseTripsData = await getTripsData({
    queryParams: searchParams,
    lang: lng,
  });

  if (!responseTripsData) {
    return <p>no result found</p>;
  }
  
  const {results, count} = responseTripsData;

  const pagination = {
    count,
    offset,
    limit,
  };

  let infoTag: IWonderLineCategory | undefined = CWonderCategoryData.find(
    (wonderCategoryData) => wonderCategoryData.url == `/${category}`
  );
  if (findTag) {
    infoTag = findTag;
  }
  const { t } = await useTranslation(lng, 'categories');
  const trans = (value: string) => t('campaigns.' + value);
  //get max days of trips
  const maxDays = useGetMaxDays(results);

  const optionsCategory = {
    'black-weeks': '',
    'wishlist-wonder': '',
    'book-now-pay-later': (
      <p>{trans('Secure your travel dates now with $0 deposit!')}</p>
    ),
    'viaja-con-zeppelin-y-wonder': <p>{trans('zeppelin')}</p>,
    'aniversario-wonder': (
      <p>{trans('Your passport to Colombia during Holy Week')}</p>
    ),
  };
  const keysOptionsCategories = Object.keys(optionsCategory);
  const title = infoTag ? t(infoTag?.label) : category;
  const bkgSection = infoTag?.image;
  const categoryKey = category as keyof typeof optionsCategory;
  return (
    <>
      <section className={styles['categories-page']}>
        <section
          className={`${styles['top-section']} mask-dark-gradient header-fixed-space`}
        >
          {bkgSection && (
            <Image
              src={bkgSection}
              alt='bkg section'
              fill
              priority
              sizes='(max-width: 768px) 65vw, (max-width: 1200px) 90vw, 50vw'
              style={{ objectFit: 'cover' }}
            />
          )}
          <div className={styles['background-gradient']}></div>
          <div className={`wonder-grid ${styles['section-content']}`}>
            <div className={styles['inner-content']}>
              <div className={styles['main-info']}>
                {!keysOptionsCategories.includes(category) ? (
                  <>
                    <h1>{title}</h1>
                    <p>
                      {t(
                        'Find the best activities in the itineraries has for you!'
                      )}
                    </p>
                  </>
                ) : (
                  <>
                    <h1>{title}</h1>
                    <section className={styles['coupon']}>
                      {optionsCategory[categoryKey]}
                    </section>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className='wonder-grid' id='main-content'>
          <section className={styles['section-page-filter']}>
            <FiltersMenu maxDays={maxDays} countriesPage={countriesService} />
          </section>
          <section className={styles['section-page']}>
            <GridTrips
              isCategories
              tripsData={results}
              pagination={pagination}
              mobileBehavior='listing-simple-card'
              t={t}
              lng={lng}
            />
          </section>
          <section className={styles['section-page']}>
            <h3 className={styles['h3']}>{t('More experiences')}</h3>
            <CategoryFilter wonderLineCategories={randomTags} />
          </section>
        </section>
      </section>
      <Footer lng={lng} />
    </>
  );
}
