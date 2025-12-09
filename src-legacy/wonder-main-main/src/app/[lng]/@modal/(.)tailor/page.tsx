import React from 'react';
import styles from './TailorMade.module.scss';
import Image from 'next/image';
import { CloseModal } from './_componentes/close';
import { BasicForm, FormTailor } from './_componentes/form';
import { useTranslation } from '@i18n-server';
import { goToUrlWhatsapp } from './utils';
import { getFieldsForm } from './utils.server';

const TailorMadePage = async ({params: { lng }} : {params: { lng: string}}) => {
  const { t } = await useTranslation(lng, 'home');
  const questions: BasicForm[] = getFieldsForm(t);

  return (
    <div className={styles['tailor-made-modal']}>
      <div className={styles['wrapper']}>
        <Image
          className={styles['images__3']}
          src='/assets/images/modal-tailor-made/modal-img-3.png'
          alt='maverure mountaint'
          width={150}
          height={100}
        />
        <Image
          className={styles['images__2']}
          src='/assets/images/modal-tailor-made/modal-img-2.png'
          alt='maverure mountaint'
          fill
        />
        <p className={styles['title__2']}>{t('tailor-form.made')}</p>
        <Image
          className={styles['images__3_1']}
          src='/assets/images/modal-tailor-made/modal-img-3.png'
          alt='maverure mountaint'
          width={150}
          height={100}
        />
        <Image
          className={styles['images__1']}
          src='/assets/images/modal-tailor-made/modal-img-1.png'
          alt='maverure mountaint'
          fill
        />
        <Image
          className={styles['images__3_2']}
          src='/assets/images/modal-tailor-made/modal-img-3.png'
          alt='maverure mountaint'
          width={210}
          height={100}
        />
        <p className={styles['title__1']}>{t('tailor-form.tailor')}</p>
        <p className={styles['description']}>{t('tailor-form.description')}</p>

        <FormTailor
          inputs={questions}
          submitFormAction={goToUrlWhatsapp}
          cta={t('tailor-form.cta')}
        />
      </div>
      <CloseModal className={styles['close-btn']} />
    </div>
  );
};

export default TailorMadePage;
