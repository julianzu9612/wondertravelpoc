import { useContext } from 'react';
import { BookingContext } from '../../../bookingContext';

const TitleBooking = () => {
  const { infoPackage } = useContext(BookingContext);
  return <>{infoPackage?.title ?? 'no name'}</>;
};

export default TitleBooking;
