'use client';
import React, { useState } from 'react';
import styles from './Tabs.module.scss';

type TabContent = {
  tabName: string;
  content: React.ReactNode;
};

type TabComponentProps = {
  tabs: TabContent[];
  tabDefault?: number;
  className: string;
};

const TabComponent: React.FC<TabComponentProps> = ({
  tabs,
  className,
  tabDefault = 0,
}) => {
  const [activeTab, setActiveTab] = useState(tabDefault);

  return (
    <div className={`${styles['tabs-component']} ${className}`}>
      <div className={styles['tabs-component__tabs']}>
        {tabs.map((tab, index) => (
          <div
            role='button'
            key={index}
            className={`${styles['tabs__tab']} ${
              activeTab === index ? styles['tabs__tab-active'] : ''
            }`}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {tab?.tabName}
          </div>
        ))}
      </div>
      <div className='content'>{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default TabComponent;
