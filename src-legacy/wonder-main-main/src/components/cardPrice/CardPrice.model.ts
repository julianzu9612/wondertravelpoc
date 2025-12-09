export interface CardPriceI {
  durationDays: string;
  uuidWeTravel?: string;
  hasBooking?: boolean;
  title?: string;
  tripId: string;
  isWonderLeader?: boolean;
  calendly?: string;
  typeProduct: string;
  lng: string;
  price: `${number}`;
  discount?: number;
  price_discount?: `${number}` | string;
  bookNowPayLater?: boolean;
  code: string;
  newItinerary?: number | null
}
