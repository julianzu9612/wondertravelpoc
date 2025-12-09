import Image from 'next/image';
import styles from './EmptyState.module.scss';
import { useTranslation } from '@i18n-client';
import Link from 'next/link';
import useGetLanguaje from '@hooks/useGetLanguaje';

interface IEmptyState {
  imageUrl: string;
}

const EmptyState = ({ imageUrl }: IEmptyState) => {
  const lng = useGetLanguaje();
  const { t } = useTranslation(undefined, 'profile');
  return (
    <div className={styles['empty-state']}>
      <h2 className={styles['empty-state__title']}>
        {t('start_travel_wonder')}
      </h2>
      <p className={styles['empty-state__description']}>
        {t('state_description')}
      </p>
      <div className={styles['empty-state__image']}>
        <Image
          src={imageUrl}
          alt='Imagen Descriptiva'
          width={525}
          height={308}
        />
      </div>
      <Link
        href={`/${lng}/lines/trips`}
        className={`button ${styles['empty-state__cta']}`}
      >
        {t('explore_more_travel')}
      </Link>
    </div>
  );
};

export default EmptyState;
