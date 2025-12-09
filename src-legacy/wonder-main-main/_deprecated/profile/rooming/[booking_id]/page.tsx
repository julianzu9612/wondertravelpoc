'use client';
// enhacer
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
// components
import NavSteps from '../components/NavSteps/NavSteps';
import StepList from '../components/StepList/StepList';
import TravelerSelect from '../components/TravelerSelect/TravelerSelect';
import ModalEnd from '../components/ModalEnd/ModalEnd';
// utils
import useSincronizeStorage from '@utils/SincronizeStorage/useSincronizeStorage';
// styles
import styles from './Rooming.module.scss';
import getTravelers from '@services/rooming/travellers/getTravelers';
import { ResTraveler } from '@services/rooming/travellers/getTravelers.model';

const RoomingPage = () => {
  const [userId, setUserId] = useSincronizeStorage({
    type: 'sessionStorage',
    key: 'user',
    initialValue: 0,
  });
  const bookinId = useParams()?.booking_id as string;
  const [endUser, setEndUser] = useState(false);
  // const [selectedUser, setSelectedUser] = useState<>();

  const ChangeEnduser = () => {
    setEndUser(!endUser);
  };

  const [travelers, setTravelers] = useState<ResTraveler[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const optionsTravelers = await getTravelers(bookinId);

        if (optionsTravelers) {
          const user = sessionStorage.getItem('user') ?? 0;
          if (
            (optionsTravelers && optionsTravelers.length === 1) ||
            !userId ||
            +user !== +userId
          ) {
            const leader = optionsTravelers.find(
              (traveler) => traveler.is_leader
            );
            if (leader) {
              setUserId(leader.id);
            }
          }
          setTravelers(optionsTravelers);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [endUser]);

  const selectedUser = travelers?.find((traveler) => traveler.id === +userId);

  return (
    <>
      <ModalEnd open={endUser} close={ChangeEnduser} />
      <div className={styles['rooming']}>
        <NavSteps />
        <TravelerSelect
          travelers={travelers}
          filledData={1}
          totalData={4}
          setUserId={setUserId}
          userId={userId}
        />
        {userId !== 0 && (
          <StepList
            userId={+userId}
            bookingId={Number(bookinId)}
            onFinishForm={ChangeEnduser}
            userIsComplete={selectedUser?.rooming_revised}
          />
        )}
      </div>
    </>
  );
};

export default RoomingPage;
