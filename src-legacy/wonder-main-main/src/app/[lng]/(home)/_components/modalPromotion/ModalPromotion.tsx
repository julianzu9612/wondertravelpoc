import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@i18n-server';
import styles from './ModalPromotion.module.scss';
import ModalPromotionClient from './ModalPromotionClient';
const ModalPromotion = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'home');
  return (
    <ModalPromotionClient>
      <Image
        src={`/assets/images/homepage/modal/TravelPlanner${lng}.webp`}
        alt='event'
        width={500}
        height={500}
        className={styles['modal-promotion__image']}
        blurDataURL='/assets/images/homepage/modal/TravelPlannerBlur.webp'
        placeholder='blur'
      />
      <div className={styles['modal-promotion__button']}>
        <Link href='https://wondertravelplanner.paperform.co/' target='_blank'>
          {t('Start now')}
        </Link>
      </div>
    </ModalPromotionClient>
  );
};

export default ModalPromotion;
