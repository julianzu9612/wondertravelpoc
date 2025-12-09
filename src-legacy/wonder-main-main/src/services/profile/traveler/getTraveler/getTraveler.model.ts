export interface IGetTraveler {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  code_phone: string;
  document_type: number | null;
  document_number: string;
  genre: string | null;
  birth_date?: string | null | undefined;
  nationality?: string | null | undefined;
  residential_country?: string | null | undefined;
  address?: string | null | undefined;
  city?: string | null | undefined;
  marital_status?: string;
}
