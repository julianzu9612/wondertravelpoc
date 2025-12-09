'use client'; 
import React, { useRef, Children, cloneElement, type ReactElement, MouseEvent } from 'react';
import style from './OverflowImage.module.scss';
import Image from 'next/image';

type ButtonMouseEvent = MouseEvent<HTMLButtonElement>;

const OverflowImage = ({ children }: { children: ReactElement[] }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const getXY = (e: ButtonMouseEvent) => [e.clientX, e.clientY];

  const handleMouseEnter = (e: ButtonMouseEvent) => {
    const [x, y] = getXY(e);

    if (cursorRef?.current !== null) {
      cursorRef?.current?.animate(
        [
          { opacity: 0, transform: `translate(${x}px, ${y}px) scale(0)` },
          { opacity: 1, transform: `translate(${x}px, ${y}px) scale(1)` },
        ],
        { duration: 300, fill: 'forwards' }
      );
    }
  };

  const handleMouseLeave = (e: ButtonMouseEvent) => {
    const [x, y] = getXY(e);
    if (cursorRef?.current !== null) {
      cursorRef?.current?.animate(
        [
          { opacity: 1, transform: `translate(${x}px, ${y}px) scale(1)` },
          { opacity: 0, transform: `translate(${x}px, ${y}px) scale(0)` },
        ],
        { duration: 300, fill: 'forwards' }
      );
    }
  };
  

  const handleMouseMove = (e: ButtonMouseEvent) => {
    const [x, y] = getXY(e);
    if (cursorRef?.current !== null) {
      cursorRef?.current?.animate([{ transform: `translate(${x}px, ${y}px)` }], {
        duration: 500,
        delay: 50,
        fill: 'forwards',
      });
    }
  };

  const clonedChildren = Children.map(children, (child) =>
    cloneElement(child, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseMove: handleMouseMove,
      className: style['menu-item']
    })
  );

  return (
    <ul className={style['menu-hover-image']}>
      {clonedChildren}
      <div className={style['cursor']} ref={cursorRef}>
        <Image src='/assets/images/navbar/colombia.gif' alt='' width={500} height={300} style={{display: 'none'}} />
        <Image src='/assets/images/navbar/mexico.gif' alt='' width={500} height={300} style={{display: 'none'}} />
        <Image src='/assets/images/navbar/peru.gif' alt='' width={500} height={300} style={{display: 'none'}} />
        {/* <Image src='/assets/images/navbar/argentina.gif' alt='' width={500} height={300} style={{display: 'none'}} />
        <Image src='/assets/images/navbar/chile.gif' alt='' width={500} height={300} style={{display: 'none'}} />
        <Image src='/assets/images/navbar/costa-rica.gif' alt='' width={500} height={300} style={{display: 'none'}} />
        <Image src='/assets/images/navbar/ecuador.gif' alt='' width={500} height={300} style={{display: 'none'}} /> */}
      </div>
    </ul>
  );
};

export default OverflowImage;
