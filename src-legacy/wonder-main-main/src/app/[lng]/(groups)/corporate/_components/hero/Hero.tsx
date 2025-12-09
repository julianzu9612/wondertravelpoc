// import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import LazyVideo from '../../../../(home)/_components/HeroBannerDestinations/video';
import styles from './Hero.module.scss';

const Hero = async ({ t }: { t: TFunction<any, string> }) => {
  return (
    <div className={styles['hero']}>
      <div className={styles['hero__video']}>
        <LazyVideo
          className={styles['video']}
          src='/assets/videos/groups.mp4'
          poster='/assets/videos/posters/groups.png'
        />
      </div>
      <h1 className={styles['hero__title']}>{t('hero.title')}</h1>
    </div>
  );
};

export default Hero;
