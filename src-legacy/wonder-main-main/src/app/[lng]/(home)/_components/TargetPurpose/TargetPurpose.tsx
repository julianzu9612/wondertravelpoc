import Image from 'next/image';
import { iTargetPurpose } from './TargetPurpose.model';
//styles
import styles from './TargetPurpose.module.scss';
const TargetPurpose = ({ alt, description, img }: iTargetPurpose) => {
  return (
    <div className={styles['target-purpose']}>
      <Image
        src={img}
        alt={alt}
        width={70}
        height={70}
        loading='lazy'
        priority={false}
      />
      <p>{description}</p>
    </div>
  );
};

export default TargetPurpose;
