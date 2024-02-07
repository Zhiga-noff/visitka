'use client';
import React, { useState } from 'react';
import styles from './Filter.module.scss';
import { filterMock, tabsMock } from '../../libs/constants/mock/filter.mock';
import { Tabs } from './tabs/Tabs';

export const Filter = () => {
  const [typeInfo, setTypeInfo] = useState('Телеканал Звезда');

  const clickButton = (type) => {
    setTypeInfo(type);
  };

  return (
    <article className={styles.wrapper}>
      <div className={styles.containerFilter}>
        <h3 className={styles.filter}>Фильтр</h3>
        <nav className={styles.navigation}>
          {filterMock.map((item, index) => {
            return (
              <Tabs
                key={index}
                active={styles.active}
                item={item}
                className={styles.filterButton}
                typeInfo={typeInfo}
                click={clickButton}
              />
            );
          })}
        </nav>
      </div>
      <div className={styles.containerTabs}>
        {tabsMock.map((item, index) => {
          return (
            <Tabs
              key={index}
              active={styles.active}
              item={item}
              className={styles.tabsButton}
              typeInfo={typeInfo}
              click={clickButton}
            />
          );
        })}
      </div>
    </article>
  );
};
