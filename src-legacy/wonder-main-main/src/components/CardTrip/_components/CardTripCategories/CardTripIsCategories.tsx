import Link from 'next/link';
import styles from './CardTripIsCategories.module.scss';
import { ICardTrip } from '../../CardTrip.model';

import Image from 'next/image';

export const LIST_STYLES = {
  'Explorer Edition': 'Explorer',
  'Classic By Wonder Travel': 'Classic',
  'Wild Classic': 'Wild',
  'Wonder Flavours': 'Flavours',
};

const CardTripIsCategories = ({
  title,
  image,
  days,
  link,
  price,
  currency,
  discount,
  countries,
  price_discount,
  travelStyle,
  lng,
  t,
}: ICardTrip) => {
  const haveDisccount = discount > 0;

  return (
    <Link
      href={`/${lng}/trips/${link}`}
      className={styles['link-trip']}
      data-id={link}
    >
      <article className={`${styles['link-trip__card-trip']}`}>
        <div className={styles['card-trip__feature-image']}>
          <Image
            src={image}
            width={194}
            height={136}
            alt='imagen de viaje'
            priority
          />
        </div>

        <div className={styles['card-trip__content']}>
          <h2 className={styles['content__title']}>{title}</h2>
          <div
            className={`${haveDisccount && styles['have-disccount']} ${
              styles['content__countries']
            }`}
          >
            {countries.length > 0 &&
              countries.map((country, i) => (
                <p
                  className={styles['countries__names']}
                  key={country.label + i}
                >
                  {country.label}&nbsp;
                  {i + 1 == countries.length ? '' : '|'} &nbsp;
                </p>
              ))}
          </div>

          <p
            className={`${styles['content__from']} ${
              haveDisccount && styles['have-disccount']
            }`}
          >
            {t('from', 'Desde')}:{' '}
          </p>

          {discount > 0 && (
            <p className={styles['content__price-disccount']}>
              <span className={styles['actions__info__pricing']}>
                ${price}{' '}
              </span>
              <span className={styles['actions__info__currency']}>
                {currency}
              </span>
            </p>
          )}

          <p className={styles['content__price']}>
            <span className={styles['actions__info__pricing']}>
              ${haveDisccount ? price_discount : price}{' '}
            </span>
            <span className={styles['actions__info__currency']}>
              {currency}
            </span>
          </p>

          <p className={styles['content__per-person']}>{t('Per person', 'Por persona')}</p>
          <div className={styles['content__days']}>
            <p className={styles['days__days-nights']}>
              {days} {t('days', 'días')}
            </p>
          </div>
        </div>

        {travelStyle?.length > 0 && (
          <div className={styles['card-trip__travel-style']}>
            {LIST_STYLES?.[travelStyle]}
          </div>
        )}

        {discount > 0 && (
          <div className={styles['card-trip__ribbon']}> {t('Deals', 'Oferta')}</div>
        )}
      </article>
    </Link>
  );
};

export default CardTripIsCategories;
