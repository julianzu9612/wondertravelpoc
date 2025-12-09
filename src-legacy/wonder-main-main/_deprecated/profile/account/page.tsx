import Image from 'next/image';
import styles from './PageInfo.module.scss';
import { IPageInfo } from './PageInfo.module';
import DataAccount from './components/DataAcount/DataAccount';
import Back from '@components/Back/Back';
const PageAccount = ({ params: { lng } }: IPageInfo) => {
  return (
    <>
      <div className={styles['content-profile']}>
        <div className={styles.back}>
          <Back variant='relative' />
        </div>
        <div className={styles['content-profile__hero-account']}>
          <Image
            className={styles['hero-account__image']}
            src='/assets/images/booking-image.png'
            width={577}
            height={722}
            alt=''
          />

          <div className={styles['hero-account__background']} />
        </div>
        <DataAccount lng={lng} />
      </div>
    </>
  );
};

export default PageAccount;
