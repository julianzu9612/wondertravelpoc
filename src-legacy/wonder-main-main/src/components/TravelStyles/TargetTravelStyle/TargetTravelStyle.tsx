import Image from 'next/image';
import styles from './TargetStyle.module.scss';
import { TargetTravelStyleI } from './TargetTravelStyle.model';

const TargetTravelStyle = ({
  description,
  image_url,
  label,
  t,
}: TargetTravelStyleI) => {
  return (
    <div
      aria-label={''}
      className={styles['featured-image']}
    >
      {image_url && (
        <Image
          src={image_url}
          alt={label}
          className={styles['featured-image__image']}
          fill
          sizes='(210px, 260px)'
        />
      )}
      <figcaption className={styles['featured-image__caption']}>
        <h2>{t(label)}</h2>
        <p>{t(description)}</p>
      </figcaption>
    </div>
  );
};

export default TargetTravelStyle;
