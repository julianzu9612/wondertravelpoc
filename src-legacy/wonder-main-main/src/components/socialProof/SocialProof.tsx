import { SocialProofI, review } from './SocialProof.model';
// import Image from 'next/image';
import styles from './SocialProof.module.scss';
import Rating from '@components/Rating/Rating';
import { useTranslation } from '@i18n-server';
import useGetLanguage from '@hooks/useGetLanguaje';
import dynamic from 'next/dynamic';
import Review from './Review';
import {reviews as defaultReviews} from '../../../statics/reviews';

const SocialProofClient = dynamic(() => import('./SocialProofClient'), {
  ssr: false,
});

const SocialProof = async ({ reviews }: SocialProofI) => {
  const lng = useGetLanguage();
  const { t } = await useTranslation(lng, 'itinerary');
  let validReviews: review[] = [];

  if (reviews.length === 0) {
    validReviews = defaultReviews[lng];
  }

  if (typeof validReviews === 'undefined') return null;
  if (validReviews.length > 0) return null;

  return (
    <div className={styles['social-proof']}>
      <h2>{t('our_travelers')}</h2>
      <div className={styles['social-proof__content']}>
        <div className={styles['content__description']}>
          <p>{t('SocialProof.+985 travelers rate our trips with 4.6/5')} </p>
          <Rating scores={4.6} />
        </div>
        {reviews.length === 0 && (
          <div className={styles['content__otherReviews']}>
            <p>
              {t(
                'SocialProof.This product does not have reviews yet. However, we leave you reviews of other of our trips.'
              )}
            </p>
          </div>
        )}
        <div className={styles['content__list-cards']}>
          <SocialProofClient>
            {validReviews?.map(({ comment, name, place, rating }, i) => (
              <Review
                key={i}
                comment={comment}
                name={name}
                place={place}
                hasReviewsGeneral={!(reviews.length > 0)}
                rating={rating}
              />
            ))}
          </SocialProofClient>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
