import styles from './Reviews.module.scss';
import { TFunction } from 'i18next';

interface ReviewsProps {
  t: TFunction;
}

const listReviews = [
  {
    name: 'TemilolaR',
    reviewKey: 'reviews.list.TemilolaR',
  },
  {
    name: 'RebeccaH',
    reviewKey: 'reviews.list.RebeccaH',
  },
  {
    name: 'CamilaV',
    reviewKey: 'reviews.list.CamilaV',
  },
];

const Reviews = ({ t }: ReviewsProps) => {
  return (
    <div className={styles['reviews']}>
      <h2 className={styles['reviews__title']}>{t('reviews.title')}</h2>
      <div className={styles['reviews__review']}>
        {listReviews.map((item, key) => (
          <div className={styles['review__item']} key={key}>
            <p className={styles['item__name']}>{item.name}</p>
            <p className={styles['item__review']}>{t(item.reviewKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
