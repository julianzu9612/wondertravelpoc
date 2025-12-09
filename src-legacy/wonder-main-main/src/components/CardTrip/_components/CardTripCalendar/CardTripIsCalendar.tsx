import Link from 'next/link';
import styles from './CardTripCalendar.module.scss';
import Image from 'next/image';
import { CalendarFormat } from '@utils/DateFormat';
import { ICardTrip } from '../../CardTrip.model';
import useGetLanguaje from '@hooks/useGetLanguaje';

const CardTripIsCalendar = ({
  title,
  image,
  days,
  link,
  dates,
  t,
}: ICardTrip) => {
  const lng = useGetLanguaje();
  return (
    <Link href={`${lng}/trips/${link}`} className={styles['link-trip']}>
      <article className={`${styles['link-trip__card-trip']}`}>
        <div className={styles['card-trip__feature-image']}>
          <Image src={image} width={264} height={132} alt='imagen de viaje' />
        </div>

        <div className={styles['card-trip__box-info']}>
          <div className={styles['box-info__top']}>
            <h3 className={styles['top__title']}>{title}</h3>
          </div>

          <ul className={styles['box-info__dates']}>
            {dates?.map(
              ({ start_date: startDate, end_date: endDate }, index) => (
                <li key={index}>{CalendarFormat(startDate, endDate)}</li>
              )
            )}
          </ul>
          <div className={styles['box-info__actions']}>
            <p className={styles['actions__days']}>
              {days} {t('days', 'días')}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardTripIsCalendar;
