// components
import HeroBannerDestinations from './_components/HeroBannerDestinations/HeroBannerDestinations';
import OurPartners from './_components/OurPartners/OurPartners';
import WeWork from './_components/WeWork/WeWork';
import SocialProof from './_components/SocialProof/SocialProof';
import Footer from '@components/footerV2/Footer';
import GoogleReview from './_components/googleReview/GoogleReview';
import ManyTravelers from './_components/manyTravelers/ManyTravelers';
import { useTranslation } from '@i18n-server';
import PersonalizedTrip from './_components/personalizedTrip/PersonalizedTrip';
import LogFbEvent from '@components/logFbEvent/LogFbEvent';
import CardsDates from './_components/cardsDates/CardsDates';

interface HomeParams {
  params: { lng: string };
}
export async function generateMetadata({ params: { lng } }: HomeParams) {
  const { t } = await useTranslation(lng, 'metaTags');
  const trans = (value: string) =>
    t('metaTagHome.' + value, { defaultValue: value });
  const title = trans('Explore South America | Wonder Travel');
  const description = trans(
    'Experience the true spirit of South America with Wonder Travels small group, eco-friendly trips. Book your journey today!'
  );
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

export default async function Home({ params: { lng } }: HomeParams) {
  const { t } = await useTranslation(lng, 'home');

  return (
    <>
      <main>
        <HeroBannerDestinations lng={lng} />
        <CardsDates t={t} />
        <GoogleReview />
        <ManyTravelers t={t} />
        <PersonalizedTrip t={t} lng={lng} />
        <WeWork lng={lng} />
        <SocialProof lng={lng} />
        <OurPartners lng={lng} />
        <LogFbEvent eventName='entry_home' />
      </main>
      <Footer lng={lng} />
    </>
  );
}
