import { getTripsData } from '@services/getTripsData';
import styles from './page.module.scss';
import { useTranslation } from '@i18n-server';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  CReviews,
  CWonderImpactItems,
  CWonderSponsors,
} from '../../../../constants';

export async function generateMetadata() {
  return {
    title: 'Wonder Travel | Small group travel in South America',
    description: '#ViajaAlMomento con Wonder travel',
    openGraph: {
      title: 'Wonder Travel | Small group travel in South America',
      description: '#ViajaAlMomento con Wonder travel',
      images: ['https://cdn.wondertravel.co/seo/main.png'],
    },
  };
}
const HomepageTabsContent = dynamic(
  () => import('@components/HomepageTabsContent/HomepageTabsContent')
);
const WonderImpactCounter = dynamic(
  () => import('@components/WonderImpactCounter/WonderImpactCounter')
);
const WonderSponsors = dynamic(
  () => import('@components/WonderSponsors/WonderSponsors')
);
const Footer = dynamic(() => import('@components/footer/Footer'));
const SearchTrip = dynamic(() => import('@components/SearchTrip/SearchTrip'));
const SocialProof = dynamic(
  () => import('@components/socialProof/SocialProof')
);

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {

  const [responseData, { t }] = [
    await getTripsData({
      lang: lng,
      queryParams: { limit: '8' },
    }),
    await useTranslation(lng),
  ];


  if (!responseData || !responseData.results) {
    return <> not result found </>;
  }

  const { results } = responseData;

  return (
    <>
      <section className={styles['homepage']}>
        <section
          className={`${styles['top-section']} mask-dark-gradient header-fixed-space`}
        >
          <Image
            src={'/assets/images/calendar/top-banner-calendar.jpg'}
            alt='banner home'
            fill
            width={undefined}
            height={undefined}
            quality={75}
            loading='lazy'
          />
          <div className={`wonder-grid ${styles['section-content']}`}>
            <div className={styles['inner-content']}>
              <div className={styles['main-info']}>
                <h1
                  dangerouslySetInnerHTML={{
                    __html: t('Enriching the travel experience'),
                  }}
                />
                <p>{t('homeDescription')}</p>
                <div className={styles['search-wrap']}>
                  {/* <Link href='/lines'>
                    <button data-id='Cta-hero_join-a-trip'>
                      {t('JoinATrips')}
                    </button>
                  </Link> */}
                  <SearchTrip placeholder={''} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {results && <HomepageTabsContent initTab={1} allTrips={results} />}
        <section className={styles['social-proof-wrap']}>
          <section className='wonder-grid'>
            <SocialProof reviews={CReviews} />
          </section>
        </section>
        <WonderImpactCounter wonderImpactItems={CWonderImpactItems} t={t} />
        <WonderSponsors wonderSponsors={CWonderSponsors} t={t} />
      </section>
      <Footer lng={lng} />
    </>
  );
}
