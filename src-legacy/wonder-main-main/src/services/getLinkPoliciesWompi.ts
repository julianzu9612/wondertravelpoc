import {
  IDataCreditCard,
  IDataPolicies,
} from '../app/[lng]/(booking)/booking.model';

export interface ICardTokenized {
  status: string;
  data: {
    id: string;
    created_at: string;
    brand: string;
    name: string;
    last_four: string;
    bin: string;
    exp_year: string;
    exp_month: string;
    card_holder: string;
    created_with_cvc: boolean;
    expires_at: string;
    validity_ends_at: string;
  };
}

interface IDataPaymentSource {
  booking_reference: string;
  acceptance_token: string;
  amount: number;
  amount_in_cents: string;
  customer_email: string;
  token: string;
  installments: string;
  type: string;
}

interface IResponsePaymentSource {
  resume: {
    data: {
      id: number;
      public_data: {
        type: string;
      };
      type: string;
      status: string;
    };
  }
  pre_booking: string;
}

export const getLinkPoliciesWompi = async (): Promise<
  IDataPolicies | string
> => {
  const endpoint = 'merchants/';
  const url =
    process.env.NEXT_PUBLIC_ENDPOINT_WOMPI +
    endpoint +
    process.env.NEXT_PUBLIC_PUBLIC_KEY_WOMPI;
  
  try {
    const dataWompiCommers = await fetch(url);
    const responseData = await dataWompiCommers?.json();
  
    if (responseData?.data) {
      return responseData.data;
    } else return '';

  }catch(e) {
    throw new Error(`error in wompi policies: ${e}`);
  }

};

export const postToTokenizeCard = async (
  cardData: IDataCreditCard
): Promise<ICardTokenized | Error> => {
  const endpoint = 'tokens/cards';
  const url = process.env.NEXT_PUBLIC_ENDPOINT_WOMPI + endpoint;
  try {
    const res = await fetch(url, {
      method: 'post',
      headers: new Headers({
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_PUBLIC_KEY_WOMPI,
      }),
      body: JSON.stringify(cardData),
    });
  
    const data = await res.json();
  
    return data;
    
  } catch (error) {
    console.error(error);
    return new Error;
  }
};

export const createPaymenSource = async (
  paymentObject: IDataPaymentSource
): Promise<IResponsePaymentSource> => {
  const endpoint = '/booking/payment';
  const url = process.env.NEXT_PUBLIC_API_WOUNDER_ROOT + endpoint;

  try {
    const res = await fetch(url, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentObject),
    });
  
    const data = await res.json();
  
    return data;

  } catch {
    throw new Error;
  }
  
};
