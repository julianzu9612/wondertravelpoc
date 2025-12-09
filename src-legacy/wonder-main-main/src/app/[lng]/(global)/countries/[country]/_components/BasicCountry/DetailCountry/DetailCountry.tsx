import Image from 'next/image';
import styles from './DetailCountry.module.scss';
import { IDetail } from './DetailCountry.model';
const DetailCountry = ({ description, img, title }: IDetail) => {
  return (
    <div className={styles.detail}>
      <h3>{title}</h3>
      <div className={styles.detail__img}>
        <Image
          src={img}
          alt=''
          width={36}
          height={36}
          sizes='(max-width: 768px) 50px, 36px'
          quality={100}
        />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default DetailCountry;
