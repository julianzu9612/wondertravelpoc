// 'use client';
// import React from 'react';
// // styles
// import styles from './ButtonsSessionUser.module.scss';
// import { useTranslation } from '@i18n-client';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import { State } from '../../app/[lng]/(auth)/auth/types.model';

// const ButtonsSessionUser = ({
//   className = '',
//   light,
// }: {
//   className?: string;
//   light: boolean;
// }) => {
//   const { t } = useTranslation(undefined, 'profile');
//   const { lng }: {lng: string} = useParams();

//   return (
//     <>
//       <div className={` ${className} ${styles['btns-session-user']}`}>
//         <Link href={`/${lng}/auth?state=${State.SIGNUP}`} className='button'>
//           {t('regist_me')}
//         </Link>
//         <Link
//           href={`/${lng}/auth?state=${State.SIGNIN}`}
//           className={`button ${light ? 'secondary-light' : 'secondary'}`}
//         >
//           {t('login')}
//         </Link>
//       </div>
//     </>
//   );
// };

// export default ButtonsSessionUser;
