import styles from './Tags.module.scss';
import { ITags } from './Tags.model';
import { UseAddaptedCountries } from '../../../../../(global)/_utilities/useAddaptedCountriesTrips';
import { Tag } from '@services/trips/getDataItinerary.model';
import { useTranslation } from '@i18n-server';
import Link from 'next/link';
const TagsSection = ({
  items,
  title,
  redirect,
}: {
  items: Tag[];
  title: string;
  redirect?: string;
}) => {
  return (
    <section className={styles['tags__section']}>
      <h2>{title}</h2>
      <div className={styles['section__tags']}>
        {items.map(({ label, name }, i) =>
          redirect ? (
            <Link
              key={i}
              href={redirect + '/' + name}
              className={styles['tags__tag']}
            >
              <p>{label}</p>
            </Link>
          ) : (
            <button key={i} className={styles['tags__tag']}>
              <p>{label}</p>
            </button>
          )
        )}
      </div>
    </section>
  );
};
const Tags = async ({ lng, items }: ITags) => {
  const { t } = await useTranslation(lng, 'translation');
  const { countriesService } = await UseAddaptedCountries({ lng });
  return (
    <div className={`${styles.tags}  wonder-grid`}>
      <TagsSection
        items={countriesService}
        title={t('Destinations')}
        redirect={`/${lng}/countries`}
      />
      <TagsSection items={items} title={t('Travel Styles')} />
    </div>
  );
};

export default Tags;
