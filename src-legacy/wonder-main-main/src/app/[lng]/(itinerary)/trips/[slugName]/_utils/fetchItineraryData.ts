import { useTranslation } from '@i18n-server';
import useGetDataItinerary from './useGetItinerary';
import { IbackofficeDataItinerary } from '@services/trips/getDataItinerary.model';
import { TFunction } from 'i18next';
import { ICmsContentItineraryResponse } from '@utils/formaters/formaters.model';

async function fetchItineraryData(
  lng: string,
  slugName: string
): Promise<{
  infoItinerary: IbackofficeDataItinerary;
  infoCms: ICmsContentItineraryResponse;
  t: TFunction<string>;
}> {
  const { infoItinerary, infoCms } = await useGetDataItinerary(lng, slugName);

  const { t } = await useTranslation(lng, 'itinerary');

  return { infoItinerary, infoCms, t };
}

export default fetchItineraryData;
