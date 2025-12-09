import 'server-only';

import {
  ResDataItinerary,
  IbackofficeDataItinerary,
} from './getDataItinerary.model';
import { API_ENDPOINTS } from '@services/endpoints';
import { connect } from '@services/connect';
import { formatGeneralInfo } from '@utils/formaters/cleanDataContent';
import { getCurrencyCookie } from '../../app/actions';
import { filterOldDatesByEndDate } from '@utils/filterOldDatesByEndDate';

const ITINERAY = API_ENDPOINTS.ITINERAY;

export async function getItinerary({
  slugName,
  lang,
}: {
  slugName: string;
  lang: string;
}): Promise<IbackofficeDataItinerary | null> {
  try {
    const currency = await getCurrencyCookie();
    const { data } = await connect.get<ResDataItinerary>(
      `${ITINERAY}/${slugName}/`,
      {
        headers: { lang: lang.toUpperCase(), currency },
      }
    );

    const filteredDates = filterOldDatesByEndDate(data?.trip_dates);

    return {
      title: data?.product.label,
      subtitle: data?.product.subtitle,
      location: data?.product.location,
      product: data?.product,
      wonderLeader: data.product.wonder_leader,
      itineraryData: data?.itinerary,
      uuidWeTravel: data?.wetravel_uuid ?? '',
      days: data?.days,
      pricing: data?.price,
      tripId: data.trip_id,
      hasBooking: data?.has_booking,
      generalInformation: formatGeneralInfo(data.product.general_info),
      tripName: data.trip_name,
      code: data?.product?.code,
      tags: data?.product?.tags,
      price_discount: data.price_discount,
      discount: data?.discount,
      price: data?.price,
      bookNowPayLater: data?.book_now_pay_later,
      tripDates: filteredDates,
      showDates: data?.show_dates,
      newItinerary: data?.new_package,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}
