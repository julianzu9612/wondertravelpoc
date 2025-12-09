'use client';
import { TYPE_TRIPS, itineraryI } from '../SummaryItinerary.model';
import { useTranslation } from '@i18n-client';
import { typeIconStep } from '@components/step/Step.utils';
import useBreakpoints from '@hooks/useBreakPoints';
import { itemsCollapse } from '@components/Collapse/Collapse.model';
import Step from '@components/step/Step';
import { useState } from 'react';
export interface paramsItineraryCollapse {
  typeTrip?: string | number;
  lng: string;
  itinerary: itineraryI[];
}
const getTypeIcon = ({
  datalng,
  isTablet,
  numberItem,
  typeTrip,
}: {
  numberItem: number;
  typeTrip?: number | string;
  isTablet: boolean;
  datalng: number;
}): typeIconStep => {
  if (typeTrip === TYPE_TRIPS.ROUNDTRIPS) return 'roundtrip';
  if (!isTablet) {
    if (numberItem === 0) {
      return 'isologo-start';
    } else if (numberItem + 1 === datalng) {
      return 'isologo-end';
    } else {
      return 'isologo-step';
    }
  } else {
    if (numberItem === 0) {
      return 'start';
    } else if (numberItem + 1 === datalng) {
      return 'end';
    } else {
      return null;
    }
  }
};
const useItineraryAddaptedToCollapse = ({
  lng,
  typeTrip,
  itinerary,
}: paramsItineraryCollapse) => {
  useState<itemsCollapse[]>([]);
  const { t } = useTranslation(lng, 'itinerary');
  const { isTablet } = useBreakpoints();
  const data = itinerary[0];
  const transDay = t('day');
  const itineraryAddaptedToCollapse: itemsCollapse[] = itinerary.map(
    ({ day, events }) => {
      const eventsDay = events.map(({ label, description, is_green }, i) => (
        <Step
          key={i}
          type={getTypeIcon({
            datalng: data.events.length,
            isTablet,
            numberItem: i,
            typeTrip,
          })}
          title={label}
          subtitle={description}
          highlightColor={is_green ? 'green' : ''}
        />
      ));
      return {
        title: (
          <h3 style={{ padding: '12px' }}>
            {transDay} {day}
          </h3>
        ),
        content: eventsDay,
      };
    }
  );

  return itineraryAddaptedToCollapse;
};

export default useItineraryAddaptedToCollapse;
