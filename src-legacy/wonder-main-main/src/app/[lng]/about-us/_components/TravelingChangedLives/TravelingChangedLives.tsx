import { useTranslation } from '@i18n-server';
import { ParamsSearch } from '../../page';
import styles from './TravelingChangedLives.module.scss';
import Image from 'next/image';
const TravelingChangedLives = async ({ lng }: ParamsSearch['params']) => {
  const { t } = await useTranslation(lng, 'aboutUs');
  const trans = (value: string) => t('traveling changed our lives.' + value);
  return (
    <div className={styles.traveling}>
      <div className={styles.traveling__content}>
        <section className={styles.content__ourLives}>
          <div className={styles.ourLives__texts}>
            <h2 className={styles.texts__title}>
              {trans('Traveling changed our lives')}
            </h2>
            <p className={styles.texts__description}>
              {t(
                'traveling changed our lives.Traveling changed our lives__text'
              )}
            </p>
          </div>
          <Image
            src={'/assets/images/aboutUs/travelingChanged.webp'}
            alt='Traveling changed'
            width={400}
            height={300}
            style={{ objectFit: 'cover' }}
            className={styles.ourLives__image}
          />
        </section>
        <section className={styles.content__video}>
          <h2>{trans('Why travel with us?')}</h2>
          <p>{trans('Why travel with us?__text')}</p>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/7RC0Rh8ElhI?si=cO_apLuqZrg0m8d8'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default TravelingChangedLives;
