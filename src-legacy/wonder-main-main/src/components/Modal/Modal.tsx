import { ReactNode } from 'react';
import styles from './Modal.module.scss';
import ReactDOM from 'react-dom';

const Modal = ({
  children,
  open,
  justifyContent = 'center',
  bkgColor,
  close,
}: {
  children: ReactNode;
  open: boolean;
  justifyContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  bkgColor?: string;
  close?: () => void;
}) => {
  const windowExist = typeof window !== 'undefined';
  if (windowExist) {
    document.body.style.overflow = '';
  }

  if (windowExist && open) {
    if (windowExist) {
      document.body.style.overflow = 'hidden';
    }

    const element =
      windowExist && (document.getElementById('modal-root') as HTMLElement);

    return ReactDOM.createPortal(
      <div
        style={{
          justifyContent,
          backgroundColor: bkgColor ? bkgColor : '#00000073',
        }}
        className={styles.modal}
        onClick={() => {
          close && close();
        }}
      >
        {children}
      </div>,
      element
    );
  } else {
    return <></>;
  }
};

export default Modal;
