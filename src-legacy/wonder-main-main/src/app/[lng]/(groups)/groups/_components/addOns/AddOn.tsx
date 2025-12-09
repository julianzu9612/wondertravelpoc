import React from 'react';
import AnimatedComponent from '../animate/Appear';
import styles from './AddOn.module.scss';
import { TFunction } from 'i18next';

const AddOns = ({ t }: { t: TFunction<any, string> }) => {
  return (
    <div className={styles['add-ons']}>
      <AnimatedComponent>
        <h2 className={styles['add-ons__title']}>
          {t('addOns.title.customized')} <span>{t('addOns.title.addOns')}</span>{' '}
          {t('addOns.title.forTrips')}
        </h2>
      </AnimatedComponent>

      <AnimatedComponent animationDelay={300}>
        <p className={styles['add-ons__description']}>
          {t('addOns.description.prefix')}{' '}
          <b>{t('addOns.description.highlight')}</b>{' '}
          {t('addOns.description.suffix')}
        </p>
      </AnimatedComponent>

      <div className={styles['add-ons__benefits']}>
        <AnimatedComponent animationDelay={600}>
          <div className={styles['add-ons__benefit']}>
            <h3 className={styles['add-ons__benefit-title']}>
              {t('addOns.benefits.diverse.title')}
            </h3>
            <p className={styles['add-ons__benefit-text']}>
              {t('addOns.benefits.diverse.description')}
            </p>
          </div>
        </AnimatedComponent>

        <AnimatedComponent animationDelay={800}>
          <div className={styles['add-ons__benefit']}>
            <h3 className={styles['add-ons__benefit-title']}>
              {t('addOns.benefits.flexible.title')}
            </h3>
            <p className={styles['add-ons__benefit-text']}>
              {t('addOns.benefits.flexible.description')}
            </p>
          </div>
        </AnimatedComponent>

        <AnimatedComponent animationDelay={1000}>
          <div className={styles['add-ons__benefit']}>
            <h3 className={styles['add-ons__benefit-title']}>
              {t('addOns.benefits.customizable.title')}
            </h3>
            <p className={styles['add-ons__benefit-text']}>
              {t('addOns.benefits.customizable.description')}
            </p>
          </div>
        </AnimatedComponent>
      </div>
    </div>
  );
};

export default AddOns;
