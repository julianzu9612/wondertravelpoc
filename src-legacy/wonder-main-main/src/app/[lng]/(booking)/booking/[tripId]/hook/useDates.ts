import getTripDates from '@services/trips/getTripDates/getTripDates';
import { getCurrentLang } from '@utils/lang';
import { Dispatch, useEffect, useState } from 'react';
import { IBlockedDates, IDateRangeItem } from '../Booking.model';
import { getCookies } from 'cookies-next';
import { DEFAULT_CURRENCY } from '../../../../../../middleware';
import { IErrorToastState } from '../../../booking.model';

export interface IUseDates {
  dates: IDateRangeItem[];
  blockedDates: IBlockedDates[];
  getDates: (places: number) => Promise<void>;
  selectedDate: IDateRangeItem;
  setSelectedDate: Dispatch<IDateRangeItem>;
}

const useDates = (
  tripId: number,
  showError: Dispatch<IErrorToastState>,
  is_recurrent: boolean
): IUseDates => {
  const lng = getCurrentLang();
  const cookies = getCookies();

  const [dates, setDates] = useState<IDateRangeItem[]>([]);
  const [blockedDates, setBlockedDates] = useState<IBlockedDates[]>([]);
  const [selectedDate, setSelectedDate] = useState<IDateRangeItem>(
    {} as IDateRangeItem
  );

  const getDates = async (places?: number) => {
    if (places && places > 0) {
      const resDates = await getTripDates(
        tripId,
        lng,
        cookies.currency ?? DEFAULT_CURRENCY
      );
      setBlockedDates(resDates?.blockedDates ?? []);

      if (resDates?.dates && resDates.dates.length > 0) {
        setDates(resDates.dates);
      } else {
        setSelectedDate({} as IDateRangeItem);
        setDates([]);
        if (!is_recurrent ) {
          showError({
            show: true,
            message: 'No hay fechas para esta cantidad de viajeros',
          });
        }
      }
    }
  };

  useEffect(() => {
    async () => {
      if (!is_recurrent) await getDates();
    };
  }, []);

  return { dates, blockedDates, getDates, selectedDate, setSelectedDate };
};

export default useDates;
