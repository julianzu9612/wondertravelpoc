'use client';
import Image from 'next/image';
import TabComponent from './tabs/Tabs';
import styles from './Profiles.module.scss';
import SearchReservation from './searchReservation/SearchReservation';
import SignIn from './signIn/SignIn';
import { State } from './types.model';
import { useTranslation } from '@i18n-client';
import Back from '@components/Back/Back';

const ProfilePage = ({
  params: { lng },
  searchParams: { state = State.MENU_EMPTY },
}: {
  searchParams: { state: State };
  params: { lng: string };
}) => {
  const { t } = useTranslation(lng, 'profile');
  const tabs = [
    {
      tabName: t('next_trip'),
      content: <SearchReservation state={state} lng={lng} />,
    },
    {
      tabName: t('last_trips'),
      content: <SignIn queryState={state} lng={lng} />,
    },
  ];

  return (
    <div className={styles['profile']}>
      <div className={styles['profile__return']}>
        <Back variant='relative' />
      </div>
      <Image
        className={styles['profile__image-desk']}
        src='/assets/images/booking-image.png'
        width={577}
        height={722}
        alt=''
      />
      <TabComponent className={styles['profile__tabs']} tabs={tabs} />
    </div>
  );
};

export default ProfilePage;
