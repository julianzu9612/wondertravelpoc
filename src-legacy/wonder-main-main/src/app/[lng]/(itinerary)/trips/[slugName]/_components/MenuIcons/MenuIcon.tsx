import React from 'react';
import { IMenuIcons } from './MenuIcon.model';
import styles from './MenuIcon.module.scss';
const MenuIcon = ({ icon, name }: IMenuIcons) => {
  return (
    <div className={styles['content-icon']}>
      <i>{icon}</i>
      <p>{name}</p>
    </div>
  );
};

export default MenuIcon;
