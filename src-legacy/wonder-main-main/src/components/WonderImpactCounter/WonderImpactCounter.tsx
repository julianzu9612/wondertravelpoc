// styles
import styles from './WonderImpactCounter.module.scss';
// types
import { IWonderImpactCounter } from './WonderImpactCounter.model';
import Image from 'next/image';

const WonderImpactCounter = async ({
  wonderImpactItems,
  t,
}: IWonderImpactCounter) => {
  return (
    <div className={styles['wonder-impact-counter']}>
      <Image
        src='/assets/images/homepage/homepage-impacto.jpg'
        alt='impact'
        quality={75}
        loading='lazy'
        fill
        className={styles['wonder-impact-counter__image']}
      />
      <section
        className={`wonder-grid ${styles['wonder-impact-counter__content']}`}
      >
        <h2>{t('Our Impact')}</h2>
        <p>{t('ImpactDescription')}</p>
        <Image
          src='/assets/images/homepage/homepage-impacto1.png'
          alt='impact'
          width={1280}
          height={526}
          quality={75}
          loading='lazy'
        />
        <section className={styles['wonder-impact-counter__counter']}>
          {wonderImpactItems.map((wonderImpactItem, index: number) => (
            <article className={styles['__box']} key={index}>
              <span className={styles['__box__label']}>
                {t(wonderImpactItem.label)}
              </span>
              <b className={styles['__box__value']}>{wonderImpactItem.value}</b>
            </article>
          ))}
        </section>
      </section>
    </div>
  );
};

export default WonderImpactCounter;
