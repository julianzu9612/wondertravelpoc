import Image from 'next/image';
import styles from './WhyWonderTravel.module.scss';

const WhyTarget = ({
  description,
  img,
  title,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.target}>
      <div>
        <Image src={img} alt='img reason why wonder' width={110} height={120} />
      </div>
      <div className={styles.target__texts}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyTarget;
