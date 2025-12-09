import Link from 'next/link';
import styles from './CardTripIsCategories.module.scss';
import { ICardTrip } from '../../CardTrip.model';
import { CalendarFormat } from '@utils/DateFormat';
import Image from 'next/image';
import useGetLanguaje from '@hooks/useGetLanguaje';
const CardTripIsCategories = async ({
  title,
  image,
  days,
  nights,
  link,
  dates,
  mobileBehavior,
  type,
  price,
  currency,
  t,
}: ICardTrip) => {
  const lng = useGetLanguaje();

  return (
    <Link href={`/${lng}/trips/${link}`} className={styles['link-trip']}>
      <article
        className={`${styles['link-trip__card-trip']} ${
          mobileBehavior ? styles[mobileBehavior] : ''
        } `}
      >
        <div className={styles['card-trip__content']}>
          <h2 className={styles['content__text']}>{title}</h2>

          {dates && dates.length > 0 && (
            <ul className={styles['content__dates']}>
              {dates?.map(
                ({ start_date: startDate, end_date: endDate }, index) => (
                  <li key={index}>{CalendarFormat(startDate, endDate)}</li>
                )
              )}
            </ul>
          )}

          <p className={styles['content__from']}>{t('from', 'desde')}: </p>

          <p className={styles['content__price']}>
            <span className={styles['actions__info__pricing']}>${price}</span>
            <span className={styles['actions__info__currency']}>
              {currency}
            </span>
          </p>

          <p className={styles['content__per-person']}>{t('Per person', 'por persona')}</p>

          <div className={styles['content__days']}>
            {type && <p>{t(type, '')}</p>}
            <p className={styles['days__days-nights']}>
              {days} {t('days', 'días')}, {nights} {t('nights', 'noche')}
            </p>
          </div>
        </div>
        <div className={styles['card-trip__feature-image']}>
          <Image src={image} width={264} height={132} alt='imagen de viaje' />
        </div>
      </article>
    </Link>
  );
};

export default CardTripIsCategories;
