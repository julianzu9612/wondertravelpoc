'use client';

import React, { useEffect } from 'react';


declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const LogFbEvent = ({type, eventName}: {type?: string; eventName?: string}) => {

  if (process.env.NODE_ENV === 'development') return <></>;

  
  useEffect(() => {
    const fbq = window.fbq;

    if (fbq) {
      setTimeout(() => {
        fbq(type ?? 'track', eventName ?? 'ViewContent');
      }, 3000);
    }
  }, []);

  return <div></div>;
};

export default LogFbEvent;
