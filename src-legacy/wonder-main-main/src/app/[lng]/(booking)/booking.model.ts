import {
  IDateRangeItem,
} from './booking/[tripId]/Booking.model';
import { IUseUser } from './booking/[tripId]/hook/useUser';
import { IUseInfoLider } from './booking/[tripId]/hook/useInfoLider';
import { IUseAccommodation } from './booking/[tripId]/hook/useAcommodation';
import { IResumeBooking } from '@services/serviceModel.model';
import { IUseCreditCard } from './booking/[tripId]/hook/useCreditCard';
import { Dispatch, RefObject } from 'react';
import { IUseNavigationSteps } from './booking/[tripId]/hook/useNavigationSteps';
import { FormTravelerRef } from './booking/[tripId]/_components/formDataUser/FormTraveler';
import { IUseDates } from './booking/[tripId]/hook/useDates';

export interface IDateSelected {
  dateId: number;
  priceDate: string;
}

export interface IAccomodationSelected {
  accommodationId: number;
}

export interface ITypesUserInDate {
  id: number;
  individual_type: string;
  min_age: 0;
}

export interface IUserTypesAndCuantity {
  individual_id: number;
  quantity_individual: number;
}

export interface IInfoLider {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  prefix_number?: string;
  phone?: string;
  document_type?: string;
  document_number?: string;
}
export interface IContactInfo {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  prefix_number?: string;
  phone?: string;
  document_type?: number;
  document_number?: string;
}

export interface IPreBooking {
  accommodation_id: number;
  package_id: number;
  leader_id: number;
  individuals: IUserTypesAndCuantity[];
  accompanyin: (IAccompanying | null | undefined)[];
  trip_dates_id?: number | null;
  is_recurrent?: boolean;
  date_selected?: IDateRangeItem
}

export interface IResPreBookign {
  prebooking: {
    id: number;
    code: string;
    status: string;
    total_price: string;
    total_deposit_price: number;
    package: number;
    leader: number;
  };
  travelers: [
    {
      id: number;
      name: string;
      document_number: string;
      email: string | null;
      leader: number;
      booking: number;
      document_type: number;
    }
  ];
}

export type TNumberBooking = string;

export interface IDataCreditCard {
  number?: string;
  cvc?: string;
  exp_month?: string;
  exp_year?: string;
  card_holder?: string;
  installments?: string;
  email_payment?: string;
}

interface IPaymentMethods {
  name: string;
  payment_processors: [
    {
      name: string;
    }
  ];
}

export interface IDataPolicies {
  id: number;
  name: string;
  email: string;
  contact_name: string;
  phone_number: string;
  active: boolean;
  logo_url: string | null;
  legal_name: string;
  legal_id_type: string;
  legal_id: string;
  public_key: string;
  accepted_currencies: string[];
  fraud_javascript_key: string | null;
  fraud_groups: [];
  accepted_payment_methods: string[];
  payment_methods: IPaymentMethods[];
  presigned_acceptance: {
    acceptance_token: string;
    permalink: string;
    type: string;
  };
}

export interface IAccompanying {
  id?: number;
  name: string;
  last_name: string;
  document_type: number;
  document_number: string;
  email?: string;
}

export interface IAccompanyingState {
  [key: string]: IAccompanying;
}

export interface IErrorToastState {
  show: boolean;
  message?: string;
}

export interface ITypeBookingContext
  extends IUseUser,
    IUseInfoLider,
    IUseAccommodation,
    IUseCreditCard,
    IUseDates,
    IUseNavigationSteps {
  tripId: string;
  lng: string;
  resumeBooking: IResumeBooking;
  completedFormInfoLider: boolean;
  completedData: boolean;
  linkPolicies: string;
  acceptance_token: string;

  load: boolean;
  toggleLoad: Dispatch<boolean>;

  error: IErrorToastState;
  showError: Dispatch<IErrorToastState>;
 contractChecked: boolean;
  setContractChecked: Dispatch<boolean>;

  proccedPayment: () => Promise<string | void>;

  amountSelected: string;
  setAmountSelected: Dispatch<string>;

  formContactRef: RefObject<HTMLFormElement>;
  submitForm: () => void;
  formListTravelerstRef: RefObject<(FormTravelerRef | null)[]>;

  submitFormListTravelers: () => void;
  leaderCreated: boolean;
  setLeaderCreated: Dispatch<boolean>;

  accompanying: IAccompanyingState;
  setAccompaying: Dispatch<IAccompanyingState>;
  checkAccompanying: boolean;

  setApplyInstallments: Dispatch<boolean>;
  
  changeBookingForValidateDates: () => Promise<IResPreBookign['prebooking'] | null>
}
