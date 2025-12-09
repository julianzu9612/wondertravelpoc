import styles from './AboutUs.module.scss';
import Image from 'next/image';
import { TFunction } from 'i18next';

const AboutUs = ({ t }: { t: TFunction<any, string> }) => {
  return (
    <div className={styles['about-us']}>
      <h2 className={styles['about-us__title']}>
        <span dangerouslySetInnerHTML={{ __html: t('aboutUs.title') }} />
      </h2>
      <p className={styles['about-us__description']}>
        {t('aboutUs.description')}
      </p>
      <p className={styles['about-us__purpose']}>
        <span dangerouslySetInnerHTML={{ __html: t('aboutUs.purpose') }} />
      </p>
      <div className={styles['about-us__wonder']}>
        <Image
          alt=''
          width={90}
          height={90}
          src='/assets/brand/wonder-isotype-line.svg'
        />
      </div>
      <h3 className={styles['about-us__subtitle']}>{t('aboutUs.subtitle')}</h3>
      <p className={styles['about-us__impact']}>{t('aboutUs.impact')}</p>
    </div>
  );
};

export default AboutUs;
