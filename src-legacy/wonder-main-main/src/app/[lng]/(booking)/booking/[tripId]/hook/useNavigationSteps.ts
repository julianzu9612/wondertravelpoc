import { useSelectedLayoutSegments } from 'next/navigation';

export interface IStep {
  url: string;
  icon: string;
  label: {
    en: string;
    es: string
  };
}

type TOptions =
  | 'viajeros'
  | 'dates'
  | 'accomodation'
  | 'informacion-contacto'
  | 'informacion-viajeros'
  | 'informacion-tarjeta';

export interface IUseNavigationSteps {
  activeStep: TOptions;
  stepsOrder: IStep[];
  prevNextSteps: {
    nextStep: IStep;
    prevStep: IStep;
  };
}

const useNavigationSteps = (): IUseNavigationSteps => {
  const segments = useSelectedLayoutSegments('steps');

  const activeStep = segments[1] as TOptions ?? 'viajeros';

  const stepsOrder = [
    {
      url: 'viajeros',
      icon: 'person.svg',
      label: {
        es: '# de viajeros',
        en: '# of travelers',
      }
    },
    {
      url: 'dates',
      icon: 'calendar.svg',
      label: {
        es: 'Seleccionar Fechas',
        en: 'Select Dates',
      }
    },
    {
      url: 'accomodation',
      icon: 'bed.svg',
      label: {
        es: 'Alojamiento',
        en: 'Accommodation',
      }
    },
    {
      url: 'informacion-contacto',
      icon: 'form.svg',
      label: {
        es: 'informacion-viajeros',
        en: 'Traveler Information',
      }
    },
    {
      url: 'informacion-viajeros',
      icon: 'form.svg',
      label: {
        es: 'informacion-viajeros',
        en: 'Traveler Information',
      }
    },
    {
      url: 'informacion-tarjeta',
      icon: 'card.svg',
      label: {
        es: 'Pagar',
        en: 'Payment',
      }
    },
  ];


  const getPrevNextSteps = () => {
    const indexActiveSte = stepsOrder.findIndex((i) => i.url === activeStep);

    const nextStep = indexActiveSte === 5 ? 5 : indexActiveSte + 1;
    const prevStep = indexActiveSte === 0 ? 0 : indexActiveSte - 1;

    return {
      nextStep: stepsOrder[nextStep],
      prevStep: stepsOrder[prevStep],
    };
  };

  return {
    activeStep,
    stepsOrder,
    prevNextSteps: getPrevNextSteps(),
  };
};

export default useNavigationSteps;
