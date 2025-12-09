import dynamic from 'next/dynamic';
//styles
import styles from './page.module.scss';
//services
import { getTripsData } from '@services/getTripsData';
//utils
import { UseSortTrip } from '../../_utilities/useSort';
import { useGetMaxDays } from '../../_utilities/useGatMaxDaysTrips';
import { UseAddaptedCountries } from '../../_utilities/useAddaptedCountriesTrips';
import { useTranslation } from '@i18n-server';
//conts
import { CPagination } from '../../../../../constants';
//models
import { ICategory } from './page.model';
import CategoryFilter from '@components/CategoryFilter/CategoryFilter';
import Footer from '@components/footer/Footer';
import GridTrips from '@components/GridTrips/GridTrips';
import Image from 'next/image';
import addapttedToLineTravelStyles from '../_utils/addapttedToLineTravelStyle';
import NotFound from '../../../(itinerary)/trips/[slugName]/not-found';
import { getCurrencyCookie } from '../../../../actions';
//components
const FiltersMenu = dynamic(
  () => import('../../_components/FiltersMenu/FiltersMenu'),
  { ssr: false }
);

export default async function PageTravelStyles({
  params: { lng, travelStyle },
  searchParams: {
    offset = 0,
    limit = +CPagination.limit,
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
  travelStyle = decodeURIComponent(travelStyle);
  const sort = UseSortTrip({ label, price });
  //services to get tags and countries
  const { addaptedToLineTravelStyle, travelStyles } =
    await addapttedToLineTravelStyles();
  const findTravelStyle = travelStyles.find(({ name }) => name === travelStyle);
  const { countriesAddapted, countriesService } = await UseAddaptedCountries({
    queryCountry: countries,
    lng,
  });
  const currency = await getCurrencyCookie();

  if (findTravelStyle) {
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
      travel_style: travelStyle,
      lang: lng,
      currency,
    };
    const responseData = await getTripsData({
      queryParams: searchParams,
      lang: lng,
    });
    
    
    if (
      !responseData ||
    !responseData.results
    ) {
      return <> not result found </>;
    }

    const { results, count } = responseData;

    const pagination = {
      count: count,
      offset: offset,
      limit: limit,
    };

    const { t } = await useTranslation(lng, 'translation');
    //get max days of trips
    const maxDays = useGetMaxDays(results);
    return (
      <>
        <section className={styles['travel-style']}>
          <section
            className={`${styles['top-section']} mask-dark-gradient header-fixed-space`}
          >
            <Image
              src={findTravelStyle.image_url}
              alt={findTravelStyle.description}
              fill
              sizes='100vw'
              quality={100}
              style={{
                objectFit: 'cover',
              }}
            />
            <div className={styles['background-gradient']}></div>

            <div className={`wonder-grid ${styles['section-content']}`}>
              <div className={styles['inner-content']}>
                <div className={styles['main-info']}>
                  <h1>{t(`${findTravelStyle.label}`)}</h1>
                  <p>{findTravelStyle.description}</p>
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
              <CategoryFilter
                t={t}
                wonderLineCategories={addaptedToLineTravelStyle}
              />
            </section>
          </section>
        </section>
        <Footer lng={lng} />
      </>
    );
  } else {
    return NotFound();
  }
}
