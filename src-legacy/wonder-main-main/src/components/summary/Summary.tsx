'use client';
import React, { useEffect, useState } from 'react';
// styles
import styles from './Summary.module.scss';
// hooks
import useBreakpoints from '../../customHooks/useBreakPoints';
// types
import type { SummaryPropsI } from './Summary.model';

const Summary = ({
  title,
  children,
  className,
  defaultOpen,
  open,
}: SummaryPropsI) => {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);
  const { isTablet } = useBreakpoints();
  useEffect(() => {
    setIsOpen(open ?? false);
  }, [open]);
  useEffect(() => {
    if (isTablet && defaultOpen) setIsOpen(true);
  }, [isTablet]);

  return (
    <div className={`${styles.summary} ${className}`}>
      <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <button
          type='button'
          className={styles.toggleButton}
          name='boton para desplegar la descripcíon de este desplegable'
        >
          <p className={isOpen ? styles.openArrow : styles.closeArrow}>
            &lsaquo;
          </p>
        </button>
      </div>
      {isOpen && children}
    </div>
  );
};

export default Summary;
