'use client';
import React from 'react';
import { setCookie } from 'cookies-next';

const ButtonCurrency = ({ currency }: { currency: string }) => {
  const changeCurrency = () => {
    setCookie('currency', currency, { maxAge: 60 * 6 * 24 });
    if (typeof window !== 'undefined') location?.reload();
  };

  return <button className='ghost-dark' onClick={() => changeCurrency()}>{currency?.toUpperCase()}</button>;
};

export default ButtonCurrency;
