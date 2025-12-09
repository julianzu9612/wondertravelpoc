import styles from './SocialProof.module.scss';
import Image from 'next/image';
import { SocialProofI } from './SocialProof.model';
import { useTranslation } from '@i18n-server';
import { CReviews } from '../../../../../constants';
import SocialProofClient from './SocialProofClient';

const SocialProof = async ({ lng }: SocialProofI) => {
  const reviews = CReviews;
  const { t } = await useTranslation(lng, 'home');

  return (
    <SocialProofClient reviewsLength={reviews?.length}>
      <h2>{t('Traveler Stories')}</h2>
      {reviews.map(({ name, place, comment }, i) => (
        <div key={i} className={styles['card-social']}>
          <div className={styles['social-proof__commas']}>
            <Image
              src='/assets/icons/comma.svg'
              width={36}
              height={36}
              alt='Recommendation'
            />
            <Image
              src='/assets/icons/comma.svg'
              width={36}
              height={36}
              alt='Recommendation'
            />
          </div>
          <div className={styles['card-social__content']}>
            <h2 className={styles.content__country}>{place}</h2>
            <h3 className={styles.content__name}>{name}</h3>
            <hr className={styles.content__line} />
            <p key={i} className={styles.content__comment}>
              &ldquo;{comment}&ldquo;
            </p>
          </div>
        </div>
      ))}
    </SocialProofClient>
  );
};

export default SocialProof;
