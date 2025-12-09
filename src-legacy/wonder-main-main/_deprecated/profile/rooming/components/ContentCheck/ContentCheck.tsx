'use client';
import { useFormContext, useWatch } from 'react-hook-form';
import ContentInput from '../ContentInput/ContentInputs';
import { useTranslation } from '@i18n-client';
import styles from './ContentCheck.module.scss';
const ContentCheck = ({
  name,
  items,
  trans,
  title,
}: {
  name: string;
  items: string[];
  trans: (value: string) => string;
  title: string;
}) => {
  const { t } = useTranslation(undefined, 'rooming');

  const {
    register,
    setValue,
    formState: { defaultValues },
    getValues,
    control,
  } = useFormContext();

  const valuesCheckWatch =
    useWatch({ control, defaultValue: defaultValues?.name || [], name }) || [];

  const watchCheckOther = valuesCheckWatch.some(
    (food: string) => food === 'Other'
  );
  return (
    <ContentInput title={title}>
      <div className={styles['checks']}>
        {items.map((item, i) => {
          return (
            <label
              key={i}
              onClick={() => {
                const valuesNow: string[] = getValues()[name];
                const existRestrictions = valuesNow?.some(
                  (food: string) => food === item
                );
                if (existRestrictions) {
                  setValue(
                    name,
                    valuesNow?.filter((food: string) => food !== item)
                  );
                } else {
                  setValue(name, [...valuesNow, item]);
                }
              }}
            >
              <input type='checkbox' value={item} {...register(name)} />
              {trans(item)}
            </label>
          );
        })}
      </div>
      {watchCheckOther && (
        <div className={styles['other']}>
          <hr />
          <input
            type='text'
            placeholder={t('information_eats.restrictions.Other')}
            defaultValue={valuesCheckWatch.find(
              (element: string) => !items.includes(element)
            )}
            onChange={({ target: { value } }) => {
              const data = valuesCheckWatch;
              const indexValue = data.findLastIndex(
                (data: string) =>
                  data === value.slice(0, -1) || data.slice(0, -1) === value
              );
              if (indexValue !== -1) {
                data[indexValue] = value;
                setValue(name, [...(data as string[])]);
              } else {
                setValue(name, [...(data as string[]), value]);
              }
            }}
          />
        </div>
      )}
    </ContentInput>
  );
};

export default ContentCheck;
