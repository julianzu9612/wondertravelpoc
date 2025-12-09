import Collapse from '@components/Collapse/Collapse';
import { itemsCollapse } from '@components/Collapse/Collapse.model';
import styles from './FrequentlyQuestions.module.scss';
import { IContact } from '../../page.model';
import { useTranslation } from '@i18n-server';
const FrequentlyQuestions = async ({ lng }: IContact['params']) => {
  const { t } = await useTranslation(lng, 'contact');
  const trans = (value: string) =>
    t('frequentlyQuestions.' + value, { defaultValue: value });
  const itemsCollapse: itemsCollapse[] = [
    {
      title: <h3>{trans('How do I confirm my reservation?')}</h3>,
      content: <p>{trans('How do I confirm my reservation?__text')}</p>,
    },
    {
      title: <h3>{trans('Payment methods')}</h3>,
      content: <p>{trans('Payment methods__text')}</p>,
    },
    {
      title: <h3>{trans('How many payments do I have to make?')}</h3>,
      content: <p>{trans('How many payments do I have to make?__text')}</p>,
    },
    {
      title: <h3>{trans('Is it safe to travel to the destinations ?')}</h3>,
      content: (
        <p>{trans('Is it safe to travel to the destinations ?__text')}</p>
      ),
    },
    {
      title: <h3>{trans('Are flights included ?')}</h3>,
      content: <p>{trans('Are flights included ?__text')}</p>,
    },
    {
      title: <h3>{trans('Is everything included ?')}</h3>,
      content: <p>{trans('Is everything included ?__text')}</p>,
    },
    {
      title: <h3>{trans('What is the time and meeting point ?')}</h3>,
      content: <p>{trans('What is the time and meeting point ?__text')}</p>,
    },
  ];
  return (
    <section className={styles.frequentlyQuestions}>
      <h2>{trans('Frequently asked questions')}</h2>
      <p>{trans('Clear Your Doubts')}</p>
      <div className={styles.frequentlyQuestions__content}>
        <Collapse acordion items={itemsCollapse} lng={lng} />
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
