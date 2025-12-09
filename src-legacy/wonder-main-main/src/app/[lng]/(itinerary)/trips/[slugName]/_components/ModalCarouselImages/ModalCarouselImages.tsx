'use client';
import { ICarouselImages } from './ModalCarouselImages.model';
import Modal from '@components/Modal/Modal';
import styles from './ModalCarouselImages.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const ModalCarouselImages = ({
  images,
  onClose,
  open,
  defaultImage,
}: ICarouselImages) => {
  const [currentImage, setCurrentImage] = useState(defaultImage || 0);
  const [changeImage, setChangeImage] = useState(false);
  useEffect(() => {
    setChangeImage(false);
  }, [currentImage]);
  useEffect(() => {
    setCurrentImage(defaultImage || 0);
  }, [defaultImage]);
  const image = images[currentImage];
  const onNextSlider = () => {
    if (currentImage < images.length - 1) {
      setChangeImage(true);
      setCurrentImage(currentImage + 1);
    }
  };
  const onPreviousSlider = () => {
    if (currentImage > 0) {
      setChangeImage(true);
      setCurrentImage(currentImage - 1);
    }
  };
  return (
    <Modal open={open} bkgColor='#000'>
      <section className={styles['modal-images']}>
        <Image
          onClick={onClose}
          className={styles['modal-images__close']}
          src={'/assets/icons/close-white.svg'}
          alt='close modal'
          width={36}
          height={36}
          quality={20}
          loading='lazy'
          priority={false}
        />
        {!changeImage && (
          <div className={styles['modal-images__image-container']}>
            <Image
              src={image}
              className={styles['image-container__image']}
              alt={`image slider ${currentImage}`}
              fill
              loading='lazy'
              quality={'100'}
              style={{
                inset: 'unset',
              }}
            />
          </div>
        )}
        <section className={styles['modal-images__buttons']}>
          <button aria-label='left arrow' onClick={onPreviousSlider}>
            <Image
              width={16}
              height={16}
              src={'/assets/icons/left-arrows.svg'}
              alt='left arrow'
              quality={20}
              priority={false}
              loading='lazy'
            />
          </button>
          <span>
            {currentImage + 1}/{images.length}
          </span>
          <button aria-label='right arrow' onClick={onNextSlider}>
            <Image
              width={16}
              height={16}
              src={'/assets/icons/right-arrow.svg'}
              alt='right arrow'
              quality={20}
              loading='lazy'
              priority={false}
            />
          </button>
        </section>
      </section>
    </Modal>
  );
};

export default ModalCarouselImages;
