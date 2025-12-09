'use client';
import { Suspense, useContext, useEffect, useState } from 'react';
import { IDateRangeItem } from '../../Booking.model';
import { BookingContext } from '../../../../bookingContext';
import styles from './Dates.module.scss';
import { formatSingleDateRange } from '../../../../../(itinerary)/trips/[slugName]/_components/Dates/utils/formateDAteRange';
import { whatsappUrl } from '../../../../../../../constants';
import { useTranslation } from '@i18n-client';
import 'react-day-picker/style.css';
import './picker.css';
import {
  DateRange,
  DayPicker,
  DayPickerProps,
  Matcher,
} from 'react-day-picker';

const DateItem = ({
  date,
  onClick,
  checked,
  lng,
}: {
  date: IDateRangeItem;
  onClick: () => void;
  checked: boolean;
  lng: string;
}) => {
  const { t } = useTranslation(lng, 'booking');

  return (
    <label
      htmlFor={`date-${date.end_date}`}
      className={`${styles['item-dates']} ${checked ? styles['checked'] : ''}`}
      onClick={() => onClick()}
    >
      <p className={styles['label-date-1']}>{t('from')}:</p>
      <p className={styles['date-1']}>
        {formatSingleDateRange(date.start_date, lng)}
      </p>
      <p className={styles['label-date-2']}>{t('to')}:</p>
      <p className={styles['date-2']}>
        {formatSingleDateRange(date.end_date, lng)}
      </p>
      <input
        defaultChecked={checked ?? false}
        type='radio'
        name='date'
        id={`date-${date.end_date}`}
      />
    </label>
  );
};

const Dates = () => {
  const {
    lng,
    dates,
    blockedDates,
    setSelectedDate,
    selectedDate,
    infoPackage,
  } = useContext(BookingContext);

  if (!infoPackage?.is_recurrent && dates.length <= 0) {
    const message = `¡Hola Wonder! me puedes ayudar buscando fechas disponibles para el itinerario de ${infoPackage.title}`;

    return (
      <div className={styles['dates-booking-empty']}>
        <h4>Upps..</h4>
        <p>
          Para este número de viajeros no contamos con fechas disponibles.{' '}
          <br />
          Contactate con un asesor para ver si encontramos alguno.
        </p>
        <a href={whatsappUrl(message, true)} target='__blank'>
          <button>Contactar asesor</button>
        </a>
      </div>
    );
  }
  const { t } = useTranslation(lng, 'booking');
  const [disabledDatesState, setDisabledDates] = useState<Matcher[]>([
    { from: new Date('2024-01-01'), to: new Date() },
  ]);

  const getFinalDate = (date: Date): Date => {
    const futureDate = new Date(date);
    futureDate.setDate(futureDate.getDate() + (infoPackage?.days - 1));
    return futureDate;
  };

  const setData = (startDate: Date, endDate: Date) => {
    const date = {
      id: null,
      start_date: startDate?.toLocaleDateString('sv-SE'),
      end_date: endDate?.toLocaleDateString('sv-SE'),
    };
    setSelectedDate(date);
    const firstDate = {
      from: startDate,
      to: endDate,
    };
    setSelected(firstDate);
  };

  const [selected, setSelected] = useState<DateRange>();

  useEffect(() => {
    const dateBase = selectedDate.start_date
      ? new Date(selectedDate.start_date)
      : new Date();
    const futureDateCalculated = getFinalDate(dateBase);

    setData(dateBase, futureDateCalculated);

    if (blockedDates.length > 0) {
      const disabledDates: Matcher[] = blockedDates.map((date) => ({
        from: new Date(date?.start_date),
        to: new Date(date?.end_date),
      }));

      setDisabledDates([...disabledDatesState, ...disabledDates]);
    }
  }, []);

  const handleSelect = (dateSelected: Date) => {
    if (dateSelected) {
      const futureDateCalculated = getFinalDate(dateSelected);
      setData(dateSelected, futureDateCalculated);
    }
  };

  const modifiers: DayPickerProps['modifiers'] = {};

  if (selectedDate) {
    modifiers.selected = selected?.from;
    modifiers.range_start = selected?.from;
    modifiers.range_end = selected?.to;
    modifiers.range_middle = (day: Date) =>
      selected?.from && selected.to
        ? day > selected?.from && day < selected?.to
        : false;
  }

  return (
    <div className={styles['dates-booking']}>
      <form>
        <h2>{t('dates.title')}</h2>
        {infoPackage.depend_availability_validation ? (
          <p className={styles['dates-booking__text']}>
            En este viaje puedes escoger cualquier fecha del año, pero tenemos
            que <b> validar la disponibilidad con nuestros anfitriones</b>:
          </p>
        ) : (
          <p className={styles['dates-booking__text']}>
            En este viaje puedes escoger cualquier fecha del año:
          </p>
        )}
        <fieldset>
          {infoPackage.is_recurrent ? (
            <div className={styles['picker']}>
              <Suspense fallback={<p>loading...</p>}>
                <DayPicker
                  timeZone='UTC'
                  fixedWeeks
                  mode='single'
                  selected={selected?.from}
                  onDayClick={handleSelect}
                  modifiers={modifiers}
                  required
                  disabled={disabledDatesState}
                />
              </Suspense>
            </div>
          ) : (
            dates?.map((date, i) => (
              <DateItem
                lng={lng}
                date={date}
                key={i}
                onClick={() => setSelectedDate(date)}
                checked={date.id === selectedDate.id}
              />
            ))
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Dates;
