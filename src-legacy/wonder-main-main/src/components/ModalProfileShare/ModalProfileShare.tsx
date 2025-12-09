'use client';
import style from './ModalProfileShare.module.scss';
import { ModalProfileShareModel } from './ModalProfileShare.model';
import Input from '@components/input/Input';
import { useTranslation } from '@i18n-client';
import ShareModal from '@components/ShareModal/ShareModal';
const ModalProfileShare = ({ open, changeModal }: ModalProfileShareModel) => {
  const { t } = useTranslation(undefined, 'profile');

  return (
    <ShareModal changeModal={changeModal} open={open}>
      <section className={style['modal']}>
        <label className={style['modal__label']} htmlFor=''>
          {t('invite_by_email')}
        </label>
        <Input
          name=''
          onChange={() => {
            null;
          }}
          type='text'
          value=''
          placeholder='E-mail'
          className={style['modal__input']}
        />
        <button className={style['modal__button']}>{t('invite')}</button>
      </section>
    </ShareModal>
  );
};
export default ModalProfileShare;
