import Image from 'next/image';
import styles from './IconText.module.scss';
const IconText = ({
  alt,
  img,
  text,
  size,
}: {
  img: string;
  alt: string;
  text: string;
  size?: number;
}) => {
  return (
    <div className={styles.IconText}>
      <i>
        <Image
          src={img}
          alt={alt}
          width={size || 20}
          height={size || 20}
          loading='lazy'
          priority={false}
          quality={20}
        />
      </i>
      <p>{text}</p>
    </div>
  );
};
export default IconText;
