'use client';

import React, { useState } from 'react';
import { filterMock } from 'libs/constants/mock/filter.mock';
import styles from './Filter.module.scss';
import { clsx } from 'clsx';

export const Filter = () => {
  const [typeInfo, setTypeInfo] = useState('Телеканал Звезда');

  const clickButton = (type) => {
    setTypeInfo(type);
  };

  return (
    <article className={styles.container}>
      <h3 className={styles.filter}>Фильтр</h3>
      <nav className={styles.navigation}>
        {filterMock.map((item) => {
          return (
            <button
              onClick={() => {
                clickButton(item);
              }}
              className={clsx(styles.filterButton, {
                [styles.active]: typeInfo === item,
              })}
            >
              {item}
            </button>
          );
        })}
      </nav>
    </article>
  );
};
