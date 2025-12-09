'use client';

import { useTranslation } from '@i18n-client';

type ZenviaChatType = {
  new (apiKey: string): any;
};
declare global {
  interface Window {
    ZenviaChat: ZenviaChatType;
  }
}

const BtnZenvia = ({ dataId, type = 'primary' }: { dataId: string; type?: string }) => {
  const { t } = useTranslation(undefined, 'itinerary');
  const openChat = () => {
    if (typeof window !== 'undefined') {
      const schat = new window.ZenviaChat('ca2079629a50ded07036f4b4bf142647')
        .embedded('buttonless')
        .build();

      schat.open();
    }
  };

  return (
    <button
      data-id={dataId}
      style={{ width: '100%', maxWidth: 350 }}
      onClick={openChat}
      className={type}
    >
      {t('cardPrice.Chat with an agent')}
    </button>
  );
};

export default BtnZenvia;
