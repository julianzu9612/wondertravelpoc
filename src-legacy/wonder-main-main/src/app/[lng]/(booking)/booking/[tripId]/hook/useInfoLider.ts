import { Dispatch, useEffect, useState } from 'react';
import { IContactInfo, IInfoLider } from '../../../booking.model';
import * as yup from 'yup';

export interface IUseInfoLider {

  travelers: IListTravelers;
  setTravelers: Dispatch<IListTravelers>;

  completedFormInfoLider: boolean;
  travelersBooking: IInfoLider[];

  inputsCheck: IListInputsCheck,
  setInputsCheck: Dispatch<IListInputsCheck>

  dataContact: IContactInfo,
  setDataContact: Dispatch<IContactInfo>
}

export interface IListTravelers {
  [id: string]: IInfoLider
}
export interface IListInputsCheck {
  [id: string]: string[]
}

const FormSchema = yup.object().shape({
  first_name: yup.string().required().min(3),
  last_name: yup.string().required().min(3),
  phone: yup.string().min(10),
  prefix_number: yup.string().min(2),
  email: yup.string().email(),
  document_type: yup.number().required(),
  document_number: yup.string().required(),
  is_leader: yup.boolean().default(false),
});


const validateForm = async (data: IInfoLider) => {
  try {
    await FormSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: null };
  } catch (e: any) {
    return { valid: false, errors: e.inner };
  }
};

const useInfoLider = (): IUseInfoLider => {
  const [travelers, setTravelers] = useState<IListTravelers>({});
  const [inputsCheck, setInputsCheck] = useState<IListInputsCheck>({});

  const [completedFormInfoLider, setCompletedFormInfoLider] = useState(false);

  const [dataContact, setDataContact] = useState<IContactInfo>({});

  useEffect(() => {
    (async () => {
      const lider = Object.values(travelers).find(i => i.email);

      if (lider) {
        const s = await validateForm(lider);
        setCompletedFormInfoLider(s.valid);
      }
    })();
  }, [travelers, inputsCheck]);

  const travelersBooking = () =>{
    const valTravelers = Object.values(travelers).map(i => {
      const newNumber = `${i.prefix_number ?? ''}${i.phone ?? ''}`;
      return {
        ...i, phone: newNumber
      };
    });

    return valTravelers;
    
  };

  return {
    completedFormInfoLider,
    travelers,
    setTravelers,
    travelersBooking: travelersBooking(),
    inputsCheck, setInputsCheck,
    dataContact, setDataContact
  };
};

export default useInfoLider;
