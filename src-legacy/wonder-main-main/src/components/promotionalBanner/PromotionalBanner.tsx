'use client';
import Image from 'next/image';
import styles from './PromotionalBanner.module.scss';
import { useMediaQuery } from '@hooks/useBreakPoints';


const PromotionalBanner = () => {
  const isMobile = useMediaQuery('max-width: 460px');

  return (
    <div className={styles['promotional-banner']}>
      <Image
        fill
        src={`/assets/images/promotions/${isMobile ? 'mobile':'desktop'}.png`}
        alt='imagin de motañas para promocion de fin de semana'
        quality={100}
      />
    </div>
  );
};

export default PromotionalBanner;
