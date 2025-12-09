import { ObjectSchema } from 'yup';

export interface InputProps {
  type:
    | 'text'
    | 'radio'
    | 'email'
    | 'password'
    | 'select'
    | 'checkbox'
    | 'number'
    | 'date'
    | 'datetime-local';
  name: string;
  value?: string | number | boolean;
  placeholder?: string;
  label?: string;
  typeValue?: 'boolean' | 'number' | 'string';
  validations?: Validation[];
  options?: IOpt[];
  className?: string;
  disabled?: boolean;
}

export interface IOpt {
  value: string | number;
  desc: string;
}

export interface Validation {
  type: 'required' | 'isEmail' | 'minLength' | 'isTrue' | 'oneOf';
  value?: string | number | boolean;
  message: string;
  ref?: string;
}

export type FormSection =
  | 'personal_data'
  | 'contact_data'
  | 'emergency_data'
  | 'policy_data'
  | 'medical_data'
  | 'nutritional_data'
  | 'additional_data'
  | 'flight_data';

export type SchemaForm = ObjectSchema<
  {
    [x: string]: any;
  },
  any,
  { [x: string]: any }
>;

export type CustomInputProps = Omit<
  InputProps,
  'validations' | 'typeValue' | 'value'
>;

export interface IPropsForm {
  onSubmit: (data: unknown) => void;
  labelButtonSubmit?: string;
  titleForm?: string;
  initialValues: unknown;
  validationSchema: SchemaForm;
  inputs: InputProps[];
}

export interface IGetInputs {
  section: FormSection;
  bookingId?: string | number;
  userId?: string | number;
}
