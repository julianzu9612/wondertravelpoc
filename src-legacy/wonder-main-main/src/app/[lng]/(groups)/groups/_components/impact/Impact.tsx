import React from 'react';
import styles from './Impact.module.scss';

const Impact = () => {
  return (
    <div className={styles['impact']}>
      <svg
        className={styles['impact__svg']}
        viewBox='0 0 100 110'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle id='circlePath' cx='52' cy='65' r='38' fill='transparent' />

        <text
          className={styles['circle-text']}
          fontFamily='termina, sans-serif'
          fontWeight={700}
          fontSize={10}
          textLength={400}
        >
          <textPath startOffset='39%'  textLength={70} href='#circlePath'>
            Our Impact
          </textPath>
        </text>
        <circle cx='52' cy='65' r='34' fill='#ff6549' />
        <image
          href='/assets/images/landing-groups.png'
          x='0'
          y='0'
          height='100'
          width='100'
        />
      </svg>
      <h3 className={styles['impact__title']}>
        <span>The impact behind our value proposition</span>
      </h3>
      <p className={styles['impact__text']}>
        We dedicate
        <b> over 80% of our sales</b> to more than <b>40 local hosts, </b> 
        supporting over <b>300 families</b>, including guides, cultural groups, local
        food vendors, and drivers (among others). Alongside <b>5,500+ travelers</b> ,
        we`ve positively impacted more than <b>20 destinations</b>  across Colombia.
      </p>
    </div>
  );
};

export default Impact;
