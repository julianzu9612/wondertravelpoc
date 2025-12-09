export interface IPrice {
  id: number;
  price: string;
  foreign_price: string;
  quantity: number;
  deposit_price: string;
}

export interface IAccommodation {
  id: 1;
  type: string;
  name: string;
}

export interface IIndividuals {
  individual_id: number;
  quantity_individual: number;
}

export interface IDataSummary {
  individuals: IIndividuals[];
  accommodation_id: number;
  package_id: number;
}


interface IInstallments {
  percent: string,
  amount: number,
  days_before_travel: number,
  number_payment: number
}

export interface IResumeBooking {
    total: string,
    iva: string,
    installments: IInstallments[]
}

export interface IBookingRes {
  code: string;
  status: string;
  total_price: string;
  total_deposit_price: string;
}
