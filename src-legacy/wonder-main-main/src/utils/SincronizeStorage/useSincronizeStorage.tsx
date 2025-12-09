'use client';

import { useEffect, useState } from 'react';
import { IUseSincronizeStorage } from './useSincronizeStorage.model';

const useSincronizeStorage = ({
  type,
  key,
  initialValue,
}: IUseSincronizeStorage) => {
  const storage =
    typeof window !== 'undefined' && type === 'sessionStorage'
      ? sessionStorage
      : localStorage;
  const data = storage.getItem(key);

  const state = useState(data || initialValue);
  useEffect(() => {
    const value = state[0];
    storage.setItem(key, value.toString());
  }, [state[0]]);
  return state;
};

export default useSincronizeStorage;
