import { Dispatch, useEffect, useState } from 'react';
import getTypeIndividuals from '@services/getTypeIndividuals';
import type {
  IIndividualTypeItem,
  TIndividualsTypesResponse,
} from '../Booking.model';
import { IUserTypesAndCuantity } from '../../../booking.model';

interface IUserSelected {
  [key: string]: IUserTypesAndCuantity;
}

interface IUserSummary {
  label: string;
  value: number;
}

type IInfoPackage = Omit<TIndividualsTypesResponse, 'individuals'>;

export interface IUseUser {
  users: IIndividualTypeItem[];
  usersSelected: IUserSelected;
  setUsersSelected: Dispatch<IUserSelected>;
  getUsers: () => Promise<IIndividualTypeItem[]>;
  getUsersForBooking: () => IUserTypesAndCuantity[];
  userSummary: IUserSummary[];
  totalUsers: () => number;
  getIdForeign: () => number;
  infoPackage: IInfoPackage;
}

const useUser = ({
  tripId,
  lng,
  toggleLoad,
}: {
  tripId: number;
  lng: string;
  toggleLoad: Dispatch<boolean>;
}): IUseUser => {
  const [infoPackage, setInfoPackage] = useState<IInfoPackage>({
    id: 0,
    title: '',
    image_booking: '',
    depend_availability_validation: false,
    is_recurrent: false,
    days: 0
  });
  const [users, setUsers] = useState<IIndividualTypeItem[]>([
    {
      id: 0,
      individual_type: 'ADULT',
      min_age: 18,
    },
  ]);
  const [usersSelected, setUsersSelected] = useState<IUserSelected>({});

  const getUsers = async (): Promise<IIndividualTypeItem[]> => {
    try {
      await toggleLoad(true);
      const individualsTypesRespons = await getTypeIndividuals(tripId, lng);

      if (individualsTypesRespons?.individuals?.length > 0) {
        setUsers(individualsTypesRespons?.individuals);
        setInfoPackage(individualsTypesRespons);
        return individualsTypesRespons.individuals;
      } else {
        setUsers([
          {
            id: 0,
            individual_type: 'ADULT',
            min_age: 18,
          },
        ]);
      }

      return [
        {
          id: 0,
          individual_type: 'ADULT',
          min_age: 18,
        },
      ];
    } finally {
      toggleLoad(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getUsers();
    })();
  }, []);

  const getUsersForBooking = () =>
    Object.values(usersSelected).filter((i) => i.quantity_individual > 0);

  const getUsersForSummary = () => {
    const s = Object.entries(usersSelected)
      ?.map((i) => ({
        label: i[0],
        value: i[1].quantity_individual,
      }))
      ?.filter((i) => i.value > 0);
    return s;
  };

  const totalUsers = () => {
    const quantityA = Object.values(usersSelected)?.map(
      (i) => i.quantity_individual
    );

    if (quantityA.length > 0) {
      return quantityA?.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    } else return 0;
  };

  const getIdForeign = (): number => {
    const idForeign =
      Object.values(users).find((i) => i.individual_type === 'FOREIGN')?.id ??
      0;

    return idForeign;
  };

  return {
    users,
    usersSelected,
    setUsersSelected,
    getUsers,
    getUsersForBooking,
    userSummary: getUsersForSummary(),
    totalUsers,
    getIdForeign,
    infoPackage,
  };
};

export default useUser;
