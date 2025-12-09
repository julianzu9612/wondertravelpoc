import React from 'react';
import styles from './Addons.module.scss';
import AnimatedComponent from '../animate/Appear';
import { TFunction } from 'i18next';

const AddOns = ({ t }: { t: TFunction<any, string> }) => {
  return (
    <div className={styles['add-ons']}>
      <AnimatedComponent>
        <h2 className={styles['add-ons__title']}>
          <span dangerouslySetInnerHTML={{ __html: t('addOns.title') }} />
        </h2>
      </AnimatedComponent>

      <AnimatedComponent animationDelay={300}>
        <p className={styles['add-ons__description']}>
          <span dangerouslySetInnerHTML={{ __html: t('addOns.description') }} />
        </p>
      </AnimatedComponent>

      <div className={styles['add-ons__benefits']}>
        <AnimatedComponent animationDelay={600}>
          <div className={styles['add-ons__benefit']}>
            <h3 className={styles['add-ons__benefit-title']}>
              {t('addOns.benefit1.title')}
            </h3>
            <p className={styles['add-ons__benefit-text']}>
              {t('addOns.benefit1.text')}
            </p>
          </div>
        </AnimatedComponent>

        <AnimatedComponent animationDelay={800}>
          <div className={styles['add-ons__benefit']}>
            <h3 className={styles['add-ons__benefit-title']}>
              {t('addOns.benefit2.title')}
            </h3>
            <p className={styles['add-ons__benefit-text']}>
              {t('addOns.benefit2.text')}
            </p>
          </div>
        </AnimatedComponent>

        <AnimatedComponent animationDelay={1000}>
          <div className={styles['add-ons__benefit']}>
            <h3 className={styles['add-ons__benefit-title']}>
              {t('addOns.benefit3.title')}
            </h3>
            <p className={styles['add-ons__benefit-text']}>
              {t('addOns.benefit3.text')}
            </p>
          </div>
        </AnimatedComponent>
      </div>
    </div>
  );
};

export default AddOns;
