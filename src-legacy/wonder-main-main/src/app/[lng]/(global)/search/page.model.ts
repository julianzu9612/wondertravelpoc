export interface ISearchPage {
  params: { lng: string };
  searchParams: ISearchParams;
}
export interface ISearchParams {
  query: string;
  offset: number;
  limit: number;
  priceMin: string;
  priceMax: string;
  price: string;
  label: string;
  productType: string;
  duration: string;
  physicalPerformance: string;
  acommodationQuality: string;
  tags: string;
  countries: string;
  dateStart: string;
  dateEnd: string;
  travelStyles?: string;
  start_date_after: string;
  start_date_before: string;
  hasDiscount: boolean;
  durationMin: number;
  durationMax: number;
  priceSort: string;
}
