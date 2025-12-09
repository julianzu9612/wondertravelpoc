import getAccomodations, {
  IGetAccomodationParam,
} from '@services/getAccomodations';
import { IAccommodation } from '@services/serviceModel.model';
import { Dispatch, useEffect, useState } from 'react';

export interface IUseAccommodation {
  accommodations: IAccommodation[];
  getAccommodations: (totalUsers: number) => Promise<IAccommodation[]>;
  accommodationSelected: IAccommodation;
  setAccommodationSelected: Dispatch<IAccommodation>;
}

const useAcommodation = ({
  tripId,
  dateType,
  quantityPeople,
  lng,
  currency
}: IGetAccomodationParam): IUseAccommodation => {
  const [accommodations, setAccommodations] = useState<IAccommodation[]>([]);
  const [accommodationSelected, setAccommodationSelected] =
    useState<IAccommodation>({} as IAccommodation);

  const getAccommodations = async (
    totalUsers: number
  ): Promise<IAccommodation[]> => {
    if (totalUsers > 0) {
      const resAccomodation = await getAccomodations({
        tripId,
        quantityPeople: totalUsers,
        lng,
        dateType,
        currency,
      });
      
      // { id: 1, type: 'grupal', name: 'Sencilla' }

      if (!(resAccomodation instanceof Error) && resAccomodation.length > 0) {
        setAccommodations(resAccomodation);
        return resAccomodation;
      }

      return accommodations;
    }
    return accommodations;
  };

  useEffect(() => {
    (async () => {
      await getAccommodations(quantityPeople);
    })();
  }, []);

  return {
    accommodations,
    getAccommodations,
    accommodationSelected,
    setAccommodationSelected,
  };
};

export default useAcommodation;
