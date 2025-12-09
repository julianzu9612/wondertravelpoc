import { itemsGeneralInformation } from '@components/generalInformation/GeneralInformation';
import { review } from '@components/socialProof/SocialProof.model';
import { T } from '../../../../../types/common';

export interface ItineraryParams {
  slugName?: string;
  lng: string;
}
export interface FunFactI {
  funFact: string;
  urlImage: string;
  t: T;
}
export interface itineraryDataContentI {
  description: string;
  title: string;
  subtitle: string;
  place: string;
  coin: string;
  imagesCarousel: string[];
  generalInformation: itemsGeneralInformation[];
  funFact: FunFactI;
  reviews: review[];
}
