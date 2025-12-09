import styles from './FilterSearch.module.scss';
import { useTranslation } from '@i18n-server';
import { getTripCountries } from '@services/trips/countries/getCountries';
import { GetTravelStyles } from '@services/trips/travelStyles/getTravelStyles';
import { GetTags } from '@services/trips/tags/getTags';
import { IFilterSearch as IFilterSearch } from './FilterSearch.model';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import CollapseFilters from '../CollapseFilters/CollapseFilters';
import FilterSortPrice from '../FilterSortPrice/FilterSortPrice';
import FilterHamburger from '../FilterHamburger/FilterHamburger';
import { ContextFiltersProviders } from '../../search/__context/ContextFilters';
import ApplyFilters from '../../search/_components/ApplyFilters/ApplyFilters';
import SearchOf from '../SearchOf/SearchOf';

const FilterPrice = dynamic(
  () => import('../../search/_components/FilterPrice/FilterPrice'),
  { ssr: false }
);
const FilterCategories = dynamic(
  () => import('../../search/_components/FilterCategories/FilterCategories'),
  { ssr: false }
);
const FilterTravelStyles = dynamic(
  () =>
    import('../../search/_components/FilterTravelStyles/FilterTravelStyles'),
  { ssr: false }
);
const FilterDates = dynamic(
  () => import('../../search/_components/FilterDates/FilterDates'),
  { ssr: false }
);
const FilterCountry = dynamic(
  () => import('../../search/_components/FilterCountry/FilterCountry'),
  { ssr: false }
);
const FilterDuration = dynamic(
  () => import('../../search/_components/FilterDuration/FilterDuration'),
  { ssr: false }
);

const FiltersSearch = async ({ queryParams: params, lng }: IFilterSearch) => {
  const { t } = await useTranslation(lng, 'search');
  const { t: trans } = await useTranslation(lng, 'countries');
  const getCountries = await getTripCountries();
  const countriesSort = getCountries?.sort((a, b) =>
    a.label.localeCompare(b.label)
  );
  const getTravelStyles = await GetTravelStyles();
  const getCategories = await GetTags(lng);
  const {
    tags,
    travelStyles,
    countries,
    dateStart,
    dateEnd,
    durationMax,
    durationMin,
    priceMax,
    priceMin,
    query,
  } = params;

  const countriesList = countriesSort?.map(({ name, label }) => ({
    value: name,
    label: trans(label),
    checked: countries?.includes(name) || false,
  }));

  const travelStylesCheck = getTravelStyles?.map(({ name, label }) => ({
    value: name,
    label: label,
    checked: travelStyles?.includes(name) || false,
  }));

  const categoriesCheck = getCategories?.map(({ name, label }) => ({
    value: name,
    label: label,
    checked: tags?.includes(name) || false,
  }));

  const itemsCollapse = new Set([
    {
      content: <FilterCountry countries={countriesList} />,
      title: <span className={styles.title}>{t('Country')}</span>,
      open: !!countries,
    },
    {
      content: <FilterDates />,
      title: <span className={styles.title}>{t('Dates')}</span>,
      open: !!dateStart || !!dateEnd,
    },
    {
      content: <FilterDuration />,
      title: <span className={styles.title}>{t('Duration (Days)')}</span>,
      open: !!durationMax || !!durationMin,
    },
    {
      content: <FilterPrice />,
      title: <span className={styles.title}>{t('Price')}</span>,
      open: !!priceMin || !!priceMax,
    },
    {
      content: <FilterTravelStyles travelStyles={travelStylesCheck} />,
      title: <span className={styles.title}>{t('Travel Style')}</span>,
      open: !!travelStyles,
    },
    {
      content: <FilterCategories categories={categoriesCheck} />,
      title: <span className={styles.title}>{t('Category')}</span>,
      open: !!tags,
    },
  ]);

  return (
    <FilterHamburger queryParams={params}>
      <div className={styles['filters-search']}>
        <ContextFiltersProviders queryParams={params}>
          <section className={styles['filters-search__filters-menu']}>
            <SearchOf querySearch={query} />
            <FilterSortPrice />
            <CollapseFilters items={itemsCollapse} />
          </section>
          <ApplyFilters />
        </ContextFiltersProviders>
        <Link
          href={`/${lng}/search/?utm_medium=web&utm_source=filter`}
          className={`${styles['filters-search__reset']} button__orange-outline`}
          scroll={false}
          replace
          prefetch
        >
          {t('Reset filters')}
        </Link>
      </div>
    </FilterHamburger>
  );
};

export default FiltersSearch;
