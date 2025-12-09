'use client';
import React, { useEffect } from 'react';
import styles from './ErrorToast.module.scss';
import { useRouter } from 'next/navigation';

const page = () => {
  const message = typeof window !== 'undefined' ? localStorage?.getItem('messageError') ?? '': '';
  const { back } = useRouter();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      back();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles['toast']} ${styles['error']}`}>{message}</div>
  );
};

export default page;
