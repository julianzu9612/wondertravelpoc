import Image from 'next/image';
//utils
import { useTranslation } from '@i18n-server';
//styles
import styles from './WeWork.module.scss';
//components
import WeWorkClient from './WeWorkClient';

const WeWork = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'home');

  return (
    <section className={styles.weWork}>
      <div className={styles.weWork__texts}>
        <h2 className={styles.texts__title}>
          {t('weWork.We work with local families', {
            defaultValue: 'We work with local families',
          })}
        </h2>
        <p className={styles.texts__description}>{t('weWork.description')}</p>
      </div>
      <WeWorkClient>
        <div className={styles.images__left}>
          <Image
            className={styles['left__image-1']}
            src={'/assets/images/homepage/Card1.webp'}
            alt='We work'
            width={156}
            height={194}
            sizes='156px'
          />
          <Image
            className={styles['left__image-2']}
            src={'/assets/images/homepage/Card2.webp'}
            alt='We work'
            width={156}
            height={194}
            sizes='156px'
          />
        </div>
        <div className={styles['images__right']}>
          <Image
            className={styles['right__image-1']}
            src={'/assets/images/homepage/Card3.webp'}
            alt='We work'
            width={156}
            height={194}
            sizes='156px'
          />

          <Image
            className={styles['right__image-2']}
            src={'/assets/images/homepage/Card4.webp'}
            alt='We work'
            width={156}
            height={194}
            sizes='156px'
          />
        </div>
      </WeWorkClient>
    </section>
  );
};

export default WeWork;
