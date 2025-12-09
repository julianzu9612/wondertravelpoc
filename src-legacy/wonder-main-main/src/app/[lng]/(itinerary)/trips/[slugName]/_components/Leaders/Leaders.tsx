import Image from 'next/image';
import styles from './Leaders.module.scss';
import { ILeaders } from './Leaders.model';
import { useTranslation } from '@i18n-server';
import dynamic from 'next/dynamic';
const TextHtml = dynamic(() => import('../TextHtml/TextHtml'), { ssr: false });
const Leaders = async ({ description, image, nameLeader, lng }: ILeaders) => {
  const { t } = await useTranslation(lng, 'itinerary');
  return (
    <section className={styles.leaders}>
      <h2 className={styles.leaders__title}>
        {t('leader.title', { name: nameLeader })}
      </h2>
      <Image
        className={styles.leaders__image}
        src={image}
        alt={t('leader.title', { name: nameLeader })}
        width={100}
        height={100}
        loading='lazy'
        priority={false}
      />
      <TextHtml
        description={description}
        className={styles.leaders__description}
      />
    </section>
  );
};

export default Leaders;
