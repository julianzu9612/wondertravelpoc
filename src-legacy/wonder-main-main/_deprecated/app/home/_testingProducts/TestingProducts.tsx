/**
 * deprecated mon/15/04/2024
 */

import styles from './TestingProducts.module.scss';
import Image from 'next/image';
import { useTranslation } from '@i18n-server';

const TestingProducts = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'home');

  return (
    <div>
      <div className={styles['testing-products']}>
        <Image
          src='/assets/images/homepage/acotur.jpg'
          alt=''
          width={150}
          height={150}
          className={styles['testing-products__image']}
        />

        <h2
          className={styles['testing-products__title']}
          dangerouslySetInnerHTML={{
            __html: t('testing.title'),
          }}
        />

        <p className={styles['testing-products__description']}>
          {t('testing.description')}
        </p>
        <a
          href='https://contactformwonder.paperform.co/'
          target='_blank'
          data-id='home-go-testing-experts'
          rel='noreferrer'
        >
          <button className='secondary'>{t('testing.cta')}</button>
        </a>
      </div>
    </div>
  );
};

export default TestingProducts;
