import styles from './FormLookingFor.module.scss';
import { IContact } from '../../page.model';
import { useTranslation } from '@i18n-server';
import dynamic from 'next/dynamic';
const FormLookingForClient = dynamic(() => import('./FormLookingForClient'), {
  ssr: false,
});
const FormLookingFor = async ({ lng }: IContact['params']) => {
  const { t } = await useTranslation(lng, 'contact');
  const trans = (value: string) =>
    t('didnt looking for.' + value, { defaultValue: value });
  return (
    <div className={styles.containerForm}>
      <h2>{trans('Didnt find what you were looking for?')}</h2>
      <p>{trans('description')}</p>
      <FormLookingForClient />
    </div>
  );
};

export default FormLookingFor;
