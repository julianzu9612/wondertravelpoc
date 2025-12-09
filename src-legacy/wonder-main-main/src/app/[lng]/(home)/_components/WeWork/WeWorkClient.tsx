'use client';
import Observer from '@components/Observer/Observer';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './WeWork.module.scss';
import useBreakpoints from '@hooks/useBreakPoints';

const WeWorkClient = ({ children }: { children?: React.ReactNode }) => {
  const [isObserver, setIsObserver] = useState(false);
  const refImages = useRef<HTMLDivElement>(null);
  const { isMobile } = useBreakpoints('820px');

  const onEventScroll = useCallback(() => {
    if (refImages.current && isObserver) {
      const position = refImages.current.getBoundingClientRect();
      const windowScrollY = window.scrollY;
      const posicionAbsolutaStart = position.top + windowScrollY;
      const posicionAbsolutaEnd = position.bottom + windowScrollY;
      const timeline = posicionAbsolutaStart - posicionAbsolutaEnd;
      const perc = ((windowScrollY - posicionAbsolutaStart) / timeline) * 100;

      //container
      const childrenImages = refImages.current.children;
      //images container element
      const leftImages = childrenImages[0] as HTMLDivElement;
      const rightImages = childrenImages[1] as HTMLDivElement;
      //imagea
      const leftimage1 = leftImages.children[0] as HTMLImageElement;
      const leftimage2 = leftImages.children[1] as HTMLImageElement;
      const rightimage1 = rightImages.children[0] as HTMLImageElement;
      const rightimage2 = rightImages.children[1] as HTMLImageElement;

      if (isMobile) {
        const imagesAbove = `${(-14 * perc) / 100}vw`;

        leftimage1.style.right = imagesAbove;
        leftimage2.style.right = imagesAbove;

        rightimage1.style.left = imagesAbove;
        rightimage2.style.left = imagesAbove;

        leftimage2.style.top = '0';
        rightimage1.style.top = '0';
      } else {
        const imagesAbove = `${(-18 * perc) / 100}vw`;

        const imagesBelow = `${Math.max(perc, 45)}%`;
        leftimage1.style.right = imagesAbove;
        rightimage2.style.left = imagesAbove;
        leftimage2.style.top = imagesBelow;
        rightimage1.style.top = imagesBelow;
      }
    }
  }, [refImages, isObserver]);

  useEffect(() => {
    if (refImages.current && isObserver) {
      window.addEventListener('scroll', onEventScroll);
    }
    return () => {
      window.removeEventListener('scroll', onEventScroll);
    };
  }, [isObserver, isMobile]);
  return (
    <Observer
      callback={(Intersection) => {
        setIsObserver(Intersection[0].isIntersecting);
      }}
    >
      <div className={styles.weWork__images} ref={refImages}>
        {children}
      </div>
    </Observer>
  );
};

export default WeWorkClient;
