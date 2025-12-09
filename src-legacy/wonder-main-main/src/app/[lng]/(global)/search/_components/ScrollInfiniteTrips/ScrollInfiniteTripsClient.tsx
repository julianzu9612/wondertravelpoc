'use client';
// styles
import styles from './ScrollInfiniteTrips.module.scss';
// hooks
import { useEffect, useRef, useState } from 'react';
import useScrollInfinity from '@hooks/useScrollInfinity';
// services
// utils
import { useTranslation } from '@i18n-client';
// actions
import concatTripsFilters from '../../__actions/ConcatTripsFilters';
// components
import Loading from '@components/Loading/Loading';
import TripsSearch from '../TripsSearch/TripsSearch';
import { IScrollInfinity } from './ScrollInfiniteTrips.model';
import { ICardsTripsListResponse } from '../TripsSearch/TripsSearch.model';
import { getListTrips } from '@services/getListTrips';

import { whatsappUrl } from '../../../../../../constants';
const ScrollInfiniteTripsClient = ({
  pagination,
  queryParams,
  trips,
  lng,
}: IScrollInfinity) => {

  const limit = pagination?.limit || 12;
  const offset = pagination?.offset || 0;
  const count = pagination?.count || 0;

  const [{ countParams, offsetParams }, setPagination] = useState({
    offsetParams: +offset,
    countParams: +count,
  });

  const [isLoading, setIsLoading] = useState(false);
  const tripsSet = new Set<ICardsTripsListResponse>(trips);
  const [tripsFilters, setTripsFilters] =
    useState<Set<ICardsTripsListResponse>>(tripsSet);

  const changeTripsForParent = async () => {
    updateStates({
      trips: tripsSet,
      pagination: {
        countParams: +count,
        offsetParams: +offset,
      },
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    changeTripsForParent();
  }, [trips]);

  const refContainer = useRef<HTMLElement>(null);
  const { t } = useTranslation(lng, 'search');
  const nextOffset = offsetParams + limit;

  const updateStates = ({
    trips,
    pagination,
  }: {
    trips: Set<ICardsTripsListResponse>;
    pagination: {
      offsetParams: number;
      countParams: number;
    };
  }) => {
    setPagination(pagination);
    setTripsFilters(trips);
    setIsLoading(false);
  };

  const getTrips = async () => {
    if (nextOffset <= countParams) {
      setIsLoading(true);
      queryParams.offset = nextOffset.toString();
      const { results, count } = await getListTrips({
        queryParams,
        lang: lng,
      });
      const tripsUniques = await concatTripsFilters({
        currentTrips: tripsFilters,
        newTrips: results,
      });
      updateStates({
        trips: tripsUniques,
        pagination: { countParams: +count, offsetParams: +nextOffset },
      });
    }
  };

  useScrollInfinity({
    refContainer,
    nextOffset,
    countParams,
    isLoading,
    getData: getTrips,
  });

  return (
    <section ref={refContainer}>
      <TripsSearch
        tripsData={tripsFilters}
        mobileBehavior='listing-simple-card'
        t={t}
        lng={lng}
      />
      {isLoading && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
      {nextOffset > countParams && !isLoading && (
        <div className={styles['cta']}>
          <h3>
            {t('empty_state_cards',
              'Didnt find what you were looking for? Lets talk and make your dream trip become a reality!'
            )}
          </h3>
          <a
            href={whatsappUrl(
              'Hola wonder no encontré el viaje que quiero hacer me puedes ayudar buscando una opcion',
              true
            )}
          >
            <button className={styles['']}>
              {t('Chat with an agent', 'Consultar con asesor')}
            </button>
          </a>
        </div>
      )}
    </section>
  );
};

export default ScrollInfiniteTripsClient;
