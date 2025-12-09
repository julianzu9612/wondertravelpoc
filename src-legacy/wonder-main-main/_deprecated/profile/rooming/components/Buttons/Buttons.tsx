import { useTranslation } from '@i18n-client';
import { IButtons } from './Buttons.model';
import styles from './Buttons.module.scss';
import { useFormContext } from 'react-hook-form';

const Buttons = ({ onPrevButton }: IButtons) => {
  const { t } = useTranslation(undefined, 'rooming');
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <div className={styles['content-buttons']}>
      <button
        type='button'
        className={styles['content-buttons__back']}
        onClick={onPrevButton}
      >
        {t('back')}
      </button>
      <button disabled={!isValid}>{t('send')}</button>
    </div>
  );
};

export default Buttons;
