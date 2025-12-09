'use client';
import { useState } from 'react';
import styles from './Dropdown.module.scss';
import { IDropDown } from './Dropdown.model';
import ReactDOM from 'react-dom';

const Dropdown = ({ title, value, options, event }: IDropDown) => {
  const [showCollapse, setShowCollapse] = useState(false);

  const element =
    typeof window !== 'undefined' &&
    (document.getElementById('modal-root') as HTMLElement);
  const onEvent = () => {
    setShowCollapse((current) => !current);
  };

  return (
    <>
      <li className={styles.navbar__item}>
        <span
          className={styles['dropdown']}
          onClick={onEvent}
          aria-label='Language'
        >
          {title}

          {showCollapse && (
            <ul
              className={`${styles['dropdown-list']} ${
                showCollapse ? styles.show : ''
              }`}
            >
              {options.map(({ label, value: valueOption }, i) => {
                return (
                  <li key={i}>
                    <button
                      className={`button__link ${styles.button} ${
                        value === valueOption && styles.current
                      }`}
                      onClick={() => event(valueOption)}
                      aria-label={label}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </span>
      </li>
      {element &&
        showCollapse &&
        ReactDOM.createPortal(
          <div className={styles['dropdown-outer']} onClick={onEvent}></div>,
          element
        )}
    </>
  );
};

export default Dropdown;
