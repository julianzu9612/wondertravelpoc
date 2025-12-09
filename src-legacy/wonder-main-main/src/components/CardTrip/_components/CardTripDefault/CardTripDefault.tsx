import Link from 'next/link';
import { ICardTrip } from '../../CardTrip.model';
import styles from './CardTripDefault.module.scss';
import Image from 'next/image';
import { CalendarFormat } from '@utils/DateFormat';
import useGetLanguaje from '@hooks/useGetLanguaje';

const CardTripDefault = ({
  title,
  image,
  days,
  dates,
  mobileBehavior,
  t,
  currency,
  price,
  link,
}: ICardTrip) => {
  const lng = useGetLanguaje();
  return (
    <Link href={`/${lng}/trips/${link}`} className={styles['link-trip']}>
      <article
        className={`${styles['link-trip__card-trip']} ${
          mobileBehavior ? styles[mobileBehavior] : ''
        } ${styles['is-calendar']}`}
      >
        <div className={styles['card-trip__feature-image']}>
          <Image
            src={image}
            width={264}
            height={132}
            alt='imagen de viaje'
            loading={'lazy'}
            quality={50}
          />
        </div>

        <div className={styles['card-trip__content']}>
          <h3 className={styles['content__title']}>{title}</h3>

          {dates && dates?.length > 0 && (
            <ul className={styles['content__dates']}>
              {dates?.map(({ start_date, end_date }, index) => (
                <li key={index}>{CalendarFormat(start_date, end_date)}</li>
              ))}
            </ul>
          )}

          <p className={styles['content__from']}>{t('from', 'desde')}: </p>

          <p className={styles['content__price']}>
            <span className={styles['actions__info__pricing']}>${price}</span>
            <span className={styles['actions__info__currency']}>
              {currency}
            </span>
          </p>

          <p className={styles['content__per-person']}>{t('Per person', 'Por persona')}</p>

          <div className={styles['content__days']}>
            {/* {type && <p>{t(type)}</p>} */}
            <p className={styles['days__days-nights']}>
              {days} {t('days', 'días')}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardTripDefault;
