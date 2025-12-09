'use client';
import { IDropdown } from './DropdownCheck.model';
import styles from './DropdownCheck.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useQueryParams from '@hooks/useQueryParams';
import ReactDOM from 'react-dom';
import CheckBox from '@components/CheckBox/CheckBox';
import { useTranslation } from '@i18n-client';

const DropdownCheck = ({ content, title, queryParam }: IDropdown) => {
  content = content.sort((a, b) => a.name.localeCompare(b.name));
  const [showCollapse, setShowCollapse] = useState(false);
  const { setQueryParams, queryParams } = useQueryParams();
  const checkNow = queryParams.get(queryParam);
  useEffect(() => {
    if (!checkNow) {
      setListCheck([]);
    }
  }, [checkNow]);
  const [listCheck, setListCheck] = useState<string[]>(
    checkNow?.split(',') ?? []
  );
  const onChangeCollapse = () => {
    setShowCollapse(!showCollapse);
  };
  const { t } = useTranslation(undefined);

  return (
    <>
      <section className={styles.dropdown}>
        <button className='button__grey-outline' onClick={onChangeCollapse}>
          <Image
            src='/assets/icons/filter.svg'
            width={21}
            height={21}
            alt='Filter'
          />
          {title}
        </button>
        {showCollapse && (
          <div className={styles.dropdown__content}>
            <div className={styles.content__ListChecks}>
              {content.map(({ name, label }, index) => (
                <CheckBox
                  key={index}
                  value={name}
                  checked={listCheck.includes(name)}
                  label={label}
                  action={({ target: { value, checked } }) => {
                    const existInListCheck = listCheck.includes(value);
                    if (checked && !existInListCheck) {
                      const newListCheck = [...listCheck, value];
                      setQueryParams({
                        [queryParam]: newListCheck.toString(),
                      });
                      setListCheck(newListCheck);
                    } else {
                      const getDistintCheck = listCheck.filter(
                        (item) => item !== value
                      );
                      setQueryParams({
                        [queryParam]: getDistintCheck.toString(),
                      });

                      setListCheck(getDistintCheck);
                    }
                  }}
                />
              ))}
            </div>
            <button
              className={`secondary ${styles.content__btn_clear}`}
              onClick={() => {
                setQueryParams({ [queryParam]: undefined });
                setListCheck([]);
                setShowCollapse(false);
              }}
            >
              {t('clear filter')}
            </button>
          </div>
        )}
      </section>
      {showCollapse &&
        ReactDOM.createPortal(
          <div
            onClick={onChangeCollapse}
            style={{
              position: 'fixed',
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: 60,
            }}
          ></div>,
          document.body
        )}
    </>
  );
};

export default DropdownCheck;
