'use client';
import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
import styles from './SocialProof.module.scss';
import { SocialProofClientI } from './SocialProof.model';
import Observer from '@components/Observer/Observer';
import { useMediaQuery } from '@hooks/useBreakPoints';

const SocialProofClient = ({ children, reviewsLength }: SocialProofClientI) => {
  const refContent = useRef<HTMLDivElement>(null);
  const refContentCard = useRef<HTMLDivElement>(null);
  const [sizeTravelStyle, setSizeTravelStyle] = useState({
    height: 0,
    width: 0,
  });
  const [isObserver, setIsObserver] = useState(false);
  const isMobile = useMediaQuery('max-width: 460px');

  useEffect(() => {
    if (refContentCard.current && isObserver) {
      const { offsetWidth } = refContentCard.current;
      const sizeChildren =
        refContentCard.current?.children[0].clientWidth * reviewsLength;
      if (offsetWidth < sizeChildren && isMobile) {
        const addSizeScroll = sizeChildren + offsetWidth;
        setSizeTravelStyle({
          height: addSizeScroll,
          width: sizeChildren,
        });
      } else {
        setSizeTravelStyle({
          height: 0,
          width: sizeChildren,
        });
      }
    }
  }, [isObserver]);

  const onEventScroll = () => {
    if (refContentCard.current) {
      const rect = refContent.current?.getBoundingClientRect();
      const windowScrollY = window.scrollY;
      const posicionAbsolutaStart = rect ? rect?.top + windowScrollY : 0;
      const posicionAbsolutaEnd = rect ? rect?.bottom + windowScrollY : 0;
      const timeline = posicionAbsolutaEnd * 0.9 - posicionAbsolutaStart;
      const positionscroll = windowScrollY - posicionAbsolutaStart;
      const perc = (positionscroll / timeline) * 100;

      refContentCard.current.scrollLeft =
        (refContentCard.current.scrollWidth * perc) / 100;
    }
  };

  useEffect(() => {
    if (refContentCard.current && isObserver) {
      window.addEventListener('scroll', onEventScroll);
    }
    return () => {
      window.removeEventListener('scroll', onEventScroll);
    };
  }, [isObserver, sizeTravelStyle.width]);

  const sizeFather =
    sizeTravelStyle.height > 0
      ? `calc(${sizeTravelStyle.height}px + 70vh)`
      : '100vh';
  return (
    <section
      ref={refContent}
      className={styles['social-proof']}
      style={{
        height: sizeFather,
      }}
    >
      <div className={styles['social-proof__wrapper']}>
        {children[0]}
        <Observer
          callback={(intersectionObserverEntry) => {
            const isIntersecting = intersectionObserverEntry[0].isIntersecting;
            setIsObserver(isIntersecting);
          }}
        >
          <div
            className={styles['social-proof__list-cards']}
            ref={refContentCard}
          >
            {children[1]}
          </div>
        </Observer>
      </div>
    </section>
  );
};

export default SocialProofClient;
