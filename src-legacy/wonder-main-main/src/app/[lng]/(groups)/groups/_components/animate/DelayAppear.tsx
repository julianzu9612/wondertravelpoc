'use client';
import React, { useEffect, useState, useRef, ReactNode, ReactElement } from 'react';

interface AnimatedComponentProps {
  children: ReactNode;
}

const AnimatedComponentDelayAppear = ({ children }: AnimatedComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {


    const onScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child as ReactElement, {
        className: `${child.props.className || ''} animated-element-delay-appear  ${
          isVisible ? 'visible' : ''
        }`,
        ref: elementRef,
      })
      : child
  );
};

export default AnimatedComponentDelayAppear;
