'use client';
export const useLocalStorage = () => {
  let itemLocalStorage: string | null;

  const getItemLocalStorage = ({ name }: { name: string; }) => {
    if (typeof window !== 'undefined') {
      itemLocalStorage = localStorage.getItem(name);
    }
    return itemLocalStorage;
  };
  const setItemLocalStorage = ({ name, value }: { name: string; value: string }) => {
    if (typeof window !== 'undefined' && value) {
      localStorage.setItem(name, value);
    }
    return true;
  };

  return {
    setItemLocalStorage,
    getItemLocalStorage,
  };
};
