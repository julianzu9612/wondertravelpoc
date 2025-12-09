'use client';
// styles
import styles from './GeneralInformation.module.scss';
import useBreakpoints from '../../customHooks/useBreakPoints';
import { useTranslation } from '../../app/i18n/client';
// components
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Summary = dynamic(() => import('../summary/Summary'), { ssr: false });
export interface itemsGeneralInformation {
  title: string;
  items: string[];
}

export interface GeneralInformation {
  itemsGeneralInformation: itemsGeneralInformation[];
}

const GeneralInformation = ({
  itemsGeneralInformation,
}: GeneralInformation) => {
  const { isMobile } = useBreakpoints('900px');
  const regex = /no incluye/i;
  const widthIcons = 12;
  const heightIcons = 12;
  const { t } = useTranslation(undefined, 'itinerary');

  return (
    <div className={styles['general-information']} id='trip-details'>
      <h2>{t('general_information.title')}</h2>
      {Object.values(itemsGeneralInformation).map(
        (group: itemsGeneralInformation, i: number) =>
          isMobile ? (
            <Summary title={group.title} key={i}>
              <div className={styles['general-information__items']}>
                {group?.items?.map((item, i) => (
                  <div key={i} className={styles['general-information__item']}>
                    <Image
                      src={
                        regex.test(group.title)
                          ? '/assets/icons/cancel-icon.svg'
                          : '/assets/icons/circle-orange.svg'
                      }
                      width={widthIcons}
                      height={heightIcons}
                      alt=''
                      loading='lazy'
                      priority={false}
                    />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </Summary>
          ) : (
            <div className={styles['general-information__list-items']} key={i}>
              <h3 className={styles['list-items__title']}>{group.title}</h3>
              <div className={styles['list-items__items']}>
                {group?.items?.map((item, i) => (
                  <div key={i} className={styles['list-items__item']}>
                    <Image
                      src={
                        regex.test(group.title)
                          ? '/assets/icons/cancel-icon.svg'
                          : '/assets/icons/circle-orange.svg'
                      }
                      width={widthIcons}
                      height={heightIcons}
                      alt=''
                      loading='lazy'
                      priority={false}
                    />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default GeneralInformation;
