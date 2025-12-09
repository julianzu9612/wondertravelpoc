import Image from 'next/image';
import Link from 'next/link';
// styles
import styles from './page.module.scss';
// utils
import { useTranslation } from '../../../../i18n';
import { UseAddaptedCountries } from '../../_utilities/useAddaptedCountriesTrips';
import { GetCountry } from './actions/GetCountryAction';
//models
import { ICategory } from './page.model';
// components
import AboutCountry from './_components/AboutCountry/AboutCountry';
import MainActivitiesCountry from './_components/MainActivitiesCountry/MainActivitiesCountry';
import EntryRequirements from './_components/EntryRequirementsCountry/EntryRequirements';
import TravelTipsCountry from './_components/TravelTipsCountry/TravelTipsCountry';
import BasicCountry from './_components/BasicCountry/BasicCountry';
import Footer from '@components/footerV2/Footer';
import { ResGetCountry } from '../../../../../../statics/countries';
import PersonalizedAdvise from './_components/PersonalizedAdvise/PersonalizedAdvise';
import dynamic from 'next/dynamic';
const BlogsCountry = dynamic(
  () => import('./_components/BlogsCountry/BlogsCountry')
);
const TripsCountry = dynamic(
  () => import('./_components/TripsCountry/TripsCountry')
);
interface CountriesParams {
  params: ICategory['params'];
}
export async function generateMetadata({
  params: { lng, country },
}: CountriesParams) {
  const { t } = await useTranslation(lng, 'metaTags');
  const trans = (value: string) =>
    t(`metaTag_${country}.` + value, { defaultValue: value });
  const title = trans('title');
  const description = trans('description');
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ['https://cdn.wondertravel.co/seo/main.png'],
    },
  };
}
export default async function Categories({
  params: { lng, country },
}: CountriesParams) {
  country = decodeURIComponent(country);
  const { countryInfo } = await UseAddaptedCountries({
    country,
    lng,
  });

  const { t } = await useTranslation(lng, 'countries');

  const getCountry = await GetCountry(lng, country);
  if (getCountry) {
    const {
      aboutCountry,
      mainActivities,
      entryRequirements,
      tips,
      informationBasic,
    }: ResGetCountry = getCountry;
    const commonProps = {
      countryName: countryInfo?.name || '',
      lng,
      countryLabel: countryInfo?.label || '',
      countryCode: countryInfo?.iso_code || '',
    };
    const { countryLabel, countryName } = commonProps;

    return (
      <>
        <section className={styles['categories-page']}>
          <section
            className={`${styles['categories-page__top-section']}  header-fixed-space`}
          >
            {countryInfo?.image_url && (
              <Image
                alt='bkg section'
                fill
                sizes='(max-width: 768px) 65vw, (max-width: 1200px) 90vw, 50vw'
                src={countryInfo?.image_url}
                priority
                style={{ objectFit: 'cover' }}
              />
            )}
            <div className={styles['top-section__main-info']}>
              <h1>
                {t('Discover The Incredible Wonders Of Country', {
                  country: countryInfo?.label || country,
                })}
              </h1>
              <Link href={`/${lng}/search?countries=${countryInfo?.name}`}>
                {t('View Trips')}
              </Link>
            </div>
          </section>
          <BasicCountry {...informationBasic} />
          <div className={styles['categories-page__content']}>
            <AboutCountry {...aboutCountry} {...commonProps} />
            <TripsCountry
              {...commonProps}
              redirect={`/${lng}/search?countries=${countryName}`}
              countryCode={countryInfo?.iso_code || ''}
              title={t('Trips in Country', { country: countryLabel })}
              hasDiscount={'false'}
              lng={lng}
            />
            <TripsCountry
              {...commonProps}
              redirect={`/${lng}/search?countries=${countryName}&hasDiscount=true`}
              countryCode={countryInfo?.iso_code || ''}
              title={t('Last minute deals in country', {
                country: countryLabel,
              })}
              hasDiscount={'true'}
              lng={lng}
            />
            <PersonalizedAdvise lng={lng} />
            <MainActivitiesCountry {...mainActivities} lng={lng} />
            <EntryRequirements {...entryRequirements} {...commonProps} />
            <TravelTipsCountry tips={tips} lng={lng} />
            <BlogsCountry {...commonProps} />
          </div>
        </section>
        <Footer lng={lng} />
      </>
    );
  } else {
    return (
      <div className={styles['error-page']}>
        <h2>Error</h2>
        <p>{t('Country not found')}</p>
      </div>
    );
  }
}
