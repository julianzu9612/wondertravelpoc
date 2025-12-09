// styles
import styles from './Price.module.scss';
// utils
import { useTranslation } from '@i18n-server';
import { formatCurrencyI18n } from '@utils/formatCurrencyI18n';
import { formatMoney } from '@utils/formatMoney';
//model
import { PriceI } from './Price.model';
import useGetLanguaje from '@hooks/useGetLanguaje';
import { RenderBookButton } from '@components/cardPrice/RenderBookButton';
import { HasDiscount } from '../../_utils/hasDiscount';
const Price = async ({
  durationDays,
  price,
  price_discount,
  ...props
}: PriceI) => {
  const lng = useGetLanguaje();
  const { t } = await useTranslation(lng, 'itinerary');
  const trans = (value: string) => t('cardPrice.' + value);
  const hasDiscount = HasDiscount({ price, price_discount });

  return (
    <div className={styles.CardPrice}>
      {hasDiscount && (
        <div className={styles.CardPrice__discount}>
          <p>{t('Deals')}</p>
        </div>
      )}
      <div className={styles['CardPrice__price']}>
        <p className={styles.price__from}>{trans('from')}</p>
        <div className={styles.price__content}>
          <div
            className={`${
              !hasDiscount
                ? styles.content__priceDiscount
                : styles.content__price
            }`}
          >
            <p>${formatMoney(price ?? 0)}</p>
            <span>{formatCurrencyI18n(price)}</span>
          </div>
          {hasDiscount && (
            <div className={styles.content__priceDiscount}>
              <p>${formatMoney(price_discount ?? 0)}</p>
              <span>{formatCurrencyI18n(price)}</span>
            </div>
          )}
          <p className={styles.content__person}>{trans('person')}</p>
        </div>
      </div>
      <p className={styles.CardPrice__duration}>{durationDays}</p>
      <div className={styles['CardPrice__button']}>
        <div className={styles.button__content}>
          <RenderBookButton {...props} />
        </div>
      </div>
    </div>
  );
};

export default Price;
