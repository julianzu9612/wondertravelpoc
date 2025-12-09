//components
import Image from 'next/image';
//styles
import styles from './Impact.module.scss';
//utilities
import { useTranslation } from '@i18n-server';
const Impact = async ({ lng, title }: { lng: string; title: string }) => {
  const { t } = await useTranslation(lng, 'impact');
  return (
    <div className={styles.contain} id='impact'>
      <h2 className={styles['contain__title']}>{title}</h2>
      <div className={styles['contain__impact']}>
        <Image
          src='/assets/icons/impact.png'
          alt=''
          width={60}
          height={64}
          className={styles['impact__img']}
          quality={40}
          loading='lazy'
          priority={false}
        />
        <div className={styles['impact__info']}>
          <h3 className={styles['info__title']}>{t('success_question')}</h3>
          <ul className={styles['info__list']}>
            <li className={styles['info__list-item']}>
              {t('success_percent')}
            </li>
            <li className={styles['info__list-item']}>
              {t('success_local_economy')}
            </li>
            <li className={styles['info__list-item']}>
              {t('success_local_conservation')}
            </li>
            <li className={styles['info__list-item']}>
              {t('success_local_traditions')}
            </li>
            <li className={styles['info__list-item']}>
              {t('success_contribute')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Impact;
