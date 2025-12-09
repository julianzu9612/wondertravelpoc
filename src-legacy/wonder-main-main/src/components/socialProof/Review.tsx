import Rating from '@components/Rating/Rating';
import Image from 'next/image';
import React from 'react';
import { review } from './SocialProof.model';
import styles from './SocialProof.module.scss';
interface Review extends review {
  hasReviewsGeneral: boolean;
}
const Review = ({
  comment,
  name,
  place,
  hasReviewsGeneral,
  rating,
}: Review) => {
  return (
    <div className={styles['card-social']}>
      <div className={styles['card-social__commas']}>
        <Image
          src='/assets/icons/comma.svg'
          width={36}
          height={36}
          alt='Recommendation'
          priority={false}
        />
        <Image
          src='/assets/icons/comma.svg'
          width={36}
          height={36}
          alt='Recommendation'
          priority={false}
        />
      </div>
      <div className={styles['card-social__content']}>
        <div className={styles.content__info}>
          <div>
            <p
              className={`${styles.info__name} ${
                hasReviewsGeneral && styles['content__name--reviewGeneral']
              }`}
            >
              {name}
            </p>
            {rating && <Rating scores={rating} />}
          </div>
          {hasReviewsGeneral && <p className={styles.info__country}>{place}</p>}
        </div>
        <hr className={styles.content__line} />
        <p className={styles.content__comment}>{comment}</p>
      </div>
    </div>
  );
};
export default Review;
