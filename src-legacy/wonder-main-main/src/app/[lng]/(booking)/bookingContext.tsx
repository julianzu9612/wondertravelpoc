import {
  ReactElement,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';
// 👮🏼‍♂️ Types
import type {
  IAccompanyingState,
  IDataPolicies,
  IErrorToastState,
  IPreBooking,
  IResPreBookign,
  ITypeBookingContext,
} from './booking.model';
import type { IBookingRes, IResumeBooking } from '@services/serviceModel.model';
// 🧰 Services
import { getLinkPoliciesWompi } from '@services/getLinkPoliciesWompi';
import getResumeBooking from '@services/getResumeBooking';
import postPreBooking from '@services/postPreBooking';
// 🪝 Hooks
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import useNavigationSteps from './booking/[tripId]/hook/useNavigationSteps';
import useDates from './booking/[tripId]/hook/useDates';
import useAcommodation from './booking/[tripId]/hook/useAcommodation';
import useCreditCard from './booking/[tripId]/hook/useCreditCard';
import useUser from './booking/[tripId]/hook/useUser';
import useInfoLider from './booking/[tripId]/hook/useInfoLider';
import { getCurrencyCookieClient } from '@utils/getCurrencyClient';
import postPayment from '@services/booking/postPayment/postPayment';
import { FormTravelerRef } from './booking/[tripId]/_components/formDataUser/FormTraveler';
import putPreBooking from '@services/putPreBooking';
import changeStateBooking from '@services/booking/changeStateBooking/changeStateBooking';

export const BookingContext = createContext({} as ITypeBookingContext);

export const BookingProvider = ({ children }: { children: ReactElement }) => {
  const { tripId, lng } = useParams<{ lng: string; tripId: string }>();
  const currency = getCurrencyCookieClient();
  const formContactRef = useRef<HTMLFormElement>(null);
  const [leaderCreated, setLeaderCreated] = useState(false);

  const [accompanying, setAccompaying] = useState<IAccompanyingState>({});

  const submitForm = () => {
    if (formContactRef.current) {
      formContactRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      );
    }
  };

  const tripIdParams = Number(tripId);
  const [resumeBooking, setResumeBooking] = useState<IResumeBooking>({
    total: '0',
    iva: '0',
    installments: [] as IResumeBooking['installments'],
  });
  const router = useRouter();

  const [load, toggleLoad] = useState(false);

  const [error, showError] = useState<IErrorToastState>({
    show: false,
    message: '',
  });

  const [contractChecked, setContractChecked] = useState<boolean>(false);
  const {
    users,
    usersSelected,
    setUsersSelected,
    getUsers,
    getUsersForBooking,
    userSummary,
    totalUsers,
    getIdForeign,
    infoPackage,
  } = useUser({
    tripId: tripIdParams,
    lng,
    toggleLoad,
  });

  const [applyInstallments, setApplyInstallments] = useState<boolean>(false);
  const [dataPreBooking, setDataPreBooking] = useState<IResPreBookign>();
  const [checkAccompanying, setCheckAccompanying] = useState<boolean>(false);

  const formListTravelerstRef = useRef<(FormTravelerRef | null)[]>([]);

  const submitFormListTravelers = async () => {
    const validationPromises = formListTravelerstRef?.current?.map((formRef) =>
      formRef?.submit()
    );
    toggleLoad(true);
    try {
      const allValid = await Promise.all(validationPromises);

      if (allValid.length === totalUsers()) {
        if (allValid === undefined || allValid === null) return;

        let data: IPreBooking = {
          accommodation_id: accommodationSelected?.id,
          leader_id: dataContact.id ?? 0,
          package_id: Number(tripId) ?? 0,
          individuals: getUsersForBooking(),
          accompanyin: allValid,
          date_selected: {
            start_date: `${
              new Date(selectedDate.start_date).toISOString().split('T')[0]
            }`,
            end_date: `${
              new Date(selectedDate.end_date).toISOString().split('T')[0]
            }`,
          },
        };

        if (infoPackage.is_recurrent) {
          data = {
            ...data,
            is_recurrent: infoPackage?.is_recurrent,
            trip_dates_id: null,
          };
        } else {
          data = {
            ...data,
            trip_dates_id: selectedDate.id ?? null,
            is_recurrent: infoPackage?.is_recurrent,
          };
        }

        let res;
        if (dataPreBooking?.prebooking.id) {
          res = await putPreBooking(data, dataPreBooking.prebooking.id);
        } else {
          res = await postPreBooking(data, Number(tripId));
        }

        if (res && res.prebooking.id) {
          setCheckAccompanying(true);
          setDataPreBooking(res);
          router.push(`/${lng}/booking/${tripId}/informacion-tarjeta`);
        }
      } else {
        console.error('Algunos formularios no son válidos');
      }
    } catch (error) {
      console.error('Error en la validación de los formularios:', error);
    } finally {
      toggleLoad(false);

      console.error('Validación completa');
    }
  };
  const { dates, blockedDates, getDates, selectedDate, setSelectedDate } =
    useDates(tripIdParams, showError, infoPackage?.is_recurrent);

  const {
    accommodations,
    accommodationSelected,
    setAccommodationSelected,
    getAccommodations,
  } = useAcommodation({
    tripId: tripIdParams,
    dateType: 'group',
    quantityPeople: totalUsers(),
    lng,
    currency,
  });

  const getTotalfromBackoffice = async (): Promise<IResumeBooking> => {
    const individualsFromHook = getUsersForBooking().filter(
      (i) => i.quantity_individual > 0
    );

    let containAdult = false;
    const hasSelectedAccommodation = accommodationSelected?.id !== undefined;

    const validateAdultInBooking = users
      .filter((i) =>
        ['ADULT', 'ELDERLY', 'FOREIGN'].includes(i.individual_type)
      )
      .map((i) => i.id);

    individualsFromHook.forEach((i) => {
      // array for individual type[ADULT, ELDERLY, FOREIGN] correspondingly
      if (
        i.quantity_individual > 0 &&
        validateAdultInBooking.find((item) => item === i.individual_id)
      ) {
        containAdult = true;
      }
    });

    if (containAdult && hasSelectedAccommodation) {
      const data = {
        individuals: individualsFromHook,
        accommodation_id: accommodationSelected.id,
        package_id: parseInt(tripId),
        start_date: selectedDate?.start_date,
      };

      try {
        toggleLoad(true);
        const bookingResume = await getResumeBooking(data, lng, currency);
        if (!(bookingResume instanceof Error)) {
          setResumeBooking(bookingResume);
          return bookingResume;
        }

        return { total: '0', iva: '0' } as IResumeBooking;
      } finally {
        toggleLoad(false);
      }
    }

    return { total: '0', iva: '0', installments: [] };
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      getTotalfromBackoffice();
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [usersSelected, selectedDate, accommodationSelected]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const users = totalUsers();
      try {
        await getDates(users);
        await getAccommodations(users);
      } catch (error) {
        showError({
          show: true,
          message: 'error al obtener fechas y alojamientos',
        });
      }
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [usersSelected]);

  const {
    completedFormInfoLider,
    travelers,
    travelersBooking,
    setTravelers,
    inputsCheck,
    setInputsCheck,
    dataContact,
    setDataContact,
  } = useInfoLider();

  const completedData =
    completedFormInfoLider &&
    accommodationSelected?.id &&
    getUsersForBooking().length > 0;

  const {
    creditCardInfo,
    setCreditCardInfo,
    completedFormCreditCard,
    tokenizeCard,
  } = useCreditCard();

  const { prevNextSteps, stepsOrder, activeStep } = useNavigationSteps();

  const [dataPolicies, setDataPolicies] = useState<IDataPolicies>(
    {} as IDataPolicies
  );

  useEffect(() => {
    const fetchPolicies = async () => {
      if (
        !dataPolicies?.presigned_acceptance &&
        activeStep === 'informacion-tarjeta'
      ) {
        try {
          const fetchedData = await getLinkPoliciesWompi();
          if (typeof fetchedData !== 'string') {
            setDataPolicies(fetchedData);
          }
        } catch (e) {
          showError({
            show: true,
            message: 'error al obtener politicas de wompi',
          });
        }
      }
    };

    fetchPolicies();
  }, [activeStep]);

  const [amountSelected, setAmountSelected] =
    useState<IBookingRes['total_price']>('');

  const playSound = () => {
    const audio = new Audio('/assets/audio/booking/airport-call.mp3');
    audio.play().catch((error) => {
      console.error('Error al reproducir el audio:', error);
    });
  };

  const VibratePhone = (pattern = [200, 100, 200]) => {
    if (navigator.vibrate) {
      navigator.vibrate(pattern);
    } else {
      console.warn('La API de Vibración no es soportada por este navegador.');
    }
  };

  const proccedPayment = async (): Promise<string | void> => {
    toggleLoad(true);

    if (dataPreBooking && !infoPackage.depend_availability_validation) {
      try {
        toggleLoad(true);
        const tokenService = await tokenizeCard();

        if (tokenService?.status == 'CREATED') {
          const processPaymentData = {
            individuals: getUsersForBooking(),
            accommodation_id: accommodationSelected.id,
            booking_id: dataPreBooking.prebooking.id,
            email_contact: dataContact.email ?? '',
            installments: 1,
            token: tokenService.data.id,
            acceptance_token:
              dataPolicies.presigned_acceptance.acceptance_token,
            apply_installents: applyInstallments,
            trip_dates_id: selectedDate.id,
            total_users: totalUsers() ?? 0,
            date_selected: selectedDate,
          };

          const paymentResponse = await postPayment(
            processPaymentData,
            dataPreBooking.prebooking.id
          );

          if (paymentResponse && paymentResponse.data.status) {
            playSound();
            VibratePhone();
            setTimeout(
              () =>
                router.push(
                  `/${lng}/booking/success/${dataPreBooking.prebooking.code}`
                ),
              2000
            );
          }
        } else {
          throw new Error('hubo un problema con la tarjeta');
        }
      } catch (e) {
        showError({
          show: true,
          message: 'hubo un error con tu tarjeta de credito',
        });
        console.error(e);
      } finally {
        toggleLoad(false);
      }
    }
  };

  const changeBookingForValidateDates = async (): Promise<
    IResPreBookign['prebooking'] | null
  > => {
    toggleLoad(true);
    try {
      const response = await changeStateBooking(
        dataPreBooking?.prebooking.id ?? 0
      );
      return response;
    } catch (e) {
      console.error(e);
      return null;
    } finally {
      toggleLoad(false);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        tripId,
        lng,
        getDates,
        dates,
        blockedDates,
        selectedDate,
        setSelectedDate,

        load,
        toggleLoad,

        error,
        showError,

        accommodations,
        getAccommodations,
        accommodationSelected,
        setAccommodationSelected,

        users,
        usersSelected,
        setUsersSelected,
        getUsers,
        getUsersForBooking,
        userSummary,
        totalUsers,
        getIdForeign,
        infoPackage,

        travelers,
        setTravelers,
        travelersBooking,
        inputsCheck,
        setInputsCheck,
        dataContact,
        setDataContact,

        resumeBooking,
        completedFormInfoLider,
        completedData,
        linkPolicies: dataPolicies?.presigned_acceptance?.permalink,
        acceptance_token: dataPolicies?.presigned_acceptance?.acceptance_token,

        creditCardInfo,
        setCreditCardInfo,
        completedFormCreditCard,
        contractChecked,
        setContractChecked,
        tokenizeCard,

        proccedPayment,
        prevNextSteps,
        stepsOrder,
        activeStep,

        amountSelected,
        setAmountSelected,

        formContactRef,
        submitForm,

        formListTravelerstRef,
        submitFormListTravelers,

        leaderCreated,
        setLeaderCreated,

        accompanying,
        setAccompaying,

        setApplyInstallments,
        checkAccompanying,
        changeBookingForValidateDates,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
