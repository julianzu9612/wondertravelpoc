import React from 'react';
import styles from './CardsDates.module.scss';
import Link from 'next/link';
import { getCurrentLang } from '@utils/lang';

const CardsDates = async ({ t }: { t: (e: string, alt: string) => string }) => {
  const lng = await getCurrentLang();

  const cardsList = [
    {
      travelStyle: 'expediciones-wonder',
      i18n: 'card',
      defaultI18n: 'Expediciones Wonder',
    },
    {
      travelStyle: 'liberacion-de-tortugas',
      i18n: 'card',
      defaultI18n: 'Liberación de tortugas',
    },
    {
      travelStyle: 'salidas-grupales-2025',
      i18n: 'card',
      defaultI18n: 'Salidas grupales 2025',
    },
    {
      travelStyle: 'temporada-ballenas-2025',
      i18n: 'card',
      defaultI18n: 'Temporada de ballenas 2025',
    },
    // {
    //   travelStyle: 'fecha-wonder',
    //   i18n: 'card',
    //   defaultI18n: 'Viajes semana Santa',
    // },
  ] as { travelStyle: string; i18n: string; defaultI18n: string }[];

  return (
    <div className={styles['cards-dates']}>
      <div className={styles['list-cards']}>
        {cardsList.map((card, key) => (
          <Link
            key={key}
            className={styles['card']}
            href={`/${lng}/search?travelStyles=${card.travelStyle}`}
          >
            <div>{t(card.i18n, card.defaultI18n)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsDates;
