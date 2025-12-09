import Link from 'next/link';
import styles from './ChatWithUs.module.scss';
import { useTranslation } from '@i18n-server';
import { IContact } from '../../page.model';
const ChatWithUs = async ({ lng }: IContact['params']) => {
  const { t } = await useTranslation(lng, 'contact');
  const trans = (value: string) =>
    t('chatWithUs.' + value, { defaultValue: value });
  return (
    <section className={styles.chathWithUs}>
      <h2>{trans('Chat with us')}</h2>
      <p>{trans('Service hours')}:</p>
      <ul className={styles.chathWithUs__list}>
        <li>{trans('Monday to Friday')}</li>
        <li>{trans('Saturday from')}</li>
      </ul>
      <Link
        href={
          'https://api.whatsapp.com/send?phone=573115150177&text=Hey%20there!%20I%20want%20to%20chat%20to%20a%20Travel%20Buddy%20to%20answer%20some%20questions%20%F0%9F%9B%A9%EF%B8%8F'
        }
        target='_blank'
        rel='noreferrer'
        className={`${styles.chathWithUs__button} button`}
      >
        {trans('Chat Via Whatsapp')}
      </Link>
    </section>
  );
};

export default ChatWithUs;
