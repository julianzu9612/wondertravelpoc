'use client'; 
import React from 'react';
// components
import Image from 'next/image';
// styles
import styles from './Counter.module.scss';
// types
import { CounterI } from './Counter.model';

const Counter = ({
  className,
  onIncrement,
  onDecrement,
  value = 0,
}: CounterI) => {
  const widthIcons = 12;
  const heightIcons = 12;

  return (
    <div className={`${className} ${styles['counter']}`}>
      <Image
        src='/assets/icons/substract.svg'
        width={widthIcons}
        height={heightIcons}
        alt=''
        onClick={onDecrement}
        className={styles['counter__substract']}
      />

      <p>{value}</p>

      <Image
        src='/assets/icons/plus-math.svg'
        width={widthIcons}
        height={heightIcons}
        alt=''
        onClick={onIncrement}
        className={styles['counter__add']}
      />
    </div>
  );
};

export default Counter;
