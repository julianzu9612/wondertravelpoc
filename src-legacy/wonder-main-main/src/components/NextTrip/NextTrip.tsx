// 'use client';
// import CardSharedTrip from '@components/CardTrip/CardSharedTrip/CardSharedTrip';
// import React from 'react';
// import styles from './NextTrip.module.scss';
// import EmptyState from './components/emptyState/EmptyState';
// import { useTranslation } from '@i18n-client';
// import { TripsState } from '../../app/[lng]/(profile)/profile/bookings/searchReservation/components/contentReservation/contentReservation.model';
// import Slider from '../../app/[lng]/(profile)/profile/bookings/signIn/pastTrips/PastTrips';
// import Link from 'next/link';
// import useGetLanguaje from '@hooks/useGetLanguaje';

// const NextTrip = ({
//   trips,
//   isLogin,
// }: {
//   trips: TripsState[];
//   isLogin?: boolean;
// }) => {
//   const lng = useGetLanguaje();
//   const { t } = useTranslation(undefined, 'profile');
//   return (
//     <div className={styles['next-trip']}>
//       {trips.length > 0 ? (
//         <>
//           <Slider
//             items={trips.map(
//               (
//                 {
//                   title,
//                   image,
//                   date,
//                   travellers,
//                   linkCompleteData,
//                   linkItinerary,
//                   typeTravel,
//                 },
//                 i
//               ) => (
//                 <CardSharedTrip
//                   isShared
//                   key={i}
//                   title={title as string}
//                   image={image as string}
//                   date={date as string}
//                   travellers={travellers}
//                   linkCompleteData={linkCompleteData as string}
//                   linkItinerary={linkItinerary as string}
//                   className={styles['next-trip__card']}
//                   textMainCta={t('complete_data')}
//                   textSecondaryCta={t('see_itinerary')}
//                   typeTravel={typeTravel}
//                 />
//               )
//             )}
//           />
//           <Link
//             href={`/${lng}/lines/trips`}
//             className={`button secondary ${styles['next-trip__cta-more-trips']}`}
//           >
//             {t('explore_more_travel')}
//           </Link>
//           {isLogin && (
//             <div className={styles['next-trip__user-sesion']}>
//               <p className={styles['user-sesion__text']}>
//                 {t('register_consult_reservation')}
//               </p>
//               <div className={styles['user-sesion__actions']}>
//                 <button>{t('regist_me')}</button>
//                 <button className='secondary'>{t('login')}</button>
//               </div>
//             </div>
//           )}
//         </>
//       ) : (
//         <EmptyState imageUrl='/assets/images/footerimage.png' />
//       )}
//     </div>
//   );
// };

// export default NextTrip;
