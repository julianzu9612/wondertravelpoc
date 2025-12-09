import { ISearchPage } from '../page.model';
import metaTagsSearch from './metaTagsSearch';

const getKeyPrice = (price: number) => {
  if (price < 1000) {
    return '<1000';
  } else if (price >= 1000 && price <= 2000) {
    return '<2000';
  } else {
    return '>2000';
  }
};
export const getMetaTag = async ({
  params: { lng },
  searchParams: { countries, ...restQueryParams },
}: ISearchPage) => {
  const metaTag = await metaTagsSearch(lng);
  const listRestQueryParams = Object.values(restQueryParams);
  const isArray = (value?: string) => value?.split(',').length === 1;
  const { priceMin, priceMax, tags, travelStyles, hasDiscount } =
    restQueryParams;
  const validation = (value?: boolean, length = 1) =>
    value && listRestQueryParams.length === length;
  const hasPrice = !!(priceMin || priceMax);
  const cases = {
    priceAndCountries: validation(hasPrice && !!countries, 2),
    priceAndNotCountries: validation(hasPrice && !!!countries, 2),
    countriesAndOtherParam: validation(!!countries),
    tags: validation(!!tags && isArray(tags)),
    travelStyles: validation(!!travelStyles && isArray(travelStyles)),
    hasDiscount: validation(!!hasDiscount),
  };
  const price = priceMax || priceMin;
  switch (true) {
    case cases.priceAndCountries: {
      // format to key price
      const keyPrice = getKeyPrice(+price);
      const keyTag = `${countries}, ${keyPrice}`;
      // get value of key
      const getMetaTag = metaTag.get(keyTag);
      return returnFormatMetaTag(getMetaTag, lng);
    }
    case cases.priceAndNotCountries: {
      // format to key price
      const keyPrice = getKeyPrice(+price);
      // get value of key
      const getMetaTag = metaTag.get(keyPrice);
      return returnFormatMetaTag(getMetaTag, lng);
    }
    case cases.countriesAndOtherParam: {
      const keyTag = [countries, ...Object.values(restQueryParams)].join(', ');
      const getMetaTag = metaTag.get(keyTag);
      return returnFormatMetaTag(getMetaTag, lng);
    }
    case cases.tags: {
      const getMetaTag = metaTag.get(tags.toString());
      return returnFormatMetaTag(getMetaTag, lng);
    }
    case cases.travelStyles: {
      if (travelStyles) {
        const getMetaTag = metaTag.get(travelStyles.toString());
        return returnFormatMetaTag(getMetaTag, lng);
      }
      break;
    }
    case cases.hasDiscount: {
      const getMetaTag = metaTag.get('hasDiscount');
      return returnFormatMetaTag(getMetaTag, lng);
    }
    default: {
      const getMetaTag = metaTag.get('general');
      return returnFormatMetaTag(getMetaTag, lng);
    }
  }
};

const returnFormatMetaTag = async (
  getMetaTag:
    | {
        title: string;
        description: string;
      }
    | undefined,
  lng: string
) => {
  let title = getMetaTag?.title;
  let description = getMetaTag?.description;
  if (!title && !description) {
    const metaTag = await metaTagsSearch(lng);
    const getMetaTag = metaTag.get('general');
    title = getMetaTag?.title;
    description = getMetaTag?.description;
  }
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ['https://cdn.wondertravel.co/seo/main.png'],
    },
  };
};
