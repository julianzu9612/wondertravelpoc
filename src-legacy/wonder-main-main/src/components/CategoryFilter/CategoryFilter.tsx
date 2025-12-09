import Link from 'next/link';
import { CWonderCategoryData } from '../../constants';
import { ICategoryFilter } from './CategoryFilter.model';
import styles from './CategoryFilter.module.scss';
import Image from 'next/image';
import useGetLanguaje from '@hooks/useGetLanguaje';
import { useTranslation } from '@i18n-server';

const CategoryFilter = async ({
  wonderLineCategories = CWonderCategoryData,
}: ICategoryFilter) => {
  const lng = useGetLanguaje();
  const { t } = await useTranslation(lng, 'translation');
  return (
    <section className={styles['categories-filter']}>
      <div className={styles['categories-filter__boxes']}>
        {wonderLineCategories?.map((wonderLineCategory, index: number) => (
          <article
            key={index}
            className={styles['categories-filter__boxes__box']}
          >
            <figure className={styles['featured-image']}>
              <Image
                src={wonderLineCategory.image}
                alt={wonderLineCategory.label}
                loading='lazy'
                sizes='280px'
                fill
                style={{ objectFit: 'cover' }}
              />
            </figure>
            <p aria-label='travel styles' className={styles['box__label']}>
              {t(`${wonderLineCategory.label}`)}
            </p>
            <Link
              aria-label='travel styles'
              className={styles['link-box-category']}
              href={`/${lng}/${wonderLineCategory.url}`}
            ></Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategoryFilter;
