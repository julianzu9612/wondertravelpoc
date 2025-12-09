'use client';
import Image from 'next/image';
import styles from './ModalEnd.module.scss';
import { useTranslation } from '@i18n-client';
const ModalEnd = ({ open, close }: { open: boolean; close: () => void }) => {
  const { t } = useTranslation(undefined, 'rooming');
  const check_white = '/assets/icons/check_white.svg';

  if (open) {
    document.body.style.overflow = 'hidden';
    const trans = (value: string) => t('modal_end.' + value);
    return (
      <div className={styles.container} onClick={close}>
        <div
          className={styles.container__modal}
          onClick={(e) => e.stopPropagation()}
        >
          <section>
            <Image src={check_white} alt='' width={42} height={42} />
          </section>
          <section className={styles.modal__content}>
            <h3>{trans('title')}</h3>
            <p>{trans('text')}</p>
          </section>
          <button onClick={close}>{trans('btn')}</button>
        </div>
      </div>
    );
  } else {
    document.body.style.overflow = 'auto';

    return <></>;
  }
};

export default ModalEnd;
