import Image from 'next/image';
import styles from './GoogleReview.module.scss';
import { urlReviewGoogle, urlReviewTrustpilot } from '../../../../../constants';

const GoogleReview = () => {
  return (
    <div className={styles['reviews-container']}>
      {/* Google Reviews Section */}
      <div className={styles['google-review']}>
        <Image
          src='/assets/icons/google.svg'
          width={40}
          height={40}
          alt='logo google'
          priority={false}
          className={styles['google-review__logo']}
        />

        <Image
          src='/assets/images/google-logo.png'
          width={137}
          height={46}
          alt='logo google'
          priority={false}
          className={styles['google-review__logo-desktop']}
        />

        <a
          href={urlReviewGoogle}
          target='_blank'
          rel='noreferrer'
          style={{ textDecoration: 'none' }}
        >
          <div className={styles['google-review__calification']}>
            <p className={styles['calification__numbers']}>4.9</p>
            <p className={styles['calification__numbers']}>|</p>
            <p className={styles['calification__reviews']}>30 reviews</p>
            <div className={styles['calification__stars']}>
              <div className={styles['star']}></div>
              <div className={styles['star']}></div>
              <div className={styles['star']}></div>
              <div className={styles['star']}></div>
              <div className={styles['star']}></div>
            </div>
          </div>
        </a>
      </div>

      {/* Trustpilot Reviews Section */}
      <div className={styles['trustpilot-review']}>
        {/* Mobile Trustpilot icon */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className={styles['trustpilot-review__logo']}
          aria-label="logo trustpilot"
        >
          <path
            fill="#00B67A"
            d="M12 2L14.4 8.2H21.5L15.8 12.4L18.2 18.6L12 14.4L5.8 18.6L8.2 12.4L2.5 8.2H9.6L12 2Z"
          />
        </svg>

        {/* Desktop Trustpilot logo */}
        <svg
          width="137"
          height="46"
          viewBox="0 0 200 60"
          className={styles['trustpilot-review__logo-desktop']}
          aria-label="logo trustpilot"
        >
          <g fill="#00B67A">
            <path d="M30 10L33.5 19H44L35.75 25L39.25 34L30 28L20.75 34L24.25 25L16 19H26.5L30 10Z"/>
            <text x="55" y="35" fontSize="24" fontFamily="Arial, sans-serif" fill="#000">Trustpilot</text>
          </g>
        </svg>

        <a
          href={urlReviewTrustpilot}
          target='_blank'
          rel='noreferrer'
          style={{ textDecoration: 'none' }}
        >
          <div className={styles['trustpilot-review__calification']}>
            <p className={styles['calification__numbers']}>4.7</p>
            <p className={styles['calification__numbers']}>|</p>
            <p className={styles['calification__reviews']}>25 reviews</p>
            <div className={styles['calification__stars']}>
              <div className={styles['star-trustpilot']}></div>
              <div className={styles['star-trustpilot']}></div>
              <div className={styles['star-trustpilot']}></div>
              <div className={styles['star-trustpilot']}></div>
              <div className={styles['star-trustpilot-partial']}></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GoogleReview;
