import React from 'react';
import styles from './Contact.module.scss';
import { TFunction } from 'i18next';

const Contact = ({ t }: { t: TFunction<any, string> }) => {
  return (
    <div className={styles['contact']}>
      <h2 className={styles['contact__title']}>{t('contact.title')}</h2>
      <p className={styles['contact__desc']}>{t('contact.description')}</p>
      <a
        className={styles['contact__mail']}
        href='mailto:travelbuddygroups@wondertravel.co'
      >
        {t('contact.email')}
      </a>
      <p className={styles['contact__social']}>{t('contact.social')}</p>
      <a
        className={styles['contact__cta-mail']}
        href='mailto:travelbuddygroups@wondertravel.co'
      >
        <button>{t('contact.button')}</button>
      </a>
    </div>
  );
};

export default Contact;
