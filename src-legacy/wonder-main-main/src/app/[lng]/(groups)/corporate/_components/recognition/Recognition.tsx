import styles from './Recognition.module.scss';
import Image from 'next/image';
import { TFunction } from 'i18next';

interface RecognitionProps {
  t: TFunction;
  isUniversity: boolean;
}

const Recognition = ({ t, isUniversity }: RecognitionProps) => {
  return (
    <div className={styles['recognition']}>
      <h2 className={styles['recognition__title']}>{t('recognition.title')}</h2>
      <p className={styles['recognition__description']}>
        {t('recognition.description')}
      </p>
      <ul className={styles['recognition__certified']}>
        <li className={styles['certified__tourcert']}>
          <Image
            src='/assets/images/homepage/TourCertSiegel.svg'
            width={170}
            height={170}
            alt=''
          />
        </li>
        <li className={styles['certified__paz']}>
          <Image
            src='/assets/images/homepage/sello.png'
            width={170}
            height={170}
            alt=''
          />
        </li>
      </ul>
      <p className={styles['recognition__bellow']}>{t('recognition.bellow')}</p>
      <ul className={styles['recognition__association']}>
        <li className={styles['association']}>
          <Image
            src={
              isUniversity
                ? '/assets/other-brands/co-colombia.jpg'
                : '/assets/other-brands/acotur.png'
            }
            width={170}
            height={170}
            alt=''
            quality={100}
          />
        </li>
        <li className={styles['association']}>
          <Image
            src={
              isUniversity
                ? '/assets/other-brands/anato.png'
                : '/assets/other-brands/atta-2.png'
            }
            width={170}
            height={170}
            alt=''
            quality={100}
          />
        </li>
      </ul>
    </div>
  );
};

export default Recognition;
