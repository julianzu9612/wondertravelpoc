'use client';
import { useEffect, useRef } from 'react';
import { IObserver } from './Observer.model';
const Observer = ({
  callback,
  options = { rootMargin: '10px', threshold: 0 },
  children,
  ref,
  ...restAttr
}: IObserver) => {
  const refElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if ((refElement && refElement.current) || (ref && refElement.current)) {
      const observer = new IntersectionObserver((entries, observer) => {
        callback && callback(entries, observer);
      }, options);
      observer.observe(refElement.current);
    }
  }, []);
  return (
    <section {...restAttr} ref={refElement}>
      {children}
    </section>
  );
};
export default Observer;
