import React from 'react';
import style from './Proposal.module.scss';
import AnimatedComponent from '../animate/Appear';
import { TFunction } from 'i18next';

const Proposal = ({ t }: { t: TFunction<any, string> }) => {
  return (
    <div className={style['proposal']}>
      <AnimatedComponent>
        <h2 className={style['proposal__title']}>{t('proposal.title')}</h2>
      </AnimatedComponent>

      <AnimatedComponent animationDelay={300}>
        <>
          <h3 className={style['proposal__cx']}>
            {t('proposal.customerService.title')}
          </h3>
          <p className={style['proposal__cx']}>
            {t('proposal.customerService.description')}
          </p>
        </>
      </AnimatedComponent>
      <AnimatedComponent animationDelay={800}>
        <>
          <h3 className={style['proposal__authentic']}>
            <span>{t('proposal.authentic.title')}</span>
          </h3>
          <p className={style['proposal__authentic']}>
            {t('proposal.authentic.description')}
          </p>
        </>
      </AnimatedComponent>
      <AnimatedComponent animationDelay={1300}>
        <>
          <h3 className={style['proposal__safety']}>
            <span>{t('proposal.safety.title')}</span>
          </h3>
          <p className={style['proposal__safety']}>
            {t('proposal.safety.description')}
          </p>
        </>
      </AnimatedComponent>
    </div>
  );
};

export default Proposal;
