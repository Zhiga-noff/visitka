import React from 'react';
import { filterMock } from '../../libs/constants/mock/filter.mock';

export const Filter = () => {
  return (
    <article>
      <h2>Фильтр</h2>
      <nav>
        {filterMock.map((item) => {
          return <button>{item}</button>;
        })}
      </nav>
    </article>
  );
};
