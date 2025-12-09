// 'use client';
// import React, { ChangeEvent, useEffect, useReducer, useState } from 'react';
// // enhacer
// import Image from 'next/image';
// import { LayoutGroup, motion } from 'framer-motion';
// // store
// import BookingContext from '@store/BookingContext';
// import { reducerBooking } from '@store/reducerBooking';
// import INITIAL_STATE from '@store/initialState';
// import parseInitialState from '@store/parseInitialState';
// // styles
// import styles from './Payment.module.scss';
// // components
// import Input from '@components/input/Input';
// //utils
// import getTotalSummaryCard from './utils/getTotalSummaryCards';
// import getTotalTravelers from './utils/getTotalTravelers';
// import { formatMoney } from '../../../../utils/formatMoney';
// import formatNumberCreditCard from './utils/formatNumberCreditCard';
// import { CalendarFormat } from '../../../../utils/DateFormat';

// export interface dataCardI {
//   'card-number': string | null;
//   cvv: number | null;
//   month: number | null;
//   year: number | null;
// }

// const page = () => {
//   const [state, dispatch] = useReducer(
//     reducerBooking,
//     INITIAL_STATE,
//     parseInitialState
//   );

//   const [card, setDataCard] = useState<dataCardI>({
//     'card-number': null,
//     cvv: null,
//     month: null,
//     year: null,
//   });

//   const [totalUsers, setTotalUsers] = useState([
//     { total: 1, type: 'adultos', totalCost: 0 },
//   ]);

//   const digitsDate = 2;
//   const digitsCvv = 3;
//   const digitsCardNumber = 19;
//   const setDataCardValidated = (event: ChangeEvent<HTMLInputElement>) => {
//     let val = event.target.value;
//     const name = event.target.name;

//     if (name === 'card-number') val = formatNumberCreditCard(val);
//     if ((name === 'year' || name === 'month') && val.length > digitsDate) return;
//     if (name === 'cvv' && val.length > digitsCvv) return;
//     if (name === 'card-number' && val.length > digitsCardNumber) return;
//     else val = formatNumberCreditCard(val);

//     setDataCard({
//       ...card,
//       [name]: val,
//     });
//   };

//   useEffect(() => {
//     getTotalTravelers({ setTotalUsers, quantityPeople: state.quantityPeople });
//   }, [state.quantityPeople]);

//   return (
//     <LayoutGroup>
//       <BookingContext.Provider value={{ state, dispatch }}>
//         <main className={`${styles['payment']} `}>
//           <div
//             className={`
//             ${styles['payment__img-container']}
//           `}
//           >
//             <Image
//               src={state.imageBooking as string}
//               width={1000}
//               height={800}
//               alt='imagen del producto'
//               className={styles['payment__image']}
//             />
//           </div>

//           <div className={`${styles['payment__container-info']} `}>
//             <motion.h1
//               itemID='titlte-payment'
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               exit={{ opacity: 0, y: 20 }}
//               className={styles['payment__title']}
//             >
//               Aventura el Choco
//             </motion.h1>

//             <h2 className={styles['step-2__subtitle']}>Tus datos personales</h2>
//             <Input
//               type='text'
//               name='card-number'
//               placeholder='xxxx xxxx xxxx'
//               onChange={setDataCardValidated}
//               className={styles['container-info__card-number']}
//               value={card['card-number'] as string}
//               // error={emptyData.findIndex((i) => i === 'phone') >= 0}
//             />

//             <div className={styles['payment__security-card']}>
//               <div className={styles['security-card__expiration-date']}>
//                 <h2 className={styles['step-2__subtitle']}>
//                   fecha de expiración
//                 </h2>
//                 <div className={styles['expiration-date']}>
//                   <Input
//                     type='number'
//                     name='month'
//                     placeholder='MM'
//                     onChange={setDataCardValidated}
//                     className={styles['form-data-user__phone-number']}
//                     value={card.month as number}
//                   />
//                   <p>/</p>
//                   <Input
//                     type='number'
//                     name='year'
//                     placeholder='YY'
//                     onChange={setDataCardValidated}
//                     className={styles['form-data-user__phone-number']}
//                     value={card.year as number}
//                   />
//                 </div>
//               </div>
//               <div className={styles['security-card__cvv']}>
//                 <h2 className={styles['step-2__subtitle']}>cvv</h2>
//                 <Input
//                   type='number'
//                   name='cvv'
//                   placeholder='123'
//                   onChange={setDataCardValidated}
//                   className={styles['form-data-user__phone-number']}
//                   value={card.cvv as number}
//                 />
//               </div>
//             </div>
//           </div>

//           <motion.div
//             itemID='card-summary-payment'
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             exit={{ opacity: 0, y: 20 }}
//             className={`${styles['payment__card-summary']}`}
//           >
//             <p className={styles['card-summary__title-dates']}>Resumen</p>
//             <p className={styles['card-summary__subtitle-dates']}>
//               {CalendarFormat(state.selectedDate.start_date, state.selectedDate.end_date)}
//             </p>
//             {totalUsers.map(
//               ({ total, type, totalCost }, i) =>
//                 total > 0 && (
//                   <div className={styles['card-summary__persons']} key={i}>
//                     <p className={styles['persons__total']}>{total}</p>
//                     <p className={styles['persons__type']}>{type}</p>
//                     <p className={styles['persons__price']}>
//                       ${formatMoney(`${totalCost}`)}
//                     </p>
//                   </div>
//                 )
//             )}

//             <hr className={styles['card-summary__line']} />
//             <div className={styles['card-summary__total-trip']}>
//               <p className={styles['card__title']}>Total:</p>
//               <p className={styles['card__price']}>
//                 ${formatMoney(getTotalSummaryCard(totalUsers))}
//               </p>
//             </div>
//           </motion.div>

//           <button>Pagar</button>
//         </main>
//       </BookingContext.Provider>
//     </LayoutGroup>
//   );
// };

// export default page;
