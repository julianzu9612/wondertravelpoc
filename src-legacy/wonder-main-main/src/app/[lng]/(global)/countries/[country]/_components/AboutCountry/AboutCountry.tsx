import React from 'react';
import styles from './AboutCountry.module.scss';
import TitleCountry from '../TitleCountry/TitleCountry';
import CarouselCountry from '../CarouselCountry/CarouselCountry';
import { useTranslation } from '@i18n-server';
import { CommonProps } from '../../page.model';
import { ResGetCountry } from '../../../../../../../../statics/countries';
type ITypeAboutCountry = ResGetCountry['aboutCountry'];
interface IBasicCountry extends ITypeAboutCountry, CommonProps {
  lng: string;
}
const AboutCountry = async ({
  description,
  images,
  lng,
  countryLabel,
}: IBasicCountry) => {
  const { t } = await useTranslation(lng, 'countries');
  return (
    <section className={styles.about}>
      <div className={styles.about__description}>
        <TitleCountry title={t('AboutCountry', { country: countryLabel })} />
        <p className={styles.description__description}>{description}</p>
      </div>
      <div className={styles.about__images}>
        <CarouselCountry images={images} />
      </div>
    </section>
  );
};

export default AboutCountry;
