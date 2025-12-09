export interface ICardSharedTrip {
  title: string;
  textMainCta: string;
  textSecondaryCta?: string;
  image: string;
  date: string;
  travellers: string[];
  linkCompleteData: string;
  linkItinerary: string;
  className?: string;
  isShared?: boolean;
  typeTravel: string;
}
