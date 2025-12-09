import styles from './HomeLeaders.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@i18n-server';
import useGetLanguage from '@hooks/useGetLanguaje';

const HomeLeaders = async () => {
  const lng = useGetLanguage();
  const { t } = await useTranslation(`${lng}`, 'leaders');
  const trans = (key: string) => t('buttons.' + key);
  return (
    <section className={styles['content-leaders']}>
      <Image
        src={'/assets/images/homepage/image_leader.jpg'}
        alt='imagen de viaje'
        loading='lazy'
        quality={70}
        fill
        priority={false}
      />
      <div className={`wonder-grid ${styles['content-leaders__content']}`}>
        <figcaption className={styles['content-leaders__text-images']}>
          <h2 className={styles['text-images__title']}>{t('title')}</h2>
          <p className={styles['text-images__description']}>
            {t('description')}
          </p>
        </figcaption>
        <div className={styles['content-leaders__buttons']}>
          <Link
            href={'https://wonderleaders.paperform.co/'}
            target='_blank'
            rel='norefererrer noopener'
          >
            <button>{trans('join_now')}</button>
          </Link>
          <Link
            href={'https://pages.wondertravel.co/wonder-leaders'}
            rel='norefererrer noopener'
            target='_blank'
          >
            <button className='secondary-light'>{trans('learn_more')}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeLeaders;
