'use client';
import Image from 'next/image';
import styles from './Back.module.scss';
import { useRouter } from 'next/navigation';
import { IBack } from './Back.model';

const Back = ({ variant }: IBack) => {
  const { back } = useRouter();
  const iconBack = '/assets/icons/back.svg';

  return (
    <span
      className={`${styles['back']} ${variant && styles['back--' + variant]}`}
      onClick={back}
    >
      <Image src={iconBack} width={22} height={22} alt='back' />
    </span>
  );
};

export default Back;
