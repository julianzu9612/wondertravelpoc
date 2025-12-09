import Link from 'next/link';
import FullViewImage from '../FullViewImage/FullViewImage';
// styles
import styles from './Map.module.scss';
import { MapI } from './Map.model';
import { useTranslation } from '@i18n-server';
import getUrlMaps from '../../_actions/getUrlMap';

const Map = async ({
  ebook_url,
  feed_map_image_thumbnail,
  lng,
  productLabel,
}: MapI) => {
  const { t } = await useTranslation(lng, 'itinerary');
  const urlMaps = await getUrlMaps();
  const urlProductMap = urlMaps.get(productLabel);
  const MapContent = () => {
    if (urlProductMap) {
      return (
        <iframe
          className={styles.map__iframe}
          src={urlProductMap}
          width='100%'
          height='480px'
          allowFullScreen
        />
      );
    } else if (feed_map_image_thumbnail)
      return (
        <>
          <FullViewImage
            alt='mapa'
            height={508}
            image={feed_map_image_thumbnail}
            width={443}
          />
          {ebook_url && (
            <Link href={ebook_url} target='_blank'>
              {t('learn_more_about_itinerary')}
            </Link>
          )}
        </>
      );
  };
  return (
    <div className={styles['map']}>
      <MapContent />
    </div>
  );
};

export default Map;
