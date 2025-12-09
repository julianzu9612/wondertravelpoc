'use client';
import React, { useState } from 'react';
import styles from './NavSteps.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import ShareModal from '@components/ShareModal/ShareModal';
import { useTranslation } from '@i18n-client';
import dynamic from 'next/dynamic';
const ShareModal = dynamic(() => import('@components/ShareModal/ShareModal'));
const NavSteps: React.FC = () => {
  const [share, setShare] = useState(false);
  const { back } = useRouter();
  const changeShare = () => {
    setShare(!share);
  };
  const { t } = useTranslation(undefined, 'rooming');
  // const handleShare = () => {
  //   changeShare();
  //   if (navigator.clipboard) {
  //     navigator.clipboard.writeText(window.location.href);
  //   } else {
  //     alert('La función de compartir no está disponible en este navegador.');
  //   }
  // };

  const trans = (value: string) => t(`modal_share.${value}`);
  return (
    <>
      {share && (
        <ShareModal changeModal={changeShare} open={share} variant='center'>
          <section className={styles['content-modal']}>
            <label htmlFor=''>{trans('label')}</label>
            <input type='text' placeholder='E-mail' />
            <button>{trans('invite')}</button>
          </section>
        </ShareModal>
      )}
      <nav className={styles['nav-steps']}>
        <button
          onClick={() => back()}
          className={`primary-dark ${styles['nav-steps__return']}`}
        >
          <Image
            src='/assets/icons/left-arrows.svg'
            alt='Compartir'
            width={24}
            height={24}
          />
        </button>
        {/* <button
          onClick={handleShare}
          className={`${styles['nav-steps__share']} ghost-dark`}
        >
          <Image
            src='/assets/icons/share-icon.png'
            alt='Compartir'
            width={33}
            height={33}
          />
          {trans('share')}
        </button> */}
      </nav>
    </>
  );
};

export default NavSteps;
