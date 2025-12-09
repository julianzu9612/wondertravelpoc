import { useTranslation } from '@i18n-server';
import Link from 'next/link';
//import styles
import styles from './Policy.module.scss';
const Policy = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'itinerary');
  const trans = (value: string) => t('policy.' + value);
  return (
    <div className={styles['policy']}>
      <h2>{trans('title')}</h2>
      <p>{trans('text')}</p>
      <Link href={'https://bit.ly/3QPUj7n'} target='_blank'>
        {trans('url_policies')}
      </Link>
    </div>
  );
};

export default Policy;
