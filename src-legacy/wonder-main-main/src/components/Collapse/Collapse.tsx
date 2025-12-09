'use client';
import { useMemo, useState } from 'react';
// styles
import styles from './Collapse.module.scss';
// hooks
// types
import type { ICollapse, itemsCollapse } from './Collapse.model';

const Collapse = ({ items, acordion, withoutBorder, lng }: ICollapse) => {
  const memoItems = useMemo(() => items, [lng, items]);
  const [collapse, setCollapse] = useState<itemsCollapse[]>(memoItems);
  const onEventClick = (indexElement: number) => {
    if (acordion) {
      const copyCollapse = collapse.map(({ open, ...restInfo }, i) => {
        return {
          ...restInfo,
          open: indexElement === i ? !open : false,
        };
      });
      setCollapse(copyCollapse);
    } else {
      const copyCollapse = [...collapse];
      copyCollapse[indexElement].open = !copyCollapse[indexElement].open;
      setCollapse(copyCollapse);
    }
  };
  return collapse.map(({ open, content, title }, i) => {
    return (
      <div className={`${styles.collapse} `} key={i}>
        <div
          className={`${styles.collapse__summary} ${
            withoutBorder && styles.withoutBorder
          }`}
          onClick={() => onEventClick(i)}
        >
          {title}
          <button
            type='button'
            className={styles.summary__toggleButton}
            name='boton para desplegar la descripcíon de este desplegable'
          >
            <p className={open ? styles.openArrow : styles.closeArrow}>
              &lsaquo;
            </p>
          </button>
        </div>
        {open && (
          <div onClick={(e) => e.stopPropagation()} className={styles.content}>
            {content}
          </div>
        )}
      </div>
    );
  });
};

export default Collapse;
