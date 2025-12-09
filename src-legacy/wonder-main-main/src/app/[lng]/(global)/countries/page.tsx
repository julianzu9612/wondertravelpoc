import Footer from '@components/footer/Footer';
import { CWonderSEOPages } from '../../../../constants';
import { useTranslation } from '../../../i18n';
import styles from './[country]/page.module.scss';
import { ICategory } from './[country]/page.model';
import CategoryFilter from '@components/CategoryFilter/CategoryFilter';
import { useAddaptedTags } from '../_utilities/useAddaptedTags';

const SEODATA = CWonderSEOPages['/countries'];
export default async function AllCategories({ params: { lng } }: ICategory) {
  const { t } = await useTranslation(lng, 'translation');
  const { randomTags } = await useAddaptedTags(lng);
  return (
    <>
      <section className={styles['categories-page']}>
        <section
          className={`${styles['top-section']} mask-dark-gradient header-fixed-space`}
          style={{ backgroundImage: `url(${SEODATA?.image})` }}
        >
          <div className={`wonder-grid ${styles['section-content']}`}>
            <div className={styles['inner-content']}>
              <div className={styles['main-info']}>
                <h1>{t(`${SEODATA?.title}`)}</h1>
                <p>{t(`${SEODATA?.headline}`)}</p>
              </div>
            </div>
          </div>
        </section>
        <section className='wonder-grid' id='main-content'>
          <section className={styles['section-page']}>
            <CategoryFilter t={t} wonderLineCategories={randomTags} />
          </section>
        </section>
      </section>
      <Footer lng={lng} />
    </>
  );
}
