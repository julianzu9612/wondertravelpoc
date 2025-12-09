'use client'; 
import Image from 'next/image';
import styles from './BannerDiscounts.module.scss';
import Link from 'next/link';
import { IBannerDiscounts } from './BannerDiscounts.model';
import useBreakpoints from '@hooks/useBreakPoints';

const BannerDiscounts = ({ link }: IBannerDiscounts) => {
  const { isMobile } = useBreakpoints();
  return ( 
    <Link href={link} className={styles['info-banner']}>
      <Image
        src={`/assets/images/${isMobile ? 'banner-mobile-expedition' :'banner-expedition'}.png`}
        className={styles['info-banner__img']}
        alt='Banner Discounts'
        fill
        priority
      />
    </Link>
  );
};

export default BannerDiscounts;
