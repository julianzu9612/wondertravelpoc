'use client';
import Image from 'next/image';
// models
import { ICardSharedTrip } from './CardSharedTrip.model';
// styles
import styles from './CardSharedTrip.module.scss';
import Link from 'next/link';
import ModalProfileShare from '@components/ModalProfileShare/ModalProfileShare';
import { useState } from 'react';

const CardSharedTrip = ({
  title,
  image,
  date,
  travellers,
  linkCompleteData,
  linkItinerary,
  className,
  isShared,
  textMainCta,
  textSecondaryCta = '',
  typeTravel,
}: ICardSharedTrip) => {
  const [showModal, setShowModal] = useState(false);
  const changeModal = () => {
    setShowModal((current) => !current);
  };
  return (
    <>
      <article className={`${styles['card-trip']} ${className}`}>
        <figure
          className={styles['feature-image']}
          style={{ backgroundImage: `url(${image})` }}
        ></figure>
        <div className={styles['box-info']}>
          {isShared && (
            <button
              className={`${styles['box-info__share']} ghost`}
              onClick={changeModal}
            >
              <Image
                src='/assets/icons/share.svg'
                alt=''
                width={16}
                height={16}
              />
            </button>
          )}
          <h3 className={styles['box-info__title']}>{title}</h3>
          <p className={styles['box-info__subtitle']}>{typeTravel}</p>
          <p className={styles['box-info__date']}>{date}</p>
          <div className={styles['box-info__content-travelers']}>
            {travellers.map((traveler) => (
              <p key={traveler} className={styles['content-travelers__days']}>
                {traveler}
              </p>
            ))}
          </div>
          <div className={styles['box-info__actions']}>
            <Link href={linkCompleteData}>
              <button>{textMainCta}</button>
            </Link>
            {textSecondaryCta?.length > 0 && (
              <Link href={linkItinerary}>
                <button className='secondary-light'>{textSecondaryCta}</button>
              </Link>
            )}
          </div>
        </div>
      </article>
      <ModalProfileShare open={showModal} changeModal={changeModal} />
    </>
  );
};

export default CardSharedTrip;
