'use client';
import styles from './TravelStyles.module.scss';
import { ITravelStylesFilter } from './TravelStyles.model';
import { useEffect, useRef, useState } from 'react';
import Observer from '@components/Observer/Observer';
import { useMediaQuery } from '@hooks/useBreakPoints';

const TravelStyles = ({ children }: ITravelStylesFilter) => {
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
        refContentCard.current?.children[0]?.clientWidth *
        refContentCard.current?.children?.length;
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
    onEventScroll();
  }, []);
  useEffect(() => {
    if (isObserver && refContentCard.current) {
      window.addEventListener('scroll', onEventScroll);
    }
    return () => {
      window.removeEventListener('scroll', onEventScroll);
    };
  }, [isObserver, sizeTravelStyle.width]);

  return (
    <section
      className={styles['categories-filter']}
      style={{
        height:
          sizeTravelStyle.height > 0
            ? `calc(${sizeTravelStyle.height}px + 70vh)`
            : '90vh',
      }}
      ref={refContent}
    >
      <div className={styles['categories-filter__wrapper']}>
        <Observer
          callback={(intersectionObserverEntry) => {
            const isIntersecting = intersectionObserverEntry[0].isIntersecting;
            setIsObserver(isIntersecting);
          }}
        >
          {children?.[0]}
          <div
            ref={refContentCard}
            className={styles['categories-filter__boxes']}
          >
            {children?.[1]}
          </div>
          {children?.[2]}
        </Observer>
      </div>
    </section>
  );
};

export default TravelStyles;
