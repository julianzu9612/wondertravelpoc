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
          <h3 className={style['proposal__cx']}>{t('proposal.cxTitle')}</h3>
          <p className={style['proposal__cx']}>{t('proposal.cxDesc')}</p>
        </>
      </AnimatedComponent>
      <AnimatedComponent animationDelay={800}>
        <>
          <h3 className={style['proposal__authentic']}>
            <span>{t('proposal.authenticTitle')}</span>
          </h3>
          <p className={style['proposal__authentic']}>
            {t('proposal.authenticDesc')}
          </p>
        </>
      </AnimatedComponent>
      <AnimatedComponent animationDelay={1300}>
        <>
          <h3 className={style['proposal__safety']}>
            <span>{t('proposal.safetyTitle')}</span>
          </h3>
          <p className={style['proposal__safety']}>
            {t('proposal.safetyDesc')}
          </p>
        </>
      </AnimatedComponent>
    </div>
  );
};

export default Proposal;
