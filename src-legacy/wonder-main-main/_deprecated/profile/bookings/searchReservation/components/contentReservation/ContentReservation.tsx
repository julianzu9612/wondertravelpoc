'use client';
import { useEffect, useState } from 'react';
import NextTrip from '@components/NextTrip/NextTrip';
import Step1 from '../step1/Step1';
import Step2 from '../step2/Step2';
import { IContentReservation, TripsState } from './contentReservation.model';
import { State } from '../../../types.model';
import { StructureSearchBooking } from '@utils/formaters/structureSearchBooking';
import dayjs from 'dayjs';

const ContentReservation = ({ queryState, lng }: IContentReservation) => {
  const [trips, setTrips] = useState<TripsState[]>([]);
  const [tab, setTab] = useState(1);
  const changeTab = (number: number) => setTab(number);

  const upcomingTrips = trips.filter(({ dates }) => {
    const [start_date] = dates;
    const dayToday = dayjs();
    const dayStart = dayjs(start_date);
    return dayStart.isAfter(dayToday);
  });
  const onConsultBook = async () => {
    const bookings = await StructureSearchBooking(lng);
    setTrips(bookings);
    changeTab(1);
  };
  useEffect(() => {
    if (State.MENU_NO_LOGGED !== queryState) {
      onConsultBook();
    }
  }, []);
  switch (queryState) {
    case State.MENU_NO_LOGGED:
      if (upcomingTrips.length > 0) return <NextTrip trips={trips} />;
      else {
        return (
          <>
            {tab === 1 ? (
              <Step1
                onSendOtp={() => {
                  changeTab(2);
                }}
              />
            ) : (
              <Step2 onConsultBook={onConsultBook} />
            )}
          </>
        );
      }
    default:
      return <NextTrip trips={upcomingTrips} />;
  }
};

export default ContentReservation;
