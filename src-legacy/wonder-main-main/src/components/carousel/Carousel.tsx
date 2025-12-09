'use client';
import { useState } from 'react';
// enhacer
import Image from 'next/image';
// styles
import styles from './Carousel.module.scss';
// types
import type { SliderI } from './Carousel.model';
import useBreakpoints from '../../customHooks/useBreakPoints';
import ModalCarouselImages from '../../app/[lng]/(itinerary)/trips/[slugName]/_components/ModalCarouselImages/ModalCarouselImages';

const Carousel = ({ images }: SliderI) => {
  const currentSlide = 0;
  const [clickImage, setClickImage] = useState<number | undefined>();
  const { isMobile } = useBreakpoints();

  return (
    <>
      <div className={`${styles.slider}`}>
        {isMobile ? (
          <div
            className={`
            ${styles.slideContainer}
            `}
          >
            {images[currentSlide] && (
              <Image
                onClick={() => {
                  setClickImage(currentSlide);
                }}
                className={styles.slide}
                src={images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                width={508}
                height={443}
                quality={80}
                priority
                sizes='70vw'
              />
            )}
          </div>
        ) : (
          <div className={`${styles.slideContainer}`}>
            {images[currentSlide] && (
              <Image
                onClick={() => {
                  setClickImage(currentSlide);
                }}
                className={styles.slide}
                src={images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                width={820}
                height={396}
                quality={80}
                priority
                sizes='50vw'
              />
            )}

            {images[currentSlide + 1] && (
              <Image
                onClick={() => {
                  setClickImage(currentSlide + 1);
                }}
                className={styles.slide}
                src={images[currentSlide + 1]}
                alt={`Slide ${currentSlide + 1}`}
                width={424}
                height={192}
                quality={60}
                priority
                sizes='50vw'
              />
            )}
            {images[currentSlide + 2] && (
              <Image
                onClick={() => {
                  setClickImage(currentSlide + 2);
                }}
                className={styles.slide}
                src={images[currentSlide + 2]}
                alt={`Slide ${currentSlide + 1}`}
                width={424}
                height={192}
                quality={60}
                priority
                sizes='50vw'
              />
            )}
          </div>
        )}
        {currentSlide !== 0 && (
          <button
            className={styles.prevButton}
            onClick={() =>
              setClickImage(currentSlide === 0 ? 1 : currentSlide - 1)
            }
            aria-label='Previous slide'
            name='fleza para desplazarse a la izquierda'
          >
            <Image
              src='/assets/icons/left-arrows.svg'
              width={32}
              height={32}
              alt=''
              quality={20}
            />
          </button>
        )}

        {currentSlide !== images.length - 1 && images.length > 3 && (
          <button
            className={styles.nextButton}
            onClick={() => setClickImage(isMobile ? 1 : currentSlide + 3)}
            name='fleza para desplazarse a la derecha'
            aria-label='Next slide'
          >
            <Image
              src='/assets/icons/right-arrow.svg'
              width={32}
              height={32}
              alt=''
              quality={20}
            />
          </button>
        )}
      </div>
      <ModalCarouselImages
        defaultImage={clickImage}
        open={typeof clickImage === 'number'}
        onClose={() => setClickImage(undefined)}
        images={images}
      />
    </>
  );
};

export default Carousel;
