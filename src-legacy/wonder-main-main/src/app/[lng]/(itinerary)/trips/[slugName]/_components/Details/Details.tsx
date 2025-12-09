//utils
import { useTranslation } from '@i18n-server';
//model Props
import { IDetails } from './Details.model';
//styles
import styles from './Details.module.scss';
import Detail from './componnets/Detail/Detail';
import FlightInformation from './componnets/FlightInformation/FlightInformation';
import Highlighted from './componnets/Highlighted/Highlighted';
import Link from 'next/link';
import { getLinkVisa } from '../../_actions/getLinkVisa';
//components

const Details = async ({ lng, phisicalPerformance, product }: IDetails) => {

  const { t: trans } = await useTranslation(lng, 'itinerary');
  const t = (value: string) => trans(`details.${value}`);

  const addaptadToItems = (value: string[]) => {
    if (typeof value === 'string') return value;
    return value?.map((item) => ({ text: item }));
  };

  const linkVisa = await getLinkVisa(product.countries);

  return (
    <div className={styles.content}>
      <h2 className={styles['content__title']}>{t('overview-title')}</h2>
      <div className={styles.content__details}>
        <div className={styles.details__list}>

          {product.travel_style && (
            <Detail
              title={t('travelStyle')}
              items={{ text: product.travel_style.label }}
              icon='/assets/icons/multi_dia.svg'
              alt={t('travelStyle')}
            />
          )}

          {product.service_level && (
            <Detail
              title={t('serviceLevel')}
              icon='/assets/icons/service.png'
              alt={t('serviceLevel')}
              items={{ text: product.service_level.label }}
            />
          )}
          {product.physical_performance_popup && (
            <Detail
              title={t('physical_effort')}
              items={{
                text: phisicalPerformance,
                contentPopup: product.physical_performance_popup,
              }}
              icon='/assets/icons/ray.svg'
              alt={t('physical_effort')}
            />
          )}
          {product.destinations && (
            <Detail
              title={t('destinations')}
              items={addaptadToItems(product.destinations)}
              icon='/assets/icons/mapPinpoint.png'
              alt={t('destinations')}
            />
          )}
          <div>
            {product.accomodation && (
              <Detail
                title={t('accommodation')}
                items={addaptadToItems(product.accomodation)}
                icon='/assets/icons/accomodations.svg'
                alt={t('accommodation')}
              />
            )}
          </div>
        </div>
        
        {product.product_fligths && (
          <FlightInformation
            flights={product.product_fligths}
            detailVisa={
              linkVisa?.visa && (
                <Detail
                  title={'Visa'}
                  items={[
                    {
                      text: (
                        <p className={styles['visa__text']}>
                          {t('Varies depending on your country')}{' '}
                          <Link href={linkVisa.visa} target='_blank'>
                            {t('Check here')}
                          </Link>
                        </p>
                      ),
                    },
                  ]}
                  icon='/assets/icons/lang-icon-blue.svg'
                  alt={t('Visa')}
                />
              )
            }
          />
        )}

        {product.trip_highlights && (
          <Highlighted items={product.trip_highlights} />
        )}
      </div>
    </div>
  );
};

export default Details;
