// 'use client';
// import React, { useContext, useEffect, useMemo } from 'react';
// import Image from 'next/image';
// // import ButtonsSessionUser from '@components/buttonsSessionUser/ButtonsSessionUser';
// import styles from './ProfileLogin.module.scss';
// import { useTranslation } from '@i18n-client';

// import ProfileContext from '@store/ProfileContext';
// import { setLogout } from '@store/actions';
// import { Verify } from '@services/auth/verify/verify';
// import { logout } from '@services/auth/auth';
// import SectionProfile from './_components/SectionProfile/SectionProfile';
// //import { setUserSession } from '@store/actions';

// const PageProfileLogin = ({ params: { lng } }: { params: { lng: string } }) => {
//   const { t } = useTranslation(undefined, 'profile');
//   const { t: trans } = useTranslation(undefined, 'translation');
//   const { state, dispatch } = useContext(ProfileContext);
//   const { userSession } = state;
//   const isLogin = useMemo(() => {
//     return state?.userSession?.isLogged;
//   }, [state.userSession]);
//   useEffect(() => {
//     const validateRefreshToken = async () => {
//       try {
//         const session = await Verify();
//         if (session !== 200) {
//           dispatch(setLogout());
//         }
//       } catch (error) {
//         dispatch(setLogout());
//       }
//     };
//     validateRefreshToken();
//   }, []);
//   return (
//     <div className={styles['profile-login']}>
//       {isLogin ? (
//         <div
//           className={`${styles['profile-login__hero-account']} header-fixed-space`}
//         >
//           <Image
//             className={styles['hero-account__image']}
//             src='/assets/images/booking-image.png'
//             width={577}
//             height={722}
//             alt=''
//           />
//           <div className={styles['hero-account__background']} />
//           <p className={styles['hero-account__name']}>
//             {userSession?.user?.first_name} {userSession?.user?.last_name}
//           </p>
//           <p className={styles['hero-account__welcome']}>
//             {t('welcome_wonder')}
//           </p>

//           <button
//             onClick={async () => {
//               try {
//                 await logout();
//                 dispatch(setLogout());
//               } catch (error) {
//                 console.error('error');
//               }
//             }}
//           >
//             {t('logout')}
//           </button>
//         </div>
//       ) : (
//         <div className={`${styles['profile-login__hero']} header-fixed-space`}>
//           <Image
//             className={styles['hero__image']}
//             src='/assets/images/booking-image.png'
//             width={580}
//             height={726}
//             alt=''
//           />
//           <div className={styles['hero__background-color']} />
//           <h1 className={styles['hero__title']}>{t('my_account_wonder')}</h1>
//           <p className={styles['hero__description']}>
//             {t('Description_wonder_account')}
//           </p>
//           {/* <ButtonsSessionUser className={styles['hero__buttons']} light /> */}
//         </div>
//       )}

//       <div className={styles['profile-login__buttons']}>
//         {isLogin && (
//           <SectionProfile
//             content={
//               <Image
//                 className={styles['arrow']}
//                 src='/assets/icons/rigth-arrow.svg'
//                 width={18}
//                 height={18}
//                 alt=''
//               />
//             }
//             img='/assets/icons/pencil.svg'
//             title={t('profile_data')}
//             redirect='/account'
//           />
//         )}
//         <SectionProfile
//           content={
//             <Image
//               className={styles['arrow']}
//               src='/assets/icons/rigth-arrow.svg'
//               width={18}
//               height={18}
//               alt=''
//             />
//           }
//           img='/assets/icons/airplane.svg'
//           title={t('my_booking')}
//           redirect={isLogin ? '/bookings/' : '/bookings?state=menu-no-logged'}
//         />
//         <SectionProfile
//           content={
//             <Image
//               className={styles['arrow']}
//               src='/assets/icons/rigth-arrow.svg'
//               width={18}
//               height={18}
//               alt=''
//             />
//           }
//           img='/assets/icons/favorite.svg'
//           title={t('my_favorites')}
//         />
//         <SectionProfile
//           content={<p>{lng === 'es' ? trans('Spanish') : trans('English')}</p>}
//           img='/assets/icons/lang-icon-blue.svg'
//           title={t('language')}
//         />
//         <SectionProfile
//           content={<p>COP</p>}
//           img='/assets/icons/currency.svg'
//           title={t('currency')}
//         />
//         {isLogin && (
//           <div className={styles['profile-login__complete-percentage']}>
//             <section className={styles['complete-percentage__content']}>
//               <p className={`${styles['content__title']}`}>
//                 {t('percentage_complete_profile')}
//               </p>
//               <p className={`${styles['content__percentage']}`}>40%</p>
//             </section>
//             <p className={`${styles['complete-percentage__description']}`}>
//               {t('description_complete_percentage')}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PageProfileLogin;
