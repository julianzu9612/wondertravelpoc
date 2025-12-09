'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
const ShowMenuBurger = () => {
  const [restarMenu, setRestartMenu] = useState(false);
  const url = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (restarMenu) {
      setRestartMenu(false);
    }
  }, [url, searchParams]);
  return (
    <input
      type='checkbox'
      id='menu-toggle'
      checked={restarMenu}
      className={styles['burger__checkbox-btn']}
      onChange={() => setRestartMenu(!restarMenu)}
    />
  );
};

export default ShowMenuBurger;
