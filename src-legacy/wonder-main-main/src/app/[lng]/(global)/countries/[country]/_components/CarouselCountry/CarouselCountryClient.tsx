'use client';
import Image from 'next/image';
import styles from './CarouselCountry.module.scss';
import { ReactNode, useRef, useState } from 'react';
import { ResGetCountry } from '../../../../../../../../statics/countries';

type Images = ResGetCountry['mainActivities']['images'];

const CarouselCountryClient = ({
  images,
  children,
}: {
  images: Images;
  children: ReactNode;
}) => {
  const refCarousel = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = currentImage + 1;
  const prevImages = currentImage - 1;
  const onPrevImage = () => {
    if (prevImages >= 0) {
      modifyScroll(prevImages);
    }
  };
  const modifyScroll = (image: number) => {
    const { current } = refCarousel;
    if (current) {
      const maxScroll = current.scrollWidth - current.clientWidth;
      const newValueScroll = (maxScroll / images.length - 1) * image;
      current.scrollLeft = newValueScroll;
      setCurrentImage(image);
    }
  };
  const onNextImage = () => {
    if (nextImage <= images.length) {
      modifyScroll(nextImage);
    }
  };

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      {currentImage !== 0 && (
        <button
          className={`${styles.carousel__button} ${styles['carousel__button--left']}`}
          onClick={onPrevImage}
          disabled={currentImage <= 0}
        >
          <Image
            src={'/assets/icons/left-arrows.svg'}
            alt='back image'
            width={16}
            height={26}
          />
        </button>
      )}
      <div className={styles.carousel} ref={refCarousel}>
        {/* {images.map(({ img, label, icon }) => {
          return (
            <div className={styles.carousel__content}>
              <Image
                alt=''
                className={`${styles['content__image']} `}
                sizes='50vw'
                src={img}
                width={650}
                priority={false}
                height={520}
              />
              <div className={styles.content__label}>
                {icon && (
                  <i className={styles.label__icon}>
                    <Image
                      src={icon as string}
                      alt='icon image'
                      width={15}
                      height={20}
                    />
                  </i>
                )}
                <span className={styles.label__text}>{label}</span>
              </div>
            </div>
          );
        })} */}
        {children}
      </div>
      {currentImage !== images.length && (
        <button
          className={`${styles.carousel__button} ${styles['carousel__button--right']}`}
          onClick={onNextImage}
          disabled={currentImage === images.length}
        >
          <Image
            src={'/assets/icons/right-arrow.svg'}
            alt='back image'
            width={16}
            height={26}
          />
        </button>
      )}
    </div>
  );
};

export default CarouselCountryClient;
