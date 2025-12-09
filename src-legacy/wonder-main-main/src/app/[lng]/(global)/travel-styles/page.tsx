import { CWonderSEOPages } from '../../../../constants';
import { useTranslation } from '../../../i18n';
import styles from './[travelStyle]/page.module.scss';
import { ICategory } from './[travelStyle]/page.model';
import CategoryFilter from '@components/CategoryFilter/CategoryFilter';
import Image from 'next/image';
import Footer from '@components/footer/Footer';
import addapttedToLineTravelStyles from './_utils/addapttedToLineTravelStyle';

export default async function AllCategories({ params: { lng } }: ICategory) {
  const { t } = await useTranslation(lng, 'translation');
  const { addaptedToLineTravelStyle } = await addapttedToLineTravelStyles();
  const SEODATA = CWonderSEOPages['/travel-styles'];
  return (
    <>
      <section className={styles['travel-style']}>
        <section
          className={`${styles['top-section']} mask-dark-gradient header-fixed-space`}
        >
          <Image
            src={SEODATA.image}
            alt='bkg section'
            fill
            sizes='(max-width: 768px) 65vw, (max-width: 1200px) 80vw, 50vw'
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className={`wonder-grid ${styles['section-content']}`}>
            <div className={styles['inner-content']}>
              <div className={styles['main-info']}>
                <h1>{t(`${SEODATA.title}`)}</h1>
                <p>{t(`${SEODATA.headline}`)}</p>
              </div>
            </div>
          </div>
        </section>
        <section className='wonder-grid' id='main-content'>
          <section className={styles['section-page']}>
            <CategoryFilter
              t={t}
              wonderLineCategories={addaptedToLineTravelStyle.slice(0, 4)}
            />
          </section>
        </section>
      </section>
      <Footer lng={lng} />
    </>
  );
}
