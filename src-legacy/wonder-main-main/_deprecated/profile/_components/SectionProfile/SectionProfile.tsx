import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styles from './SectionProfile.module.scss';
const SectionProfile = ({
  img,
  title,
  content,
  redirect,
}: {
  img: string;
  title: string;
  content: React.ReactNode;
  redirect?: string;
}) => {
  const path = usePathname();
  const { push } = useRouter();
  return (
    <div
      onClick={() => {
        redirect && push(path + redirect);
      }}
      className={`${styles['buttons__btn']} ${
        redirect ? styles['buttons__btn--active'] : ''
      }`}
    >
      <div className={styles['btn__title']}>
        <Image
          className={styles['hero-account__image']}
          src={img}
          width={22}
          height={22}
          alt=''
        />
        <p>{title}</p>
      </div>
      {content}
    </div>
  );
};
export default SectionProfile;
