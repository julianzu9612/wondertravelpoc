import Image from 'next/image';
import styles from './PersonalizedTrip.module.scss';
import Link from 'next/link';

const PersonalizedTrip = ({ t, lng}: { t: (e: string) => string, lng: string }) => {

  return (
    <div className={styles['personalized-trip']}>
      <Image
        className={styles['personalized-trip__path']}
        alt='path'
        src={'/assets/images/path-personalized-travel.svg'}
        width={1133}
        height={383}
      />
      <h2 className={styles['personalized-trip__title']}>
        {t('custom-travel')}
      </h2>
      <p className={styles['personalized-trip__description']}>
        {t('custom-travel-desc-1')}
      </p>
      <p className={styles['personalized-trip__description']}>
        {t('custom-travel-desc-2')}
      </p>
      <Link
        href={`/${lng}/tailor`}
      >
        <button className={styles['personalized-trip__cta']}>
          {t('custom-travel-cta')}
        </button>
      </Link>
    </div>
  );
};

export default PersonalizedTrip;
