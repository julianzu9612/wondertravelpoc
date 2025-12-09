import { BookingContext } from '../../../../bookingContext';
import { type ChangeEvent, useContext, useState } from 'react';
import style from './FormDataCard.module.scss';
import { splitCardNumber } from '../../../../utils/splitCardNumber';
import { useTranslation } from '@i18n-client';
import Image from 'next/image';
import FormDataContact from '../formDataContact/FormDataContact';
import { policiesWonderEn, policiesWonderEs } from './utils';

const FormDataCard = () => {
  const [completeFormInputs, setCompleteFormInputs] = useState<string[]>([]);

  const {
    lng,
    creditCardInfo,
    setCreditCardInfo,
    linkPolicies,
    contractChecked,
    setContractChecked,
    resumeBooking,
    amountSelected,
    setAmountSelected,
    setApplyInstallments,
    infoPackage,
  } = useContext(BookingContext);

  const { t } = useTranslation(lng, 'booking');

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) {
      setCompleteFormInputs((prev) => [...prev, e.target.name]);
    } else {
      const i = completeFormInputs.filter((i) => i !== e.target.name);
      setCompleteFormInputs(i);
    }

    let userInfo = {
      ...creditCardInfo,
      [e.target.name]: e.target.value,
    };

    if (e.target.name === 'number') {
      userInfo = {
        ...creditCardInfo,
        [e.target.name]: splitCardNumber(e.target.value),
      };
    }

    setCreditCardInfo(userInfo);
  };

  if (infoPackage.depend_availability_validation) {
    return (
      <>
        <h2>Valida tus datos</h2>
        <p>Estamos validando la disponibilidad de este viaje</p>
        <p>Valida tus datos para contactarnos a penas tengamos respuesta</p>
        <FormDataContact />
      </>
    );
  }

  return (
    <div className={style['form-data-card']}>
      <fieldset className={style['form-data-card__select-amount-fiel']}>
        <legend>{t('data-card.title-deposit')}</legend>

        <div
          className={style['select-amount__deposit']}
          onClick={() => setAmountSelected(resumeBooking.total ?? '')}
        >
          <input
            defaultChecked={amountSelected === resumeBooking.total}
            type='radio'
            id='total_deposit'
            name='total_selected'
            value={resumeBooking.total}
          />
          <label htmlFor='total_deposit'>
            {t('data-card.total')}: ${resumeBooking.total}
          </label>
        </div>

        <div
          onClick={() => {
            setAmountSelected(
              `${resumeBooking?.installments?.[0]?.amount ?? ''}`
            );
            setApplyInstallments(true);
          }}
        >
          <input
            defaultChecked={
              amountSelected ===
              `${resumeBooking?.installments?.[0]?.amount ?? ''}`
            }
            type='radio'
            id='total_price'
            name='total_selected'
            value={resumeBooking.total}
          />
          <label htmlFor='total_price'>
            {resumeBooking?.installments?.[0]?.percent ?? ''}%{' '}
            {t('data-card.50-percent')}: $
            {resumeBooking?.installments?.[0]?.amount ?? ''}
          </label>
        </div>
      </fieldset>

      <h3>{t('data-card.title')}</h3>
      <p className={style['form-data-card__desc']}>
        {t(
          'data-card.description',
          'Para tu tranquilidada uililzamos Wompi de Bancolombia para procesar tu pago.'
        )}
      </p>
      <div className={style['form-data-card__wompi']}>
        <Image src={'/assets/other-brands/wompi.svg'} alt='' fill />
      </div>
      <p className={style['form-data-card__desc']}>
        {t('data-card.description-2', 'y aceptamos las siguientes tarjetas:')}
      </p>
      <div className={style['form-data-card__card-types']}>
        <Image src={'/assets/other-brands/card-types.png'} alt='' fill />
      </div>

      {linkPolicies && (
        <div className={style['form-data-card__terms']}>
          <label htmlFor='auth_contract'>
            {t('data-card.policies-part-1')}{' '}
            <a href={linkPolicies} target='_blank' rel='noreferrer'>
              wompi
            </a>{' '}
            {t('data-card.and', 'y de')}{' '}
            <a
              href={lng === 'es' ? policiesWonderEs : policiesWonderEn}
              target='_blank'
              rel='noreferrer'
            >
              wonder travel
            </a>{' '}
            {t('data-card.policies-part-2')}
          </label>
          <input
            type='checkbox'
            name='contract'
            id='auth_contract'
            defaultChecked={contractChecked}
            onChange={() => setContractChecked(!contractChecked)}
          />
        </div>
      )}

      <form className={style['form-data-card__form']}>
        <label htmlFor='CARD_NUMBER' className={style['form__card-number-lb']}>
          {t('Número de tarjeta', 'Número de tarjeta')}
        </label>
        <input
          onChange={onChangeForm}
          type='tel'
          name='number'
          id='CARD_NUMBER'
          required
          pattern='^\d{4} \d{4} \d{4} \d{4}$'
          value={splitCardNumber(creditCardInfo?.number) ?? ''}
          placeholder='1111 1111 1111 1111'
          className={`${style['form__card-number']} ${
            completeFormInputs.includes('number') && style['check']
          }`}
          maxLength={19}
        />

        <label htmlFor='CVC_NUMBER' className={style['form__cvc-lb']}>
          {t('Cvc', 'Cvc')}
        </label>
        <input
          type='tel'
          name='cvc'
          id='CVC_NUMBER'
          defaultValue={creditCardInfo?.cvc}
          placeholder='123'
          className={`${completeFormInputs.includes('cvc') && style['check']} ${
            style['form__cvc']
          }`}
          pattern='^\d{3}$'
          onChange={onChangeForm}
          maxLength={3}
          required
        />

        <label htmlFor='EXP_MONTH' className={style['form__exp-month-lb']}>
          {t('Mes', 'Mes')}
        </label>
        <input
          type='tel'
          name='exp_month'
          id='EXP_MONTH'
          defaultValue={creditCardInfo?.exp_month}
          placeholder='01'
          className={`${
            completeFormInputs.includes('exp_month') && style['check']
          } ${style['form__exp-month']}`}
          pattern='^\d{1,2}$'
          onChange={onChangeForm}
          maxLength={2}
          required
        />

        <label htmlFor='EXP_YEAR' className={style['form__exp-year-lb']}>
          {t('Año', 'Año')}
        </label>
        <input
          type='tel'
          name='exp_year'
          id='EXP_YEAR'
          defaultValue={creditCardInfo?.exp_year}
          placeholder='01'
          className={`${
            completeFormInputs.includes('exp_year') && style['check']
          } ${style['form__exp-year']}`}
          onChange={onChangeForm}
          maxLength={2}
          required
          pattern='^\d{1,2}$'
        />

        <label
          htmlFor='installments'
          className={style['form__installments-lb']}
        >
          {t('Cuotas', 'Cuotas')}
        </label>
        <input
          type='tel'
          name='installments'
          id='installments'
          defaultValue={creditCardInfo?.installments}
          className={`${
            completeFormInputs.includes('installments') && style['check']
          } ${style['form__installments']}`}
          onChange={onChangeForm}
          maxLength={2}
          required
          pattern='^\d{1,2}$'
        />

        <label htmlFor='CARD_HOLDER' className={style['form__holder']}>
          {t('Nombre dueño de la tarjeta', 'Nombre dueño de la tarjeta')}
        </label>
        <input
          type='text'
          name='card_holder'
          id='CARD_HOLDER'
          defaultValue={creditCardInfo?.card_holder}
          className={`${
            completeFormInputs.includes('card_holder') && style['check']
          } ${style['form__holder']}`}
          onChange={onChangeForm}
          minLength={3}
        />

        <label htmlFor='email_payment' className={style['form__email']}>
          {t('Email Facturación', 'Email Facturación')}
        </label>
        <input
          type='text'
          name='email_payment'
          id='email_payment'
          defaultValue={creditCardInfo?.email_payment}
          className={`${
            completeFormInputs.includes('email_payment') && style['check']
          } ${style['form__email']}`}
          onChange={onChangeForm}
          minLength={5}
          pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        />
      </form>
    </div>
  );
};

export default FormDataCard;
