import React, { useContext } from 'react';
import { BookingContext } from '../../../bookingContext';
import Image from 'next/image';

const ImageBooking = ({ className }: { className?: string }) => {
  const { infoPackage } = useContext(BookingContext);
  return (
    <div className={className}>
      <Image
        src={infoPackage?.image_booking?.length > 0 ? infoPackage?.image_booking : '/assets/images/beach.jpg'}
        alt='imagen del viaje'
        fill
        sizes="(min-width: 420px) 40vw"
      />
    </div>
  );
};

export default ImageBooking;
