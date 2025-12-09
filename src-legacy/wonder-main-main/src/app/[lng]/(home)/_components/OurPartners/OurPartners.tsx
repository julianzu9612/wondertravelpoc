import Image from 'next/image';
//styles
import styles from './OurPartners.module.scss';
//utils
import { useTranslation } from '@i18n-server';
import Link from 'next/link';

const OurPartners = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'home');
  const trans = (value: string) =>
    t('ourPartners.' + value, { defaultValue: value });
  return (
    <section className={styles['ourPartners']}>
      <div className={styles['ourPartners__container']}>
        <h2 className={styles['container__title']}>
          {trans('Our partners and certifications')}
        </h2>
        <div className={styles['container__assets']}>
          <Link href='https://procolombia.co/' target='_blank'>
            <Image
              src='/assets/images/homepage/acotur-procolombia.png'
              alt='Our partners and certifications'
              width={250}
              height={250}
              className={styles['assets__procolombia']}
            />
          </Link>
          <Link href='https://tourcert.org/' target='_blank'>
            <Image
              src='/assets/images/homepage/TourCertSiegel.svg'
              alt='Our partners and certifications'
              width={250}
              height={250}
            />
          </Link>
          <Link href={'https://acotur.co/es'} target='_blank'>
            <Image
              src='/assets/images/homepage/acoturcortologo.png'
              alt='Our partners and certifications'
              width={250}
              height={250}
            />
          </Link>
          <Link href={'https://www.destinosdepaz.gov.co/'} target='_blank'>
            <Image
              src='/assets/images/homepage/sello.png'
              alt='Our partners and certifications'
              width={250}
              height={250}
              sizes='170px'
              quality={50}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
