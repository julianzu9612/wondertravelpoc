export interface ISearchTripsParamsRequest {
  offset?: string;
  limit?: string;
  price_max?: string;
  price_min?: string;
  product_type?: string;
  duration?: string;
  product_physical_performance?: string;
  product_acommodation_quality?: string;
  product_label?: string;
  product_search?: string;
  tags?: string;
  sort?: string;
  countries?: string | string[];
  product_discount_search?: boolean | `${boolean}`;
  duration_min?: number;
  duration_max?: number;
  travel_style?: string[] | string;
  lang?: string;
  currency?: string;
  end_date_after?: string;
  end_date_before?: string;
}

export interface ISearchTripsParams {
  offset?: number;
  limit?: number;
  priceMin?: string;
  priceMax?: string;
  price?: string;
  label?: string;
  productType?: string;
  duration?: string;
  physicalPerformance?: string;
  acommodationQuality?: string;
  page?: string;
  tags?: string;
  sort?: string[];
  countries?: string[] | string;
}

export interface ISearchTrip {
  placeholder: string;
}
