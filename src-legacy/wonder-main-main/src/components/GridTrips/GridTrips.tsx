// styles
import styles from './GridTrips.module.scss';
// components
import CardTrip from '@components/CardTrip/CardTrip';
import { IGridTrips } from './GridTrips.model';
import dynamic from 'next/dynamic';
const Pagination = dynamic(() => import('@components/Pagination/Pagination'), {
  ssr: false,
});

const GridTrips = ({
  pagination,
  tripsData,
  mobileBehavior,
  t,
  isCategories,
  lng
}: IGridTrips) => {
  
  const trips = tripsData?.map((trip) => {
    
    return {
      tripId: trip.trip_id,
      title: trip.product.label,
      image: trip.product.image_url,
      days: trip.days,
      nights: trip.nights,
      price: trip.price,
      price_discount: trip.price_discount,
      link: trip.trip_name,
      currency: trip.currency_type,
      dates: [],
      type: trip?.product?.product_type?.name,
      discount: trip.discount,
      destinations: trip?.product?.destinations,
      countries: trip?.product?.countries,
      travelStyle: trip.product?.travel_style?.label
    };
  });

  return (
    <section className={styles['horizontal-scroll']}>
      <div
        className={`${styles['grid-trips']} ${styles['grid-slider-mobile']} ${
          mobileBehavior ? styles['mobile-grid-trips'] : ''
        }`}
      >
        {trips &&
          trips.map((trip, index: number) => {
            return (
              <CardTrip
                {...trip}
                key={index}
                mobileBehavior={mobileBehavior}
                isCategories={isCategories}
                t={t}
                lng={lng}
              />
            );
          })}
      </div>
      {pagination && <Pagination pagination={pagination} />}
      {(!trips || trips?.length < 1) && (
        <section className={styles['not-found']}>
          <b>{t('Not Found')}</b>
          <p>{t('Not Found Message')}</p>
        </section>
      )}
    </section>
  );
};

export default GridTrips;
