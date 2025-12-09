'use client';
import Link from 'next/link';
import styles from './Dropdown.module.scss';
import { useState } from 'react';
import { useTranslation } from '@i18n-client';
import { IDropDownRedirect } from './Dropdown.model';
import useGetLanguaje from '@hooks/useGetLanguaje';

const DropdownRedirect = ({ content, title, redirect }: IDropDownRedirect) => {
  const [showCollapse, setShowCollapse] = useState(false);
  const onChangeCollapse = () => {
    document.body.addEventListener('click', () => {
      setShowCollapse(false);
    });
    setShowCollapse(!showCollapse);
  };
  const lng = useGetLanguaje();
  content = content.sort((a, b) => a.titleOption.localeCompare(b.titleOption));
  const { t } = useTranslation(lng);
  return (
    <section className={styles.collapse}>
      <h2 onClick={onChangeCollapse}>{title}</h2>
      {showCollapse && (
        <div
          className={styles.collapse__content}
          style={{
            gridTemplateColumns: `repeat(${Math.min(
              content.length,
              4
            )}, minmax(100px, 1fr))`,
          }}
        >
          {content.map(({ titleOption, redirect }, index) => (
            <Link href={redirect} key={index} id={styles.content__link}>
              {titleOption}
            </Link>
          ))}
          {redirect && (
            <Link href={redirect} id={`${styles.content__viewAll}`}>
              {t('viewAll')}
            </Link>
          )}
        </div>
      )}
    </section>
  );
};

export default DropdownRedirect;
