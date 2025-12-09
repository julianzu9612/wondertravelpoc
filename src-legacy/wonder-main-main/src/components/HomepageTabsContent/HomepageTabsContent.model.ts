import { IProductTrip } from '@components/GridTrips/GridTrips.model';

export interface IHomepageTabsContent {
  initTab: number,
  allTrips:  IProductTrip[] 
}

export interface IHomepageTabsContentTab {
  tab: IWonderLines,
  allTrips: IProductTrip[]
}

export interface IWonderLines{
  id: number;
  label: string;
  landing: string;
  title: string;
  headline: string
}