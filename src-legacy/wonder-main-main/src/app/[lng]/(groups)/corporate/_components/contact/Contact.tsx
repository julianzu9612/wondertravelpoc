import styles from './Contact.module.scss';
import { TFunction } from 'i18next';

interface ContactProps {
  t: TFunction;
}

const Contact = ({ t }: ContactProps) => {
  return (
    <div className={styles['contact']}>
      <h2 className={styles['contact__title']}>{t('contact.title')}</h2>
      <p className={styles['contact__desc']}>{t('contact.desc')}</p>
      <a
        className={styles['contact__mail']}
        href={`mailto:${t('contact.mail')}`}
      >
        {t('contact.mail')}
      </a>
      <p className={styles['contact__social']}>{t('contact.social')}</p>
      <a
        className={styles['contact__cta-mail']}
        href={`mailto:${t('contact.mail')}`}
      >
        <button>{t('contact.cta')}</button>
      </a>
    </div>
  );
};

export default Contact;
