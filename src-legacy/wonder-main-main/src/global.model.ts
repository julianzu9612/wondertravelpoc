import { IbackofficeDataItinerary } from '@services/trips/getDataItinerary.model';
import { ICmsContentItineraryResponse } from '@utils/formaters/formaters.model';

export interface IDataItinerary {
  infoItinerary: IbackofficeDataItinerary;
  infoCms: ICmsContentItineraryResponse;
}
