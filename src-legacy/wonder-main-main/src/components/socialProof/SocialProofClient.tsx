'use client';
import React, { ReactNode, useState } from 'react';
import styles from './SocialProof.module.scss';
import { useTranslation } from '@i18n-client';
const SocialProofClient = ({
  children: reviews,
}: {
  children: ReactNode[];
}) => {
  const exceededLimitReviews = reviews.length <= 10;
  const [showMore, setShowMore] = useState(false);
  const showReviews =
    exceededLimitReviews || !showMore ? reviews.slice(0, 10 / 2) : reviews;
  const { t } = useTranslation(undefined, 'itinerary');

  return (
    <>
      {showReviews}
      {!exceededLimitReviews && (
        <p
          className={styles['content__show']}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? t('Show Less') : t('Show More')}
        </p>
      )}
    </>
  );
};

export default SocialProofClient;
