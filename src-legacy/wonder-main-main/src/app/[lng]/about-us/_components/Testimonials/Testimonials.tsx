import Image from 'next/image';
import React from 'react';
import { reviews } from '../../../../../../statics/reviews';
import styles from './Testimonials.module.scss';
import { ParamsSearch } from '../../page';
import { useTranslation } from '@i18n-server';
const Testimonials = async ({ lng }: ParamsSearch['params']) => {
  const { t } = await useTranslation(lng, 'aboutUs');
  return (
    <section className={styles.testimonials}>
      <div>
        <h2>{t('Testimonials')}</h2>
        <div className={styles.testimonials__list}>
          {reviews['es'].slice(0, 12).map(({ name, place, comment }, i) => (
            <div key={i} className={styles['card-social']}>
              <div className={styles['card-social__commas']}>
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
                <h3 className={styles.content__name}>{name}</h3>
                <h4 className={styles.content__country}>{place}</h4>
                <hr className={styles.content__line} />
                <p key={i} className={styles.content__comment}>
                  &ldquo;{comment}&ldquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
