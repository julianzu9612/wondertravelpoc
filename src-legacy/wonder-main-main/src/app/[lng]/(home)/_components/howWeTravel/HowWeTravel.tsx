import Link from 'next/link';
import styles from './HowWeTravel.module.scss';

const HowWeTravel = ({t}: {t: (e: string) => string}) => {
  return (
    <div className={styles['how-we-travel']}>
      <div className={styles['how-we-travel__container']}>
        <div className={styles['how-we-travel__title']}>
          <h2
            className={styles['title']}
            dangerouslySetInnerHTML={{
              __html: t('how-travel'),
            }}
          />
          <Link href={'https://wondertravelplanner.paperform.co/'} target='_blank' rel='noreferrer'>
            <button className={styles['cta']}>{t('helpme-search-trip')}</button>
          </Link>
        </div>
        <div className={styles['how-we-travel__items']}>
          <ul className={styles['ho']}>
            <li className={styles['ho']}>{t('fix-departures')}</li>
            <li className={styles['ho']}>{t('curated-xperiences')}</li>
            <li className={styles['ho']}>{t('small-groups')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowWeTravel;
