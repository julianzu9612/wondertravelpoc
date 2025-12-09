'use client';
import styles from './CookiesPolicies.module.scss';
import { setAcceptCookie } from '../../app/actions';

const ButtonCookies = ({
  title,
  variant,
  value,
}: {
  title: string;
  variant: string;
  value: string;
}) => {
  const onEvent = () => {
    setAcceptCookie(value);
  };
  return (
    <button
      className={`${styles['buttons__button']}  ${styles[variant]}`}
      onClick={onEvent}
    >
      {title}
    </button>
  );
};

export default ButtonCookies;
