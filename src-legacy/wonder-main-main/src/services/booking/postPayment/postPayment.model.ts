import { IUserTypesAndCuantity } from '../../../app/[lng]/(booking)/booking.model';

export interface IPostPaymentProps {
  individuals: IUserTypesAndCuantity[];
  accommodation_id: number;
  booking_id: number;
  email_contact: string;
  installments: number;
  token: string;
  acceptance_token: string;
}

type TStatusPayment = 'PENDING' 

export interface IResPostPayment {
  data: {
    id: '169897-1727721368-66533';
    created_at: '2024-09-30T18:36:12.525Z';
    finalized_at: null;
    amount_in_cents: number;
    reference: '72024963';
    customer_email: 'a@gmail.com';
    currency: 'COP';
    payment_method_type: 'CARD';
    payment_method: {
      type: 'CARD';
      extra: {
        bin: '424242';
        name: 'VISA-4242';
        brand: 'VISA';
        exp_year: '28';
        card_type: 'CREDIT';
        exp_month: '08';
        last_four: '4242';
        card_holder: 'asdfa';
        is_three_ds: boolean;
      };
      installments: 1;
    };
    status: TStatusPayment;
    status_message: null;
    billing_data: null;
    shipping_address: null;
    redirect_url: null;
    payment_source_id: null;
    payment_link_id: null;
    customer_data: null;
    bill_id: null;
    taxes: [];
    tip_in_cents: null;
  };
}
