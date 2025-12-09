'use client';
import styles from './FilterDuration.module.scss';
import { InputEvent } from '../../../../../../types/common';
import { useContextFilters } from '../../__context/ContextFilters';
const minRange = 3;
const maxRange = 20;

const FilterDuration = () => {
  const { queryParamsContext, setQueryParamsContext } = useContextFilters();
  const durationMin = queryParamsContext?.durationMin;
  const durationMax = queryParamsContext?.durationMax;
  const changeDuration = ({ target: { name, value } }: InputEvent) => {
    const parseIntValue = +value;
    if (
      (name === 'durationMin' && durationMax && parseIntValue < +durationMax) ||
      !durationMax
    ) {
      setQueryParamsContext((current) => ({
        ...current,
        [name]: parseIntValue,
      }));
    } else if (
      (name === 'durationMax' && durationMin && parseIntValue > +durationMin) ||
      !durationMin
    ) {
      setQueryParamsContext((current) => ({
        ...current,
        [name]: parseIntValue,
      }));
    }
  };

  return (
    <div>
      <span className={styles['multi-range']}>
        <input
          type='range'
          min={minRange}
          value={durationMin || minRange}
          max={maxRange}
          name='durationMin'
          id='lower'
          onChange={changeDuration}
        />
        <input
          type='range'
          max={maxRange}
          min={minRange}
          value={durationMax || maxRange}
          name='durationMax'
          id='upper'
          onChange={changeDuration}
        />
      </span>
      <div className={styles.filterInformation}>
        <p>
          Min: <span>{durationMin || minRange}</span>
        </p>
        <p>
          Max: <span>{durationMax || maxRange}</span>
        </p>
      </div>
    </div>
  );
};

export default FilterDuration;
