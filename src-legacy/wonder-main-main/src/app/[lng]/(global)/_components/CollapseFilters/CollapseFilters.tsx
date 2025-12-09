import { ReactNode } from 'react';

import { itemsCollapse } from '@components/Collapse/Collapse.model';
import styles from './CollapseFilters.module.scss';
interface ICollapseFilters {
  items: Set<itemsCollapse>;
}
const CollapseFilters = ({ items }: ICollapseFilters) => {
  const listItems: Set<ReactNode> = new Set();
  let i = 0;
  const itemsValues = items.values();
  for (const item of itemsValues) {
    i++;
    listItems.add(
      <details open={item.open} key={i} className={styles.collapse}>
        <summary className={styles.collapse__summary}>{item.title}</summary>
        <div className={styles.collapse__content}>{item.content}</div>{' '}
      </details>
    );
  }

  return listItems;
};

export default CollapseFilters;
