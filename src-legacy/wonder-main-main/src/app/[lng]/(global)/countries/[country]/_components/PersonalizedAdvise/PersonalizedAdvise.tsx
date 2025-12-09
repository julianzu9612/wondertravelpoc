import Image from 'next/image';
//styles
import styles from './PersonalizedAdvise.module.scss';
import { useTranslation } from '@i18n-server';
import Link from 'next/link';

const PersonalizedAdvise = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'countries');
  const trans = (value: string) =>
    t('personalizedAdvise.' + value, { defaultValue: value });
  return (
    <div className={styles.personalized}>
      <div className={styles.personalized__content}>
        <picture className={styles['travelPurpose__bkg-img']}>
          <source
            media='(min-width: 820px)'
            srcSet={'/assets/images/countries/acotur.webp'}
          />
          <Image
            src='/assets/images/countries/acoturMobile.webp'
            alt='Bkg looking for advise'
            fill
            style={{ objectFit: 'cover', zIndex: '-1' }}
            quality={100}
            sizes='100vw'
          />
        </picture>
        <div className={styles.content__texts}>
          <h2>{trans('Looking for personalized advice?')}</h2>
          <p>{trans('description')}</p>
          <div className={styles.texts__anchor}>
            <Link
              className='button'
              href='https://wondertravelplanner.paperform.co/'
              target='_blank'
            >
              {trans('Plan my Trip')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedAdvise;
