import * as Yup from 'yup';

export const contactDataSchema = Yup.object({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  relationship: Yup.string().required(),
  country_code: Yup.string(),
  phone: Yup.string(),
  phone_code: Yup.string(),
});
