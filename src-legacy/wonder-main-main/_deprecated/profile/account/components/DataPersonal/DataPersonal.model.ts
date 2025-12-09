import { IGetTraveler } from '@services/profile/traveler/getTraveler/getTraveler.model';
export interface Values {
  document_type?: number | null;
  genre?: string | null;
  nationality?: string | null;
}
export interface Inputs extends IGetTraveler {
  password: string;
  password_confirmation?: string;
  new_password: string;
  code_phone: string;
}
export interface IDataPerson {
  lng?: string;
}
