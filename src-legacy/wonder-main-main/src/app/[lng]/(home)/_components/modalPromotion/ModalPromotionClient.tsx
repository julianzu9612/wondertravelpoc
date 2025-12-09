'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import styles from './ModalPromotion.module.scss';
import Image from 'next/image';
import { getCookie, setCookie } from 'cookies-next';
import { lazy } from 'react';
const Modal = lazy(() => import('@components/Modal/Modal'));
const ModalPromotionClient = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const nameCookieViewModal = 'viewModalPromotion';
  const closeModal = () => {
    setShowModal(false);
    setCookie(nameCookieViewModal, 'true', {
      maxAge: 7 * 24 * 60 * 60,
    });
  };

  useEffect(() => {
    const handlePageLoad = () => {
      setShowModal(true);
    };
    const valueCookie = getCookie(nameCookieViewModal);
    if (!valueCookie) {
      window.addEventListener('load', handlePageLoad);
    }
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);
  return (
    <Modal open={showModal}>
      <div className={styles['modal-promotion']}>
        <Image
          src='/assets/icons/close-white.svg'
          alt=''
          width={40}
          height={40}
          onClick={closeModal}
          className={styles['modal-promotion__close']}
        />
        {children}
      </div>
    </Modal>
  );
};

export default ModalPromotionClient;
