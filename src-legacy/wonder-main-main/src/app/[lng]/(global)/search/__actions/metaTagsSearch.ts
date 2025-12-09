import { useTranslation } from '@i18n-server';

const metaTagsSearch = async (lng: string) => {
  const { t } = await useTranslation(lng, 'metaTags');
  const trans = (value: string) =>
    t('metaTagSearch.' + value, { defaultValue: value });
  const textTitlePrice = (value: string, country: string) =>
    t('metaTagSearch.' + value, { defaultValue: value, country });
  const metaTags = new Map([
    [
      'general',
      {
        title: trans('Find Your Adventure | Wonder Travel Search'),
        description: trans(
          'Find Your Adventure | Wonder Travel Search__description'
        ),
      },
    ],
    [
      'hasDiscount',
      {
        title: trans('Unlock Travel Discounts | Wonder Travel'),
        description: trans(
          'Unlock Travel Discounts | Wonder Travel__description'
        ),
      },
    ],
    // price
    [
      '<1000',
      {
        title: trans('Budget-Friendly Getaways | Wonder Travel'),
        description: trans(
          'Budget-Friendly Getaways | Wonder Travel__description'
        ),
      },
    ],
    [
      '<2000',
      {
        title: trans('Standard- priced trips  | Wonder Travel'),
        description: trans(
          'Standard- priced trips  | Wonder Travel__description'
        ),
      },
    ],
    [
      '>2000',
      {
        title: trans('Exclusive Getaways | Wonder Travel'),
        description: trans('Exclusive Getaways | Wonder Travel__description'),
      },
    ],

    //category
    [
      'nature-wildlife',
      {
        title: trans('Explore Natural Wonders'),
        description: trans('Explore Natural Wonders__description'),
      },
    ],
    [
      'adventure',
      {
        title: trans('South America Adventures'),
        description: trans('South America Adventures__description'),
      },
    ],
    [
      'classic-tours',
      {
        title: trans('Classic Tours & Cultural Journeys'),
        description: trans('Classic Tours & Cultural Journeys__description'),
      },
    ],
    [
      'food-gastronomy',
      {
        title: trans('Taste of South America'),
        description: trans('Taste of South America__description'),
      },
    ],
    [
      'culture-history',
      {
        title: trans('Cultural Journeys in South America'),
        description: trans('Cultural Journeys in South America__description'),
      },
    ],
    [
      'beach-sun',
      {
        title: trans('Tropical Beach Escapes'),
        description: trans('Tropical Beach Escapes__description'),
      },
    ],
    // travel styles
    [
      'classic-by-wonder-travel',
      {
        title: trans('Explore with Wonder | Classic Trips'),
        description: trans('Explore with Wonder | Classic Trips__description'),
      },
    ],
    [
      'wild-classic',
      {
        title: trans('Wild Classic Tours | City & Nature'),
        description: trans('Wild Classic Tours | City & Nature__description'),
      },
    ],
    [
      'wonder-flavours',
      {
        title: trans('Taste the World | Wonder Flavours'),
        description: trans('Taste the World | Wonder Flavours__description'),
      },
    ],
    [
      'explorer-edition',
      {
        title: trans('Explore the Wild | Adventure Awaits'),
        description: trans('Explore the Wild | Adventure Awaits__description'),
      },
    ],

    // argentina category
    [
      'argentina, nature-wildlife',
      {
        title: trans('Explore Argentinas Rich Nature & Wildlife'),
        description: trans(
          'Explore Argentinas Rich Nature & Wildlife__description'
        ),
      },
    ],
    [
      'argentina, adventure',
      {
        title: trans('Argentina Adventure Tours'),
        description: trans('Argentina Adventure Tours__description'),
      },
    ],
    [
      'argentina, classic-tours',
      {
        title: trans('Discover Argentinas Classic Tours'),
        description: trans('Discover Argentinas Classic Tours__description'),
      },
    ],
    [
      'argentina, food-gastronomy',
      {
        title: trans('Indulge in Argentinas Food & Gastronomy'),
        description: trans(
          'Indulge in Argentinas Food & Gastronomy__description'
        ),
      },
    ],
    [
      'argentina, culture-history',
      {
        title: trans('Unravel Argentinas Culture & History'),
        description: trans('Unravel Argentinas Culture & History__description'),
      },
    ],
    [
      'argentina, beach-sun',
      {
        title: trans('Argentina Beach & Sun Escapes'),
        description: trans('Argentina Beach & Sun Escapes__description'),
      },
    ],
    // argentina travel styles
    [
      'argentina, classic-by-wonder-travel',
      {
        title: trans('Explore Argentina with Classic by Wonder Travel'),
        description: trans(
          'Explore Argentina with Classic by Wonder Travel__description'
        ),
      },
    ],
    [
      'argentina, wild-classic',
      {
        title: trans('Argentina Wild Classic'),
        description: trans('Argentina Wild Classic__description'),
      },
    ],
    [
      'argentina, wonder-flavours',
      {
        title: trans('Argentina Wonder Flavours'),
        description: trans('Argentina Wonder Flavours__description'),
      },
    ],
    [
      'argentina, explorer-edition',
      {
        title: trans('Argentina Explorer Edition'),
        description: trans('Argentina Explorer Edition__description'),
      },
    ],
    // argentina price
    [
      'argentina, <1000',
      {
        title: textTitlePrice(
          'Travel to country on a budget-friendly trip',
          'Argentina'
        ),
        description: trans(
          'Travel to Argentina on a budget-friendly trip__description'
        ),
      },
    ],
    [
      'argentina, <2000',
      {
        title: textTitlePrice(
          'Travel to country with our standard-priced trips',
          'Argentina'
        ),
        description: trans(
          'Travel to Argentina with our standard-priced trips__description'
        ),
      },
    ],
    [
      'argentina, >2000',
      {
        title: textTitlePrice(
          'Travel to country & find premium experiences',
          'Argentina'
        ),
        description: trans(
          'Travel to Argentina & find premium experiences__description'
        ),
      },
    ],
    // colombia category
    [
      'colombia, nature-wildlife',
      {
        title: trans('Discover Colombias Rich Nature & Wildlife'),
        description: trans(
          'Discover Colombias Rich Nature & Wildlife__description'
        ),
      },
    ],
    [
      'colombia, adventure',
      {
        title: trans('Colombia Adventure Expeditions'),
        description: trans('Colombia Adventure Expeditions__description'),
      },
    ],
    [
      'colombia, classic-tours',
      {
        title: trans('Explore Colombias Classic Tours'),
        description: trans('Explore Colombias Classic Tours__description'),
      },
    ],
    [
      'colombia, food-gastronomy',
      {
        title: trans('Experience Colombias Food & Gastronomy'),
        description: trans(
          'Experience Colombias Food & Gastronomy__description'
        ),
      },
    ],
    [
      'colombia, culture-history',
      {
        title: trans('Dive into Colombias Culture & History'),
        description: trans(
          'Dive into Colombias Culture & History__description'
        ),
      },
    ],
    [
      'colombia, beach-sun',
      {
        title: trans('Colombia Beach & Sun Escapes'),
        description: trans('Colombia Beach & Sun Escapes__description'),
      },
    ],
    // colombia travel style
    [
      'colombia, classic-by-wonder-travel',
      {
        title: trans('Explore Colombia with Classic by Wonder Travel'),
        description: trans(
          'Explore Colombia with Classic by Wonder Travel__description'
        ),
      },
    ],
    [
      'colombia, wild-classic',
      {
        title: trans('Colombia Wild Classic'),
        description: trans('Colombia Wild Classic__description'),
      },
    ],
    [
      'colombia, wonder-flavours',
      {
        title: trans('Colombia Wonder Flavours'),
        description: trans('Colombia Wonder Flavours__description'),
      },
    ],
    [
      'colombia, explorer-edition',
      {
        title: trans('Colombia Explorer Edition'),
        description: trans('Colombia Explorer Edition__description'),
      },
    ],
    // colombia price
    [
      'colombia, <1000',
      {
        title: textTitlePrice(
          'Travel to country on a budget-friendly trip',
          'Colombia'
        ),
        description: trans(
          'Travel to Colombia on a budget-friendly trip__description'
        ),
      },
    ],
    [
      'colombia, <2000',
      {
        title: textTitlePrice(
          'Travel to country with our standard-priced trips',
          'Colombia'
        ),
        description: trans(
          'Travel to Colombia with our standard-priced trips__description'
        ),
      },
    ],
    [
      'colombia, >2000',
      {
        title: textTitlePrice(
          'Travel to country & find premium experiences',
          'Colombia'
        ),
        description: trans(
          'Travel to Colombia & find premium experiences__description'
        ),
      },
    ],
    // costa-rica category
    [
      'costa-rica, nature-wildlife',
      {
        title: trans('Explore Costa Ricas Rich Nature & Wildlife'),
        description: trans(
          'Explore Costa Ricas Rich Nature & Wildlife__description'
        ),
      },
    ],
    [
      'costa-rica, adventure',
      {
        title: trans('Costa Rica Adventure Expeditions'),
        description: trans('Costa Rica Adventure Expeditions__description'),
      },
    ],
    [
      'costa-rica, classic-tours',
      {
        title: trans('Discover Costa Ricas Classic Tours'),
        description: trans('Discover Costa Ricas Classic Tours__description'),
      },
    ],
    [
      'costa-rica, food-gastronomy',
      {
        title: trans('Experience Costa Ricas Food & Gastronomy'),
        description: trans(
          'Experience Costa Ricas Food & Gastronomy__description'
        ),
      },
    ],
    [
      'costa-rica, culture-history',
      {
        title: trans('Dive into Costa Ricas Culture & History'),
        description: trans(
          'Dive into Costa Ricas Culture & History__description'
        ),
      },
    ],
    [
      'costa-rica, beach-sun',
      {
        title: trans('Costa Rica Beach & Sun Escapes'),
        description: trans('Costa Rica Beach & Sun Escapes__description'),
      },
    ],
    // costa-rica travel style
    [
      'costa-rica, classic-by-wonder-travel',
      {
        title: trans('Explore Costa Rica with Classic by Wonder Travel'),
        description: trans(
          'Explore Costa Rica with Classic by Wonder Travel__description'
        ),
      },
    ],
    [
      'costa-rica, wild-classic',
      {
        title: trans('Costa Rica Wild Classic'),
        description: trans('Costa Rica Wild Classic__description'),
      },
    ],
    [
      'costa-rica, wonder-flavours',
      {
        title: trans('Costa Rica Wonder Flavours'),
        description: trans('Costa Rica Wonder Flavours__description'),
      },
    ],
    [
      'costa-rica, explorer-edition',
      {
        title: trans('Costa Rica Explorer Edition'),
        description: trans('Costa Rica Explorer Edition__description'),
      },
    ],
    // costa-rica price
    [
      'costa-rica, <1000',
      {
        title: textTitlePrice(
          'Travel to country on a budget-friendly trip',
          'Costa Rica'
        ),
        description: trans(
          'Travel to Costa Rica on a budget-friendly trip__description'
        ),
      },
    ],
    [
      'costa-rica, <2000',
      {
        title: textTitlePrice(
          'Travel to country with our standard-priced trips',
          'Costa Rica'
        ),
        description: trans(
          'Travel to Costa Rica with our standard-priced trips__description'
        ),
      },
    ],
    [
      'costa-rica, >2000',
      {
        title: textTitlePrice(
          'Travel to country & find premium experiences',
          'Costa Rica'
        ),
        description: trans(
          'Travel to Costa Rica & find premium experiences__description'
        ),
      },
    ],
    // chile category
    [
      'chile, nature-wildlife',
      {
        title: trans('Discover Chiles Rich Nature & Wildlife'),
        description: trans(
          'Discover Chiles Rich Nature & Wildlife__description'
        ),
      },
    ],
    [
      'chile, adventure',
      {
        title: trans('Chile Adventure Expeditions'),
        description: trans('Chile Adventure Expeditions__description'),
      },
    ],
    [
      'chile, classic-tours',
      {
        title: trans('Explore Chiles Classic Tours'),
        description: trans('Explore Chiles Classic Tours__description'),
      },
    ],
    [
      'chile, food-gastronomy',
      {
        title: trans('Indulge in Chiles Food & Gastronomy'),
        description: trans('Indulge in Chiles Food & Gastronomy__description'),
      },
    ],
    [
      'chile, culture-history',
      {
        title: trans('Uncover Chiles Culture & History'),
        description: trans('Uncover Chiles Culture & History__description'),
      },
    ],
    [
      'chile, beach-sun',
      {
        title: trans('Chile Beach & Sun Escapes'),
        description: trans('Chile Beach & Sun Escapes__description'),
      },
    ],
    // chile travel style
    [
      'chile, classic-by-wonder-travel',
      {
        title: trans('Explore Chile with Classic by Wonder Travel'),
        description: trans(
          'Explore Chile with Classic by Wonder Travel__description'
        ),
      },
    ],
    [
      'chile, wild-classic',
      {
        title: trans('Chile Wild Classic'),
        description: trans('Chile Wild Classic__description'),
      },
    ],
    [
      'chile, wonder-flavours',
      {
        title: trans('Chile Wonder Flavours'),
        description: trans('Chile Wonder Flavours__description'),
      },
    ],
    [
      'chile, explorer-edition',
      {
        title: trans('Chile Explorer Edition'),
        description: trans('Chile Explorer Edition__description'),
      },
    ],
    // chile price
    [
      'chile, <1000',
      {
        title: textTitlePrice(
          'Travel to country on a budget-friendly trip',
          'Chile'
        ),
        description: trans(
          'Travel to Chile on a budget-friendly trip__description'
        ),
      },
    ],
    [
      'chile, <2000',
      {
        title: textTitlePrice(
          'Travel to country with our standard-priced trips',
          'Chile'
        ),
        description: trans(
          'Travel to Chile with our standard-priced trips__description'
        ),
      },
    ],
    [
      'chile, >2000',
      {
        title: textTitlePrice(
          'Travel to country & find premium experiences',
          'Chile'
        ),
        description: trans(
          'Travel to Chile & find premium experiences__description'
        ),
      },
    ],
    // ecuador category
    [
      'ecuador, nature-wildlife',
      {
        title: trans('Explore Ecuadors Rich Nature & Wildlife'),
        description: trans(
          'Explore Ecuadors Rich Nature & Wildlife__description'
        ),
      },
    ],
    [
      'ecuador, adventure',
      {
        title: trans('Ecuador Adventure Expeditions'),
        description: trans('Ecuador Adventure Expeditions__description'),
      },
    ],
    [
      'ecuador, classic-tours',
      {
        title: trans('Discover Ecuadors Classic Tours'),
        description: trans('Discover Ecuadors Classic Tours__description'),
      },
    ],
    [
      'ecuador, food-gastronomy',
      {
        title: trans('Experience Ecuadors Food & Gastronomy'),
        description: trans(
          'Experience Ecuadors Food & Gastronomy__description'
        ),
      },
    ],
    [
      'ecuador, culture-history',
      {
        title: trans('Dive into Ecuadors Culture & History'),
        description: trans('Dive into Ecuadors Culture & History__description'),
      },
    ],
    [
      'ecuador, beach-sun',
      {
        title: trans('Ecuador Beach & Sun Escapes'),
        description: trans('Ecuador Beach & Sun Escapes__description'),
      },
    ],
    // ecuador travel style
    [
      'ecuador, classic-by-wonder-travel',
      {
        title: trans('Explore Ecuador with Classic by Wonder Travel'),
        description: trans(
          'Explore Ecuador with Classic by Wonder Travel__description'
        ),
      },
    ],
    [
      'ecuador, wild-classic',
      {
        title: trans('Ecuador Wild Classic'),
        description: trans('Ecuador Wild Classic__description'),
      },
    ],
    [
      'ecuador, wonder-flavours',
      {
        title: trans('Ecuador Wonder Flavours'),
        description: trans('Ecuador Wonder Flavours__description'),
      },
    ],
    [
      'ecuador, explorer-edition',
      {
        title: trans('Ecuador Explorer Edition'),
        description: trans('Ecuador Explorer Edition__description'),
      },
    ],

    // ecuador price
    [
      'ecuador, <1000',
      {
        title: textTitlePrice(
          'Travel to country on a budget-friendly trip',
          'Ecuador'
        ),
        description: trans(
          'Travel to Ecuador on a budget-friendly trip__description'
        ),
      },
    ],
    [
      'ecuador, <2000',
      {
        title: textTitlePrice(
          'Travel to country with our standard-priced trips',
          'Ecuador'
        ),
        description: trans(
          'Travel to Ecuador with our standard-priced trips__description'
        ),
      },
    ],
    [
      'ecuador, >2000',
      {
        title: textTitlePrice(
          'Travel to country & find premium experiences',
          'Ecuador'
        ),
        description: trans(
          'Travel to Ecuador & find premium experiences__description'
        ),
      },
    ],
    // mexico category
    [
      'mexico, nature-wildlife',
      {
        title: trans('Explore Mexicos Rich Nature & Wildlife'),
        description: trans(
          'Explore Mexicos Rich Nature & Wildlife__description'
        ),
      },
    ],
    [
      'mexico, adventure',
      {
        title: trans('Mexico Adventure Expeditions'),
        description: trans('Mexico Adventure Expeditions__description'),
      },
    ],
    [
      'mexico, classic-tours',
      {
        title: trans('Discover Mexicos Classic Tours'),
        description: trans('Discover Mexicos Classic Tours__description'),
      },
    ],
    [
      'mexico, food-gastronomy',
      {
        title: trans('Experience Mexicos Food & Gastronomy'),
        description: trans('Experience Mexicos Food & Gastronomy__description'),
      },
    ],
    [
      'mexico, culture-history',
      {
        title: trans('Dive into Mexicos Culture & History'),
        description: trans('Dive into Mexicos Culture & History__description'),
      },
    ],
    [
      'mexico, beach-sun',
      {
        title: trans('Mexico Beach & Sun Escapes'),
        description: trans('Mexico Beach & Sun Escapes__description'),
      },
    ],
    // mexico travel style
    [
      'mexico, classic-by-wonder-travel',
      {
        title: trans('Explore Mexico with Classic by Wonder Travel'),
        description: trans(
          'Explore Mexico with Classic by Wonder Travel__description'
        ),
      },
    ],
    [
      'mexico, wild-classic',
      {
        title: trans('Mexico Wild Classic'),
        description: trans('Mexico Wild Classic__description'),
      },
    ],
    [
      'mexico, wonder-flavours',
      {
        title: trans('Mexico Wonder Flavours'),
        description: trans('Mexico Wonder Flavours__description'),
      },
    ],
    [
      'mexico, explorer-edition',
      {
        title: trans('Mexico Explorer Edition'),
        description: trans('Mexico Explorer Edition__description'),
      },
    ],
    // mexico price
    [
      'mexico, <1000',
      {
        title: textTitlePrice(
          'Travel to country on a budget-friendly trip',
          'Mexico'
        ),
        description: trans(
          'Travel to Mexico on a budget-friendly trip__description'
        ),
      },
    ],
    [
      'mexico, <2000',
      {
        title: textTitlePrice(
          'Travel to country with our standard-priced trips',
          'Mexico'
        ),
        description: trans(
          'Travel to Mexico with our standard-priced trips__description'
        ),
      },
    ],
    [
      'mexico, >2000',
      {
        title: textTitlePrice(
          'Travel to country & find premium experiences',
          'Mexico'
        ),
        description: trans(
          'Travel to mexico & find premium experiences__description'
        ),
      },
    ],
    // peru category
    [
      'peru, nature-wildlife',
      {
        title: trans('Explore Perus Rich Nature & Wildlife'),
        description: trans('Explore Perus Rich Nature & Wildlife__description'),
      },
    ],
    [
      'peru, adventure',
      {
        title: trans('Peru Adventure Expeditions'),
        description: trans('Peru Adventure Expeditions__description'),
      },
    ],
    [
      'peru, classic-tours',
      {
        title: trans('Discover Perus Classic Tours'),
        description: trans('Discover Perus Classic Tours__description'),
      },
    ],
    [
      'peru, food-gastronomy',
      {
        title: trans('Experience Perus Food & Gastronomy'),
        description: trans('Experience Perus Food & Gastronomy__description'),
      },
    ],
    [
      'peru, culture-history',
      {
        title: trans('Dive into Perus Culture & History'),
        description: trans('Dive into Perus Culture & History__description'),
      },
    ],
    [
      'peru, beach-sun',
      {
        title: trans('Peru Beach & Sun Escapes'),
        description: trans('Peru Beach & Sun Escapes__description'),
      },
    ],
    // peru travel style
    [
      'peru, classic-by-wonder-travel',
      {
        title: trans('Explore Mexico with Classic by Wonder Travel'),
        description: trans(
          'Explore Mexico with Classic by Wonder Travel__description'
        ),
      },
    ],
    [
      'peru, wild-classic',
      {
        title: trans('Peru Wild Classic'),
        description: trans('Peru Wild Classic__description'),
      },
    ],
    [
      'peru, wonder-flavours',
      {
        title: trans('Peru Wonder Flavours'),
        description: trans('Peru Wonder Flavours__description'),
      },
    ],
    [
      'peru, explorer-edition',
      {
        title: trans('Peru Explorer Edition'),
        description: trans('Peru Explorer Edition__description'),
      },
    ],
    // peru price
    [
      'peru, <1000',
      {
        title: textTitlePrice(
          'Travel to country on a budget-friendly trip',
          'Peru'
        ),
        description: trans(
          'Travel to Peru on a budget-friendly trip__description'
        ),
      },
    ],
    [
      'peru, <2000',
      {
        title: textTitlePrice(
          'Travel to country with our standard-priced trips',
          'Peru'
        ),
        description: trans(
          'Travel to Peru with our standard-priced trips__description'
        ),
      },
    ],
    [
      'peru, >2000',
      {
        title: textTitlePrice(
          'Travel to country & find premium experiences',
          'Peru'
        ),
        description: trans(
          'Travel to Peru & find premium experiences__description'
        ),
      },
    ],
  ]);
  return metaTags;
};

export default metaTagsSearch;
