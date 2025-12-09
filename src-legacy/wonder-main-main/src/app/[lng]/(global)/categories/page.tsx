import Footer from '@components/footer/Footer';
import { CWonderSEOPages } from '../../../../constants';
import { useTranslation } from '../../../i18n';
import styles from './[category]/page.module.scss';
import { ICategory } from './[category]/page.model';
import CategoryFilter from '@components/CategoryFilter/CategoryFilter';
import { useAddaptedTags } from '../_utilities/useAddaptedTags';
import Image from 'next/image';

export default async function AllCategories({ params: { lng } }: ICategory) {
  const { t } = await useTranslation(lng, 'categories');
  const SEODATA = CWonderSEOPages['/categories'];
  const { TagsAddaptToListCheck } = await useAddaptedTags(lng);

  return (
    <>
      <section className={styles['categories-page']}>
        <section
          className={`${styles['top-section']} mask-dark-gradient header-fixed-space`}
        >
          <Image
            src={SEODATA.image}
            alt='bkg section'
            fill
            sizes='(max-width: 768px) 65vw, (max-width: 1200px) 90vw, 50vw'
            style={{ objectFit: 'cover' }}
          />
          <div className={`wonder-grid ${styles['section-content']}`}>
            <div className={styles['inner-content']}>
              <div className={styles['main-info']}>
                <h1>{t(SEODATA.title)}</h1>
                <p>{t(SEODATA.headline)}</p>
              </div>
            </div>
          </div>
        </section>
        <section className='wonder-grid' id='main-content'>
          <section className={styles['section-page']}>
            <CategoryFilter
              t={t}
              wonderLineCategories={TagsAddaptToListCheck}
            />
          </section>
        </section>
      </section>
      <Footer lng={lng} />
    </>
  );
}
