import { StepI } from '@components/step/Step.model';

export interface eventData {
  name: string;
  label: string;
  is_green: boolean;
  is_feature: boolean;
  start_time: string;
  end_time: string;
  description: string;
}

export interface itineraryI {
  day: number;
  events: eventData[];
}

export interface SummaryItinerayI {
  title?: string;
  lng: string;
  itinerary: itineraryI[];
  feed_map_image_thumbnail: string;
  ebook_url: string;
  typeTrip?: number | string;
  productLabel: string;
}

export interface ItineraryResponse {
  [key: number]: StepI[];
}

export enum TYPE_TRIPS {
  ROUNDTRIPS = 'roundtrip',
}
