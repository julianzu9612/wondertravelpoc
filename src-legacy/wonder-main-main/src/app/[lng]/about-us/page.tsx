import Image from 'next/image';
import styles from './page.module.scss';
import TravelingChangedLives from './_components/TravelingChangedLives/TravelingChangedLives';
import WhyWonderTravel from './_components/WhyWonderTravel/WhyWonderTravel';
import Testimonials from './_components/Testimonials/Testimonials';
import Certificates from './_components/Certificates/Certificates';
import { useTranslation } from '@i18n-server';
export interface ParamsSearch {
  params: {
    lng: string;
  };
}
export async function generateMetadata({ params: { lng } }: ParamsSearch) {
  const { t } = await useTranslation(lng, 'metaTags');
  const trans = (value: string) =>
    t('metaTagAboutUs.' + value, { defaultValue: value });
  const title = trans('Who We Are | Wonder Travel');
  const description = trans(
    'Find out what makes Wonder Travel unique Visit our About Us page to see how our passion for travel transforms your experiences'
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
const AboutUs = async ({ params: { lng } }: ParamsSearch) => {
  const { t } = await useTranslation(lng, 'aboutUs');
  return (
    <div className={styles.about}>
      <section className={`${styles.about__banner} mask-dark-gradient`}>
        <Image
          src={'/assets/images/aboutUs/paisesCategoria.jpg'}
          alt=''
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
        />
        <div className={styles.banner__texts}>
          <h1 className={styles.texts__title}>{t('About Us')}</h1>
          <p className={styles.texts__description}>{t('description')}</p>
        </div>
      </section>
      <div className={styles.about__content}>
        <TravelingChangedLives lng={lng} />
        <WhyWonderTravel lng={lng} />
        <Testimonials lng={lng} />
        <Certificates lng={lng} />
      </div>
    </div>
  );
};

export default AboutUs;
