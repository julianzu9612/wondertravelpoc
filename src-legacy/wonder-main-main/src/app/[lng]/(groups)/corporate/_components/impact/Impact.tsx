import styles from './Impact.module.scss';
import { TFunction } from 'i18next';

interface ImpactProps {
  t: TFunction;
}

const Impact = ({ t }: ImpactProps) => {
  return (
    <div className={styles['impact']}>
      <svg
        className={styles['impact__svg']}
        viewBox='0 0 100 110'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle id='circlePath' cx='52' cy='65' r='38' fill='transparent' />

        <text
          className={styles['circle-text']}
          fontFamily='termina, sans-serif'
          fontWeight={700}
          fontSize={10}
          textLength={400}
        >
          <textPath startOffset='39%' textLength={70} href='#circlePath'>
            {t('impact.title')}
          </textPath>
        </text>
        <circle cx='52' cy='65' r='34' fill='#ff6549' />
        <image
          href='/assets/images/landing-groups.png'
          x='0'
          y='0'
          height='100'
          width='100'
        />
      </svg>
      <h3 className={styles['impact__title']}>
        <span>{t('impact.subtitle')}</span>
      </h3>
      <p className={styles['impact__text']}>
        <span dangerouslySetInnerHTML={{ __html: t('impact.text') }} />
      </p>
    </div>
  );
};

export default Impact;
