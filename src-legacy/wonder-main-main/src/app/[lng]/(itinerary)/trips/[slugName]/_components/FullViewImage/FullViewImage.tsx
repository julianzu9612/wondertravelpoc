'use client';
import Image from 'next/image';
import styles from './FullViewImage.module.scss';
import { IFullViewImage } from './FullViewImage.model';
import { useState } from 'react';
import ModalImage from '../ModalImage/ModalImage';

const FullViewImage = ({ image, alt, height, width }: IFullViewImage) => {
  const [showModal, setShowModal] = useState(false);
  const changeModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className={styles['FullViewImage']}>
      <i className={styles['FullViewImage__icon']} onClick={changeModal}>
        <Image
          src={'/assets/icons/fullView.png'}
          width={30}
          height={30}
          alt={'full view'}
          loading='lazy'
          priority={false}
        />
      </i>
      <Image
        onClick={changeModal}
        src={image}
        className={styles.FullViewImage__image}
        width={height}
        height={width}
        alt={alt}
        loading='lazy'
        priority={false}
        sizes='70vw'
      />
      <ModalImage
        open={showModal}
        image={image}
        alt={alt}
        onClose={changeModal}
      />
    </div>
  );
};

export default FullViewImage;
