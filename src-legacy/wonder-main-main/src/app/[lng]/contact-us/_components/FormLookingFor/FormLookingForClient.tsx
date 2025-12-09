'use client';

import Script from 'next/script';

const FormLookingForClient = () => {
  const embedForm = () => {
    const script = document.createElement('script');
    script.src = 'https://paperform.co/__embed.min.js';
    document.body.appendChild(script);
    return <></>;
  };
  return (
    <>
      <div data-paperform-id='contactformwonder'></div>
      <Script id='form-paperForm'>{embedForm()}</Script>
    </>
  );
};

export default FormLookingForClient;
