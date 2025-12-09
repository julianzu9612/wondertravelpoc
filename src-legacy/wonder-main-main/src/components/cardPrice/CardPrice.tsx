// models
import type { CardPriceI } from './CardPrice.model';
// styles
import styles from './CardPrice.module.scss';
// utils
import { formatMoney } from '../../utils/formatMoney';
import { useTranslation } from '@i18n-server';
// coponents
import BtnClickWeTravel from '@components/btnClickWeTravel/btnClickWeTravel';
import { HasDiscount } from '../../app/[lng]/(itinerary)/trips/[slugName]/_utils/hasDiscount';
import { getCurrencyCookie } from '../../app/actions';
import Link from 'next/link';
import { whatsappUrl } from '../../constants';
import { RenderBookButton } from './RenderBookButton';


const CardPrice = async ({
  durationDays,
  price,
  uuidWeTravel,
  title,
  hasBooking,
  typeProduct,
  lng,
  tripId,
  price_discount,
  bookNowPayLater,
  newItinerary
}: CardPriceI) => {
  const { t } = await useTranslation(lng, 'itinerary');
  const trans = (value: string) => t('cardPrice.' + value);
  const hasDiscount = HasDiscount({
    price,
    price_discount: `${price_discount}.1`,
  });
  const currency = await getCurrencyCookie();
  const ContentCurrency = ({ value }: { value?: string }) => {
    return (
      <>
        <p>${formatMoney(String(value || 0))}</p>
        <span>{currency}</span>
      </>
    );
  };

  return (
    <div className={styles.CardPrice}>
      {hasDiscount && (
        <div className={styles.CardPrice__discount}>
          <p>{t('Deals')}</p>
        </div>
      )}
      <p className={styles.CardPrice__duration}>{durationDays}</p>
      <p className={styles.CardPrice__from}>{trans('from')}</p>
      <div className={styles.CardPrice__content}>
        <div
          className={`${
            hasDiscount
              ? styles.content__price
              : styles['content__priceDiscount']
          }`}
        >
          <ContentCurrency value={price} />
        </div>
        {hasDiscount && (
          <div className={styles.content__priceDiscount}>
            <ContentCurrency value={price_discount} />
          </div>
        )}
      </div>

      {typeProduct.toLowerCase() !== 'trips' && (
        <p className={styles.CardPrice__from}>{trans('person')}</p>
      )}

      <hr className={styles.CardPrice__divider} />
      <RenderBookButton
        hasBooking={hasBooking}
        tripId={newItinerary ? `${newItinerary}` : `${tripId}`}
        title={title}
        uuidWeTravel={uuidWeTravel}
        lng={lng}
        data-id='itinerary__btn-book-now'
      />

      {bookNowPayLater && (
        <BtnClickWeTravel
          type='secondary'
          uuid={uuidWeTravel}
          lng={lng}
          className={styles['btn__cero-deposit']}
          text={t('Book now with $0 deposit')}
          data-id='itinerary__btn-book-now-0-deposit'
        />
      )}
      <Link target='__blank' rel='noreferrer' href={whatsappUrl(title)}>
        <button className={`${styles['btn__contact']} secondary`}>{t('cardPrice.Chat with an agent')}</button>
      </Link>
    </div>
  );
};

export default CardPrice;
