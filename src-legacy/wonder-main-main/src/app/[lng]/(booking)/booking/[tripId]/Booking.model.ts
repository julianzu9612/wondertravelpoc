export type TIndividualType =
  | 'ADULT'
  | 'ELDERLY'
  | 'FOREIGN'
  | 'CHILDREN'
  | 'BABIES';
export interface IIndividualTypeItem {
  id: number;
  individual_type: TIndividualType;
  min_age: number;
}

export type TIndividualsTypesResponse = {
  id: number;
  title: string;
  image_booking: string;
  individuals: IIndividualTypeItem[];
  is_recurrent: boolean;
  depend_availability_validation: boolean;
  days: number;
};

export interface IDateRangeItem {
  id?: number | null;
  start_date: string;
  end_date: string;
  places_avaliable?: number;
}
export interface IBlockedDates {
  id?: number | null;
  start_date: string;
  end_date: string;
}

export type TDateRangeList = {
  dates: IDateRangeItem[];
  blockedDates: IBlockedDates[];
};

export interface IDateRangeItemItineraryOld {
  id: number;
  start_date: string;
  end_date: string;
  total_places: number;
  date_type: string;
  price: string;
  discount: number;
  wetravel_uuid: string;
  price_discount: string;
}

export type TDateRangeListItinerary = IDateRangeItemItineraryOld[];

export interface IResumeObject {
  resumeDetailed: ((string | number)[] | undefined)[];
  total: string | number;
  totalTravelers: number;
  minimalResume: string;
}

export interface IStep1Booking {
  typesIndividuals: TIndividualsTypesResponse;
  datesOfTrip: TDateRangeListItinerary;
}

export interface IStep4 {
  getDataSummaryCard: IResumeObject;
}
export interface IPaymenStep {
  getDataSummaryCard: IResumeObject;
}
