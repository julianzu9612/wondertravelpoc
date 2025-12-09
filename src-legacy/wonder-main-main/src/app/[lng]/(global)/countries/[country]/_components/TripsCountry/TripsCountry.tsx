import React from 'react';
import styles from './TripsCountry.module.scss';
import { getTripsData } from '@services/getTripsData';
import { useTranslation } from '@i18n-server';
import GridTrips from '@components/GridTrips/GridTrips';
import TitleCountry from '../TitleCountry/TitleCountry';
import Link from 'next/link';
import { CommonProps } from '../../page.model';
import { ISearchTripsParamsRequest } from '@components/SearchTrip/SearchTrip.model';
interface ITripsCountry extends CommonProps {
  countryCode: string;
  title: string;
  redirect: string;
  hasDiscount?: boolean | `${boolean}`;
}
interface IGetTripsData {
  queryParams: ISearchTripsParamsRequest;
  lang: string;
}
const TripsCountry = async ({
  lng,
  countryCode,
  redirect,
  title,
  hasDiscount,
}: ITripsCountry) => {
  const { t } = await useTranslation(lng, 'countries');
  const queryParams: IGetTripsData = {
    queryParams: {
      limit: '4',
      countries: countryCode,
    },
    lang: lng,
  };
  if (typeof hasDiscount !== undefined) {
    queryParams.queryParams.product_discount_search = hasDiscount;
  }
  const responseTripsData = await getTripsData(queryParams);

  if (
    !responseTripsData ||
    !responseTripsData.results
  ) {
    return <> not result found </>;
  }

  const {
    results
  } = responseTripsData;

  return (
    <section className={styles['tripsCountry']}>
      <TitleCountry title={title} />
      <div>
        <GridTrips
          isCategories
          tripsData={results}
          mobileBehavior='listing-simple-card'
          t={t}
          lng={lng}
        />
      </div>
      <Link
        className={`button ${styles['tripsCountry__seeMore']}`}
        href={redirect}
      >
        {t('View all trips')}
      </Link>
    </section>
  );
};

export default TripsCountry;
