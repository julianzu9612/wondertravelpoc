'use client';
import { useTranslation } from '@i18n-client';
import styles from './buttonWeTravel.module.scss';

const ButtonWeTravel = ({
  uuidWeTravel,
  className,
  lng,
}: {
  uuidWeTravel?: string;
  className: string;
  lng: string;
}) => {
  const { t } = useTranslation(lng, 'itinerary');
  const urlWeTravel = `https://wondertravel.wetravel.com/checkout_embed?uuid=${uuidWeTravel}`;

  return (
    <>
      <a
        className={`${styles['link']} wtrvl-checkout_button ${className}`}
        href={urlWeTravel}
        rel='noreferrer'
        id='wetravel_button_widget'
        data-env='https://wondertravel.wetravel.com'
        data-version='v0.3'
        data-uid='305570'
        data-uuid={uuidWeTravel}
      >
        {t('cardPrice.Book Now')}
      </a>
      <script src='https://cdn.wetravel.com/widgets/embed_checkout.js' defer />
    </>
  );
};

export default ButtonWeTravel;
