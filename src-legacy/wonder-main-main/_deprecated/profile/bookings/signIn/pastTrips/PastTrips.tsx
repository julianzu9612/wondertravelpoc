import React from 'react';
import styles from './PastTrips.module.scss';

type SliderProps = {
  items: React.ReactNode[];
  className?: string;
};

const Slider: React.FC<SliderProps> = ({ items, className }) => {
  const isCentered = items.length < 2;

  return (
    <div
      className={`${styles.sliderContainer} ${
        isCentered ? styles.centered : ''
      } ${className}`}
    >
      {items.map((item, index) => (
        <div key={index} className={styles.card}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Slider;
