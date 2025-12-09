'use client';
import { useEffect, useMemo, useState } from 'react';
import ContentInput from '../ContentInput/ContentInputs';
import { IListItems } from './ListItems.model';
import styles from './ListItems.module.scss';
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';
import { useTranslation } from '@i18n-client';

const ListItems = ({
  items,
  title,
  name,
  placeholder,
  limit = 5,
}: IListItems) => {
  const close = '/assets/icons/closeModal-icon.svg';
  const addItem = '/assets/icons/plus-math.svg';
  const {
    setValue,
    formState: { defaultValues },
  } = useFormContext();
  const initialValue = useMemo((): string[] => {
    const values = defaultValues;
    if (items) return items;
    else if (values && values[name] && values[name].length > 0)
      return values[name];
    else {
      return [''];
    }
  }, [defaultValues]);
  const [allItems, setAllItems] =
    useState<(string | undefined)[]>(initialValue);
  useEffect(() => {
    setAllItems((prevItems) => {
      if (prevItems !== initialValue) {
        return initialValue;
      }
      return prevItems;
    });
  }, [initialValue]);
  const changeItem = (position: number, value?: string) => {
    const copy = [...allItems];
    copy[position] = value;
    setAllItems(copy);
  };
  const newItem = () => {
    const lastItem = allItems[allItems.length - 1];
    if (lastItem && allItems.length < limit) {
      const copy = [...allItems, ''];
      setValue(name, allItems);
      setAllItems(copy);
    }
  };
  const removeItem = (position: number) => {
    const copy = [...allItems];
    copy.splice(position, 1);
    setAllItems(copy);
  };
  const { t } = useTranslation(undefined, 'rooming');
  const trans = (value: string) => t('list.' + value);

  return (
    <ContentInput title={title}>
      <div className={styles['content']}>
        <div className={styles['content__content-items']}>
          {' '}
          {allItems.map((value, i) => {
            return (
              <div key={i} className={styles['content-items__item']}>
                <label htmlFor='' className={styles['item__label']}>
                  {i + 1}.
                  <input
                    value={value}
                    placeholder={placeholder ?? trans('placeholder')}
                    onChange={({ target: { value } }) => {
                      changeItem(i, value);
                    }}
                  />
                </label>
                <Image
                  onClick={() => {
                    if (allItems.length > 1) {
                      removeItem(i);
                    } else {
                      setAllItems(['']);
                    }
                  }}
                  src={close}
                  className={styles['item__close']}
                  alt='close'
                  height={20}
                  width={20}
                />
              </div>
            );
          })}
        </div>
        <hr />
        <button
          type='button'
          onClick={newItem}
          className={styles['content__button']}
        >
          <Image src={addItem} alt='delete item' height={15} width={15} />
          {trans('add_other')}
        </button>
      </div>
    </ContentInput>
  );
};

export default ListItems;
