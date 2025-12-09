import * as Yup from 'yup';

export const personalDataSchema = Yup.object({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  document_number: Yup.string().required(),
  document_type: Yup.string(),
  genre: Yup.string().nullable(),
  birth_date: Yup.string().nullable(),
  nationality: Yup.string(),
  'terms-conditions': Yup.boolean(),
});
