import { useTranslation } from '@i18n-server';
import type {  paramsItineraryCollapse } from './__utils/useItineraryAddaptedToCollapse';
import styles from './SummaryItinerary.module.scss';

const CollapseItineray = async ({
  itinerary,
  lng,
}: paramsItineraryCollapse) => {
  const { t } = await useTranslation(lng);

  return (
    <ul className={styles['days']}>
      {itinerary.map((day, i) => (
        <li key={i}>
          <details className={styles['summary']}>
            <summary>
              <h3>
                {t('day')} {day.day}
              </h3>
              <svg
                className={`${styles['control-icon']} ${styles['control-icon-expand']}`}
                width='24'
                height='24'
                role='presentation'
              >
                <use
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  xlinkHref='#expand-more'
                />
              </svg>
            </summary>

            <div className={styles['content']}>
              {day?.events.map((event, i) => (
                <div key={i}>
                  <h4>{event.label}</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: event.description,
                    }}
                  />
                </div>
              ))}
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
};

export default CollapseItineray;
