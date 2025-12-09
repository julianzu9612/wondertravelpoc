import React from 'react';
import styles from './Reviews.module.scss';
import { TFunction } from 'i18next';

const getReviews = (t: TFunction<any, string>) => [
  {
    name: t('reviews.list.temilola.name'),
    review: t('reviews.list.temilola.review'),
  },
  {
    name: t('reviews.list.rebecca.name'),
    review: t('reviews.list.rebecca.review'),
  },
  {
    name: t('reviews.list.camila.name'),
    review: t('reviews.list.camila.review'),
  },
];

const Reviews = ({ t }: { t: TFunction<any, string> }) => {
  const reviews = getReviews(t);

  return (
    <div className={styles['reviews']}>
      <h2 className={styles['reviews__title']}>{t('reviews.title')}</h2>
      <div className={styles['reviews__review']}>
        {reviews.map((item, key) => (
          <div className={styles['review__item']} key={key}>
            <p className={styles['item__name']}>{item.name}</p>
            <p className={styles['item__review']}>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
