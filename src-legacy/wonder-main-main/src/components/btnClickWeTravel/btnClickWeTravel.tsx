
import { useTranslation } from '@i18n-server';
import styles from './btnClickWeTravel.module.scss';

const BtnClickWeTravel = async ({
  uuid,
  lng,
  className,
  type = 'primary',
  text,
}: {
  uuid: string | undefined;
  lng: string;
  className?: string;
  type?: string;
  text?: string;
}) => {
  const { t } = await useTranslation(lng);
  const urlWeTravel = `https://wondertravel.wetravel.com/checkout_embed?uuid=${uuid}`;

  return (
    <div className={className}>
      <a
        className={`wtrvl-checkout_button ${styles['button-click-wetravel']} ${styles[type]}`}
        href={urlWeTravel}
        rel='noreferrer'
        id='wetravel_button_widget-'
        data-env='https://wondertravel.wetravel.com'
        data-version='v0.3'
        data-uid='305570'
        data-uuid={uuid}
      >
        {text ?? t('bookNow')}
      </a>
    </div>
  );
};

export default BtnClickWeTravel;
