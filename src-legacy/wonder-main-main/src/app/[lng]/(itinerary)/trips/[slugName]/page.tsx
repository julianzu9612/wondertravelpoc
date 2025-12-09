// enhacer
import Image from 'next/image';

// models
import type { ItineraryParams } from './Itinerario.model';

//utils
import fetchItineraryData from './_utils/fetchItineraryData';
import createCardPriceProps from './_utils/createCardPrice';

// styles
import styles from './Itinerario.module.scss';

//components
import CardPrice from '@components/cardPrice/CardPrice';
import SummaryItinerary from '@components/summaryItinerary/SummaryItinerary';
import GeneralInformation from '@components/generalInformation/GeneralInformation';
import Impact from './_components/Impact/Impact';
import Policy from './_components/Policy/Policy';
import Recomendations from '@components/recomendations/Recomendations';
import Carousel from '@components/carousel/Carousel';
import Tags from './_components/Tags/Tags';
import Dates from './_components/Dates/Dates';
import Details from './_components/Details/Details';
import SocialProof from '@components/socialProof/SocialProof';
import Price from './_components/Price/Price';
import LogFbEvent from '@components/logFbEvent/LogFbEvent';

export default async function Itinerary({
  params: { slugName = '', lng },
}: {
  params: ItineraryParams;
}) {
  const { infoItinerary, infoCms, t } = await fetchItineraryData(lng, slugName);

  const cardPriceProps = createCardPriceProps(infoItinerary, lng, t);

  const showPriceMobile =
    cardPriceProps.hasBooking ||
    (infoItinerary.uuidWeTravel && infoItinerary.uuidWeTravel.length > 0);

  return (
    <>
      <div className={styles['content-main']}>
        <div className={`${styles['content-main__hero']} wonder-grid`}>
          <h1 className={styles.hero__title}>{infoItinerary.title}</h1>
          <p className={styles.hero__subtitle}>{infoItinerary.subtitle}</p>
          <div className={styles.hero__location}>
            <i>
              <Image
                priority={false}
                src='/assets/icons/location-orange.svg'
                alt='location'
                width={16}
                height={16}
                loading='lazy'
              />
            </i>
            <p>{infoItinerary.location}</p>
          </div>
          <Carousel images={infoCms?.imagesCarousel} />
        </div>
      </div>

      <div className={`${styles.itinerary} wonder-grid`}>
        <div className={styles['itinerary__content']}>
          <section className={styles.content__description}>
            <Details
              lng={lng}
              product={infoItinerary.product}
              phisicalPerformance={`${
                infoItinerary.product?.physical_performance
              }/5 ${t('overview.level')}`}
            />

            {infoItinerary.showDates && (
              <Dates
                uuidWeTravel={infoItinerary?.uuidWeTravel}
                datesItinerary={infoItinerary?.tripDates}
                tripName={infoItinerary.title}
                newItinerary={infoItinerary?.newItinerary}
              />
            )}

            <div>
              <SummaryItinerary
                lng={lng}
                title={cardPriceProps.title}
                itinerary={infoItinerary.itineraryData}
                ebook_url={infoItinerary.product?.ebook_url}
                feed_map_image_thumbnail={infoItinerary.product?.map_image}
                typeTrip={infoItinerary.product?.product_type?.name ?? ''}
                productLabel={slugName}
              />

              <GeneralInformation
                itemsGeneralInformation={infoItinerary.generalInformation}
              />

              <Impact title={t('navbar.impact')} lng={lng} />

              <SocialProof reviews={infoCms?.reviews ?? []} />

              <Policy lng={lng} />

              {showPriceMobile && <Price {...cardPriceProps} />}
            </div>
          </section>

          <section className={styles['content__price']}>
            <CardPrice {...cardPriceProps} />
          </section>
        </div>

        <Recomendations lng={lng} t={t} tags={infoItinerary.tags} />

        {infoItinerary.tags.length > 0 && (
          <Tags lng={lng} items={infoItinerary.tags} />
        )}
      </div>
      <LogFbEvent eventName={`itinerary_${slugName}`} />
    </>
  );
}
