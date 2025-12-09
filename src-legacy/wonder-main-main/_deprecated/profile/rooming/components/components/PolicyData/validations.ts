import * as Yup from 'yup';

export const policyDataSchema = Yup.object({
  start_date: Yup.date().required(),
  expiration_date: Yup.date().required(),
  country_code: Yup.string(),
  supplier: Yup.string(),
  number: Yup.string(),
});
