'use client';
import Lottie from 'lottie-react';
import React from 'react';
import groovyWalkAnimation from './load.json';
import style from './LottieLoad.module.scss';

const LottieLoad = () => {
  return (
    <div className={style['lottie-load']}>
      <Lottie
        animationData={groovyWalkAnimation}
        loop={true}
        style={{ width: 350 }}
      />
    </div>
  );
};

export default LottieLoad;
