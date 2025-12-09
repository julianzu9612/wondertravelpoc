import { Dispatch, SetStateAction } from 'react';
import { quantityPeopleI } from '../../../../../store/types';

// responsability; get total travelers counters
const getTotalTravelers = ({
  setTotalUsers,
  quantityPeople,
}: {
  setTotalUsers: Dispatch<
    SetStateAction<{ total: number; type: string; totalCost: number }[]>
  >;
  quantityPeople: quantityPeopleI;
}) => {
  const objectQuantityUsers = quantityPeople;
  const arrayEntries = Object.entries(objectQuantityUsers);
  const unitCostAdult = 700_000;
  const totalUsersArray = arrayEntries.map((i) => ({
    total: i[1],
    type: i[0],
    totalCost: unitCostAdult * i[1],
  }));
  setTotalUsers(totalUsersArray);
};

export default getTotalTravelers;
