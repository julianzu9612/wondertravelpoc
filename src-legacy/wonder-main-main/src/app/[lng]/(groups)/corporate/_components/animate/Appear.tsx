'use client';
import React, {
  useEffect,
  useState,
  useRef,
  ReactNode,
  ReactElement,
} from 'react';

interface AnimatedComponentProps {
  children: ReactNode;
  animationDelay?: number;
}

const AnimatedComponent = ({ children, animationDelay }: AnimatedComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (
          rect.top + rect.height / 2 >= windowHeight / 2 &&
          rect.top + rect.height / 2 <= windowHeight / 2 + 80
        ) {
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
        className: `${
          child.props.className || ''
        } animated-element-appear-bottom  ${isVisible ? 'visible' : ''}`,
        style: { transitionDelay: `${animationDelay ?? 0}ms`  },
        ref: elementRef,
      })
      : child
  );
};

export default AnimatedComponent;
