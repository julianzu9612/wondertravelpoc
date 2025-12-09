import { Dispatch, useEffect, useState } from 'react';
import * as yup from 'yup';
import { IDataCreditCard } from '../../../booking.model';
import { ICardTokenized, postToTokenizeCard } from '@services/getLinkPoliciesWompi';

export interface IUseCreditCard {
  creditCardInfo: IDataCreditCard;
  setCreditCardInfo: Dispatch<IDataCreditCard>;
  completedFormCreditCard: boolean;
  tokenizeCard: () => Promise<ICardTokenized | undefined>;
}

const FormCreditCardSchema = yup.object().shape({
  number: yup.number().required(),
  cvc: yup.number().required(),
  exp_month: yup.number().required(),
  exp_year: yup.string().required(),
  installments: yup.string().required(),
  card_holder: yup.string().required(),
  email_payment: yup.string().required(),
});


const validateForm = async (data: IDataCreditCard) => {
  try {
    await FormCreditCardSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: null };
  } catch (e: any) {
    return { valid: false, errors: e.inner };
  }
};

const useCreditCard = (): IUseCreditCard => {
  const [creditCardInfo, setCreditCardInfo] = useState<IDataCreditCard>({
    number: ''
  });

  const [completedFormCreditCard, setCompletedFormCreditCard] =
    useState(false);

  useEffect(() => {
    (async () => {
      const s = await validateForm(creditCardInfo);
      setCompletedFormCreditCard(s.valid);
    })();
  }, [creditCardInfo]);

  const tokenizeCard = async (): Promise<ICardTokenized | undefined> => {
    const newCreditCardInfo = {...creditCardInfo, number: creditCardInfo.number?.replaceAll(' ', '')};

    const res = await postToTokenizeCard({ ...newCreditCardInfo });
    if (!(res instanceof Error)) return res;
  };

  return {
    creditCardInfo,
    setCreditCardInfo,
    completedFormCreditCard,
    tokenizeCard,
  };
};

export default useCreditCard;
