// import dynamic from 'next/dynamic';
//styles
import styles from './HeroBannerDestinations.module.scss';
//models
import { optionI } from '@components/select/Select.model';
//services
import { useTranslation } from '@i18n-server';
import { UseAddaptedCountries } from '../../../(global)/_utilities/useAddaptedCountriesTrips';

//components
import DestinationsSearch from './DestinationsSearch/DestinationsSearch';
import LazyVideo from './video';

const HeroBannerDestinations = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'home');
  const trans = (value: string) =>
    t('heroBannerDestinations.' + value, { defaultValue: value });
  const { countriesService } = await UseAddaptedCountries({ lng });

  const countriesSelect: optionI[] = countriesService.map(
    ({ name, label }) => ({
      value: name,
      label,
    })
  );

  return (
    <section className={`${styles['top-section']} `}>
      <LazyVideo
        className={styles['top-section__video']}
        poster='/assets/images/captureVideo.webp'
        src='/assets/video-hero.mp4'
      />
      <div className={`wonder-grid ${styles['top-section__content']}`}>
        <div className={styles['content__inner-content']}>
          <h1
            dangerouslySetInnerHTML={{
              __html: trans('Enriching the travel experience'),
            }}
          />
        </div>
        <div className={`${styles['content__main-info']}`}>
          <DestinationsSearch destinations={countriesSelect} lng={lng} />
          <button className={`secondary-light ${styles['content__btn']}`}>
            {t('Scroll to know more')} <br />
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerDestinations;
