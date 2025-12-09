// 'use client';
// import BookingContext from '@store/BookingContext';
// import React, { useContext, useState } from 'react';
// import styles from './ModalImages.module.scss';
// import Image from 'next/image';

// function ModalImages() {
//   const {
//     state: { modalImages },
//   } = useContext(BookingContext);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % modalImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + modalImages.length) % modalImages.length
//     );
//   };

  

//   return (
//     <div className={styles['modal-images']}>
//       {modalImages.map((image, index) => (
//         <Image
//           src={image ?? ''}
//           alt=''
//           width={808}
//           height={398}
//           key={index}
//           className={styles.slide}
//           style={{ opacity: index === currentIndex ? 1 : 0 }}
//         />
//       ))}
//       <div className={styles['modal-images__buttons']}>
//         <button className={styles['buttons__prev']} onClick={prevSlide}>
//           <Image
//             src='/assets/icons/right-arrow.svg'
//             alt=''
//             width={18}
//             height={18}
//           />
//         </button>
//         <p className={styles['buttons__actual-item']}>{currentIndex + 1} / {modalImages?.length}</p>
        
//         <button className={styles['buttons__next']} onClick={nextSlide}>
//           <Image
//             src='/assets/icons/right-arrow.svg'
//             alt=''
//             width={18}
//             height={18}
//           />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ModalImages;
