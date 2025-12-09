import { useTranslation } from '@i18n-server';
import styles from './CookiesPolicies.module.scss';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { hasAcceptCookie } from '../../app/actions';
const ButtonCookies = dynamic(() => import('./ButtonCookies'), { ssr: false });
const CookiesPolicies = async ({ lng }: { lng: string }) => {
  const hasKeyAcceptCookie = await hasAcceptCookie();
  if (hasKeyAcceptCookie) {
    return <></>;
  } else {
    const { t } = await useTranslation(lng, 'translation');
    const trans = (value: string) =>
      t('cookiesPolicies.' + value, { defaultValue: value });
    return (
      <dialog open className={styles['PoliciesCookies']}>
        <div className={styles['PoliciesCookies__content']}>
          <h3 className={styles['content__title']}>{trans('title')}</h3>
          <p className={styles['content__text']}>
            {trans('policies')}{' '}
            <Link
              className={styles['text__link']}
              target='_blank'
              href={
                'https://drive.google.com/file/d/1KZVvrlhH-eYu4fRLscZ5vXhsxiFI1cRu/view?usp=sharing'
              }
            >
              {trans('linkPolicies')}
            </Link>
          </p>
          <form method='dialog'>
            <div className={styles['content__buttons']}>
              <ButtonCookies
                title={trans('Accept')}
                variant='buttons__button--accept'
                value='true'
              />
              <ButtonCookies
                title={trans('Decline')}
                variant='buttons__button--decline'
                value='false'
              />
            </div>
          </form>
        </div>
      </dialog>
    );
  }
};

export default CookiesPolicies;
