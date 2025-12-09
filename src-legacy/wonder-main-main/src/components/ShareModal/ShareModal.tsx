import Image from 'next/image';
import style from './ShareModel.module.scss';
import { IShareModel } from './Share.model';
import { useTranslation } from '@i18n-client';

const ShareModal = ({ open, changeModal, children, variant }: IShareModel) => {
  const { t } = useTranslation(undefined, 'profile');
  const copyLinkIcon = '/assets/icons/copyLink.svg';
  const closeIcon = '/assets/icons/closeModal-icon.svg';

  if (open) {
    if (typeof window !== 'undefined') document.body.style.overflow = 'hidden';

    return (
      <div className={style['container']}>
        <div className={style['container__content']}>
          <div
            className={`${style['content__modal']} ${
              variant && style['content__modal-' + variant]
            }`}
          >
            <section className={style['modal__btn-close']}>
              <span onClick={() => changeModal()}>
                <Image src={closeIcon} alt='close' />
              </span>
            </section>
            <div className={style['modal__content']}>
              {children}
              <hr />
              <section className={style['content__copy']}>
                <span>
                  <Image alt={'Copy'} src={copyLinkIcon} />
                </span>
                <h3>{t('copy_link')}</h3>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    document.body.style.overflow = 'auto';
    return <></>;
  }
};

export default ShareModal;
