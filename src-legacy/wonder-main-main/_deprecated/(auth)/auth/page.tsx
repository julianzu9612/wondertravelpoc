'use client';
import { useContext, useEffect } from 'react';
import Image from 'next/image';
import TabComponent from './tabs/Tabs';
import styles from './Auth.module.scss';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import ReturnButton from '@components/returnButton/ReturnButton';
import { useTranslation } from '@i18n-client';
import { State } from './types.model';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import ProfileContext from '@store/ProfileContext';
import { setUserSession, setSocialSession } from '@store/actions';
import { socialAuthTokenExchange } from '@services/auth/auth';

const ProfilePage = ({
  params: { lng },
  searchParams: { state },
}: {
  searchParams: { state: State };
  params: { lng: string };
}) => {
  const { t } = useTranslation(undefined, 'auth');
  const { data: session }: { data: any } = useSession();
  const { state: stateContext, dispatch } = useContext(ProfileContext);

  useEffect(() => {
    if (session && session?.accessToken) {
      const accessToken: string = session?.accessToken;
      dispatch(setSocialSession({ ...session }));
      (async () => {
        const socialAuthTokenData = await socialAuthTokenExchange({
          socialProvider: session.provider,
          accessToken,
        });
        dispatch(setUserSession({ ...socialAuthTokenData, isLogged: true }));
      })();
    }
  }, [session]);

  useEffect(() => {
    if (state && stateContext?.userSession?.isLogged) {
      redirect('profile');
    }
  }, [state]);

  const tabs = [
    {
      tabName: t('Sign In'),
      content: <SignIn lng={lng} />,
    },
    { tabName: t('Sign Up'), content: <SignUp lng={lng} /> },
  ];

  return (
    <div className={styles['profile']}>
      <ReturnButton />
      <Image
        quality={100}
        className={styles['profile__logo']}
        src='/assets/images/wonder.png'
        alt=''
        width={133}
        height={74}
      />
      <Image
        className={styles['profile__image-desk']}
        src='/assets/images/booking-image.png'
        width={577}
        height={722}
        alt=''
      />
      <TabComponent
        className={styles['profile__tabs']}
        tabs={tabs}
        tabDefault={State.SIGNUP === state ? 1 : 0}
      />
    </div>
  );
};

export default ProfilePage;
