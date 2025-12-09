import { useTranslation } from '@i18n-server';
import { ParamsSearch } from '../../page';
import styles from './WhyWonderTravel.module.scss';
import Image from 'next/image';
import WhyTarget from './WhyTarget';
const WhyWonderTravel = async ({ lng }: ParamsSearch['params']) => {
  const { t } = await useTranslation(lng, 'aboutUs');
  const trans = (value: string) => t('Why travel with Wonder?.' + value);

  return (
    <section className={styles.why}>
      <Image
        src={'/assets/images/footer1.webp'}
        alt='bkg section'
        fill
        style={{ objectFit: 'cover', position: 'absolute', zIndex: -1 }}
      />
      <div className={styles.why__content}>
        <h2>{trans('Why travel with Wonder Travel?')}</h2>
        <p>{trans('Why travel with Wonder Travel?__description')}</p>
        <div className={styles.content__targets}>
          <WhyTarget
            title={trans('Intimate Groups, Authentic Experiences')}
            description={trans(
              'Intimate Groups, Authentic Experiences__description'
            )}
            img='/assets/images/aboutUs/intimateGroups.svg'
          />
          <WhyTarget
            title={trans('Venture Off the Beaten Path')}
            description={trans('Venture Off the Beaten Path__description')}
            img='/assets/images/aboutUs/yourPreferences.svg'
          />
          <WhyTarget
            title={trans('Travel with Local Experts')}
            description={trans('Travel with Local Experts__description')}
            img='/assets/images/aboutUs/digitalTravelBuddy.svg'
          />
          <WhyTarget
            title={trans('Deep Connections With Local Communities')}
            description={trans(
              'Deep Connections With Local Communities__description'
            )}
            img='/assets/images/aboutUs/travelSmart.svg'
          />
        </div>
      </div>
    </section>
  );
};

export default WhyWonderTravel;
