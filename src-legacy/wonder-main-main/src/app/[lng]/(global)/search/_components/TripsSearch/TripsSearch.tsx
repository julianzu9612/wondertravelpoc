// styles
import styles from './TripsSearch.module.scss';
// components
import CardTrip from '@components/CardTrip/CardTrip';
import { ITripsSearch } from './TripsSearch.model';
import { ReactNode } from 'react';

const TripsSearch = ({ tripsData, mobileBehavior, t, lng }: ITripsSearch) => {
  let iterator = 0;
  const trips: Set<ReactNode> = new Set();

  for (const trip of tripsData.values()) {
    iterator++;
    const info = {
      title: trip.title,
      image: trip.image_url,
      days: trip.days,
      price: trip.price,
      price_discount: trip.price_discount,
      link: trip.trip_name,
      currency: trip.currency_type,
      dates: [],
      discount: trip.discount,
      countries: trip?.countries,
      destinations: trip?.destinations,
      travelStyle: trip?.travel_style,
    };
    
    trips.add(
      <CardTrip
        {...info}
        lng={lng}
        key={iterator}
        mobileBehavior={mobileBehavior}
        t={t}
      />
    );
  }
  return (
    <>
      <div
        className={`${styles['grid-trips']} ${styles['grid-slider-mobile']} ${
          mobileBehavior ? styles['mobile-grid-trips'] : ''
        }`}
      >
        {trips && trips}
      </div>
      {(!trips || trips?.size < 1) && (
        <section className={styles['not-found']}>
          <b>{t('not_found', 'Sin Resultados')}</b>
          <p>{t('not_found_message', 'Intenta cambiar los criterios de busqueda')}</p>
        </section>
      )}
    </>
  );
};

export default TripsSearch;
