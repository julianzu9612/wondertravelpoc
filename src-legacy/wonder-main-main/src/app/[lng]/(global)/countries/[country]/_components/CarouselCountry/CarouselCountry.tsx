import Image from 'next/image';
import styles from './CarouselCountry.module.scss';
import { ResGetCountry } from '../../../../../../../../statics/countries';
import CarouselCountryClient from './CarouselCountryClient';

type Images = ResGetCountry['mainActivities']['images'];

const CarouselCountry = ({ images }: { images: Images }) => {
  return (
    <CarouselCountryClient images={images}>
      {images.map(({ img, label, icon }, i) => {
        return (
          <div className={styles.carousel__content} key={i}>
            <Image
              alt={label}
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
      })}
    </CarouselCountryClient>
  );
};

export default CarouselCountry;
