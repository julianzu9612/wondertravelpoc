import { IbackofficeDataItinerary } from '@services/trips/getDataItinerary.model';
import { TFunction } from 'i18next';

function createCardPriceProps(
  infoItinerary: IbackofficeDataItinerary,
  lng: string,
  t: TFunction<string>
) {
  const {
    title,
    wonderLeader,
    product,
    days,
    tags,
    itineraryData,
    hasBooking,
    tripId,
    generalInformation,
    price_discount,
    price,
    bookNowPayLater,
    uuidWeTravel,
    showDates,
    code,
    newItinerary
  } = infoItinerary;

  const durationDays = `${days} ${t('durationDays.days')}*`;

  return {
    title,
    tripId,
    hasBooking,
    durationDays,
    price,
    lng,
    price_discount,
    uuidWeTravel,
    typeProduct: product.product_type.name,
    isWonderLeader: !!wonderLeader,
    calendly: wonderLeader?.calendly_url,
    bookNowPayLater,
    tags,
    itineraryData,
    generalInformation,
    showDates,
    code,
    newItinerary
  };
}

export default createCardPriceProps;
