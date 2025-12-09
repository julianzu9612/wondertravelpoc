'use client';
import React from 'react';
// enhacer
import { useRouter } from 'next/navigation';
import Image from 'next/image';
// styles
import styles from './ReturnButton.module.scss';
import useBreakpoints from '@hooks/useBreakPoints';

const ReturnButton = ({ variant }: { variant?: 'relative' | 'abdolute' }) => {
  const router = useRouter();
  const { isTablet } = useBreakpoints();

  return (
    <button
      className={`${styles['return-button']} ghost ${
        variant && styles['return-button-' + variant]
      }`}
      onClick={() => router.back()}
    >
      <Image
        src={`/assets/icons/circle${isTablet ? '-gray' : ''}-return.svg`}
        alt=''
        width={36}
        height={36}
      />
    </button>
  );
};

export default ReturnButton;
