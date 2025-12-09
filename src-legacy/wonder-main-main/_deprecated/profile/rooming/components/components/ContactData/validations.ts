import * as Yup from 'yup';
import { IContactdata } from './ContactData';

export const contactDataSchema: Yup.ObjectSchema<IContactdata> = Yup.object({
  email: Yup.string().email().required(),
  country_code: Yup.string(),
  phone: Yup.string(),
  phone_code: Yup.string(),
  residential_country: Yup.string().nullable(),
  city: Yup.string(),
  address: Yup.string(),
});
