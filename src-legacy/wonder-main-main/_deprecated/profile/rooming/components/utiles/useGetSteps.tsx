import ContactData from '../components/ContactData/ContactData';
import PersonalData from '../components/PersonalData/PersonalData';
import InfoMedica from '../../[booking_id]/steps/InfoMedica/InfoMedica';
import InfoAlimenticia from '../../[booking_id]/steps/InfoAlimenticia/InfoAlimenticia';
import EmergencyData from '../components/EmergencyData/EmergencyData';
import PolicyData from '../components/PolicyData/PolicyData';
import FlightsData from '../components/FlightsData/FlightsData';
import { StepId } from '../../../../../../../vars/stepId.enum';
import AdditionalData from '../components/AditionalData/AditionalData';
import { ICommonProps } from '../../[booking_id]/steps/common';
import { FC } from 'react';

export type Step = {
  id: keyof typeof StepId;
  title: string;
  status: 'complete' | 'incomplete';
  Content?: FC<ICommonProps>;
};

export type UserSteps = {
  [key: string]: Step[];
};

const useGetSteps = (): Step[] => {

  return [
    {
      id: 'personal_data',
      title: 'Personal Data',
      status: 'incomplete',
      Content: (props: ICommonProps) => <PersonalData {...props} />,
    },
    {
      id: 'contact_data',
      title: 'Contact Data',
      status: 'incomplete',
      Content: (props: ICommonProps) => <ContactData {...props} />,
    },
    {
      id: 'emergency_data',
      title: 'Emergency Data',
      status: 'incomplete',
      Content: (props: ICommonProps) => <EmergencyData {...props} />,
    },
    {
      id: 'policy_data',
      title: 'Policy Data',
      status: 'incomplete',
      Content: (props: ICommonProps) => <PolicyData {...props} />,
    },
    {
      id: 'medical_data',
      title: 'Medical Data',
      status: 'incomplete',
      Content: (props: ICommonProps) => <InfoMedica {...props} />,
    },
    {
      id: 'nutritional_data',
      title: 'Nutritional Data',
      status: 'incomplete',
      Content: (props: ICommonProps) => <InfoAlimenticia {...props} />,
    },
    {
      id: 'additional_data',
      title: 'Additional Data',
      status: 'incomplete',
      Content: (props: ICommonProps) => <AdditionalData {...props}/>
    },
    {
      id: 'flight_data',
      title: 'Flight Data',
      status: 'incomplete',
      Content: (props: ICommonProps) => <FlightsData {...props} />,
    },
  ];
};

export default useGetSteps;
