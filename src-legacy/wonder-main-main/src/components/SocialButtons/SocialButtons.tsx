'use client';
import React from 'react';
import styles from './SocialButtons.module.scss';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const SocialButtons = () => {
  return (
    <div className={styles['socials-btns']}>
      <button className={`button__orange-outline ${styles['socials-btns__btn']}`} onClick={() => signIn('google', {provider: 'google'})}>
        <Image src="/assets/icons/btn-icon-google.svg" alt="" width={30} height={30}/>
      </button>
      <button className={`button__orange-outline ${styles['socials-btns__btn']}`} onClick={() => signIn('facebook', {provider: 'facebook'})}>
        <Image src="/assets/icons/btn-icon-fb.svg" alt="" width={30} height={30}/>
      </button>
    </div>
  );
};

export default SocialButtons;
