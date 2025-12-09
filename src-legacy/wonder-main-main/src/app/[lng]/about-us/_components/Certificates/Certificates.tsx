import Image from 'next/image';
import Link from 'next/link';
import styles from './Certificates.module.scss';
import { ParamsSearch } from '../../page';
import { useTranslation } from '@i18n-server';
const Certificates = async ({ lng }: ParamsSearch['params']) => {
  const { t } = await useTranslation(lng, 'aboutUs');
  const link = `https://tourcert.org/${lng}/`;
  return (
    <div className={styles.certificates}>
      <div className={styles.certificates__content}>
        <h2>{t('certified.We are TourCert Certified')}</h2>
        <div className={styles.content__content}>
          <Image
            src={'/assets/images/homepage/TourCertSiegel.svg'}
            alt='Certificate'
            width={150}
            height={150}
          />
          <div className={styles.certificates__texts}>
            <p className={styles.texts__text}>
              {t('certified.We are TourCert Certified__description')}
            </p>
            <Link className={styles.texts__link} href={link} target='_blank'>
              {link}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
