/**
 * deprecated mon/15/04/2024 
 */

import styles from './SectionTravelStyles.module.scss';
import stylestravel from '@components/TravelStyles/TravelStyles.module.scss';
import { useTranslation } from '@i18n-server';
//services
//components
import TargetTravelStyle from '@components/TravelStyles/TargetTravelStyle/TargetTravelStyle';
import TravelStyles from '@components/TravelStyles/TravelStyles';
import Link from 'next/link';

const ReasonToBuy = async ({ lng }: { lng: string }) => {
  // const travelStyles = await GetTravelStyles();
  const reasonToBuy = [
    {
      id: 1,
      description: 'Descubre las Joyas Ocultas de Latinoamérica',
      image_url: '/assets/images/bannerOurPartners.webp',
      label: '',
      name: '',
    },
    {
      id: 2,
      description: 'Vive y Viaja como un Local',
      image_url: '/assets/images/homepage/cano-cristales.jpg',
      label: '',
      name: '',
    },
    {
      id: 3,
      image_url: '/assets/images/homepage/homepage-impacto1.png',
      label: '',
      name: '',
      description: 'Transforma Vidas y Genera un Impacto Positivo Duradero',
    },
  ];
  const { t } = await useTranslation(lng, 'home');

  return (
    <section className={styles['categories']}>
      <TravelStyles>
        <div className={stylestravel['content__texts']}>
          <h2
            className={stylestravel['texts__title']}
            dangerouslySetInnerHTML={{
              __html: t('why-us.title'),
            }}
          />
          <p>{t('why-us.description')}</p>
        </div>

        <>
          {reasonToBuy?.map((infoTargetStyle, index: number) => (
            <TargetTravelStyle
              t={t}
              {...infoTargetStyle}
              key={index}
              lng={lng}
            />
          ))}
        </>

        <div className={styles['categories__ctas']}>
          <Link
            href={`/${lng}/search?utm_source=website&amp;utm_medium=why-us-section&amp;utm_campaign=datatracking`}
            data-id='view-search-from-why-us'
          >
            <button className={`${styles['']}`}>{t('why-us.cta')}</button>
          </Link>
          <a
            href='https://wondertravelplanner.paperform.co'
            target='_blank'
            data-id='home-go-paperform'
            rel='noreferrer'
          >
            <button className={`secondary ${styles['']}`}>
              {t('why-us.cta-2')}
            </button>
          </a>
          <a
            href='https://pages.wondertravel.co/wondergpt-beta'
            target='_blank'
            data-id='home-go-gpt-test'
            rel='noreferrer'
          >
            <button className={`ghost ${styles['']}`}>
              {t('why-us.cta-3')}
            </button>
          </a>
        </div>
      </TravelStyles>
    </section>
  );
};

export default ReasonToBuy;
