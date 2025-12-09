'use client';
import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './ModalTrip.module.scss';
import {
  eventData,
  itineraryI,
} from '@components/summaryItinerary/SummaryItinerary.model';
import Step from '@components/step/Step';
import { typeIconStep } from '@components/step/Step.utils';

const ModalTrip = ({
  isOpen,
  onClose,
  renderButtons,
  dataModal,
}: {
  isOpen: boolean;
  onClose: () => void;
  renderButtons: () => ReactNode;
  dataModal: itineraryI;
}) => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const type = (i: number): typeIconStep => {
    if (i === 0) return 'start';
    else if (i + 1 === dataModal.events.length) return 'end';
    else return 'step';
  };
  if (mounted && isOpen) {
    document.body.style.overflow = 'hidden';
    const element = document.getElementById('modal-root') as HTMLElement;
    return ReactDOM.createPortal(
      <div className={styles['modal-overlay']}>
        <div className={styles['modal-overlay__modal']}>
          <div className={styles['modal__header']}>
            <button
              className={styles['header__close']}
              onClick={onClose}
              name='Boton para cerrado de modal'
            >
              &times;
            </button>
          </div>
          <div className={styles['modal__content']}>
            <div className={styles['content__buttons-modal']}>
              {renderButtons()}
            </div>
            <div className={styles['content__steps-modal']}>
              {dataModal.events.map(
                (
                  { label, is_green: isGreen, description }: eventData,
                  i: number
                ) => (
                  <Step
                    key={i}
                    type={type(i)}
                    title={label}
                    subtitle={description}
                    highlightColor={isGreen ? 'green' : ''}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>,
      element
    );
  } else {
    if (typeof window !== 'undefined') document.body.style.overflow = 'auto';

    return null;
  }
};

export default ModalTrip;
