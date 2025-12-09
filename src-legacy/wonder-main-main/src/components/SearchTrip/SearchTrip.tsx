'use client';
import React, { useState } from 'react';
// styles
import styles from './SearchTrip.module.scss';
// types
import { ISearchTrip } from './SearchTrip.model';
import { useRouter } from 'next/navigation';

const SearchTrip = ({ placeholder }: ISearchTrip) => {
  const router = useRouter();
  const [formData, setFormData] = useState('');

  const handleInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData(value);
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    router.push('/en/search?query=' + formData);
  };

  return (
    <form action={`/search?t=${formData}`} method='get' onSubmit={onSubmit}>
      <div className={styles['search-trip']}>
        <input
          id='search'
          type='text'
          placeholder={placeholder}
          name='text'
          value={formData}
          onChange={handleInput}
          aria-label='search'
        />
        <button type='submit' aria-label='icon submit'></button>
      </div>
    </form>
  );
};

export default SearchTrip;
