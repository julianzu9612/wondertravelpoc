import React from 'react';
import { YouTubeEmbed } from '@next/third-parties/google';
import styles from './Videos.module.scss';

const Videos = () => {
  return (
    <div className={styles['videos']}>
      <div>
        <p>Check out the experiences of our Colombian Embassadors</p>
        <YouTubeEmbed videoid='16EOphe-5kc' height={400} width={640} />
      </div>
      <div>
        <p>Check out what a trip to Colombia would be like!</p>
        <YouTubeEmbed videoid='wW2Mkk8BwVc' height={400} width={640} />
      </div>
    </div>
  );
};

export default Videos;
