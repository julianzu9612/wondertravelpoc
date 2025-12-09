// components
import { SummaryItinerayI } from './SummaryItinerary.model';
// styles
import styles from './SummaryItinerary.module.scss';
// utils
import CollapseItineray from './CollapseItineray';
import Map from '../../app/[lng]/(itinerary)/trips/[slugName]/_components/Map/Map';
import { useTranslation } from '@i18n-server';

const SummaryItinerary = async ({
  title,
  itinerary,
  lng,
  typeTrip,
  ...map
}: SummaryItinerayI) => {
  const { t: trans } = await useTranslation(lng, 'itinerary');
  const t = (value: string) => trans(`itinerary.${value}`);

  return (
    <div className={styles['summary-itinerary']} id='itinerary'>
      <div className={styles['summary-itinerary__section']}>
        <h2 className={styles['section__title']}>
          {t('itinerary')} {title}
        </h2>
        <Map {...map} lng={lng} />
        <div className={styles['section__content-days']}>
          <div className={styles['content-days__steps']}>
            <CollapseItineray
              itinerary={itinerary}
              lng={lng}
              typeTrip={typeTrip}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryItinerary;
