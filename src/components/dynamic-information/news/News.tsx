import React, { FC } from 'react';
import { IData } from '../../../libs/types/data.types';
import { NewsCard } from './news-card/NewsCard';

import styles from './News.module.scss';
import { ButtonDownloadMore } from '../../ui/button-download-more/ButtonDownloadMore';

interface IProps {
  data: IData[];
}

export const News: FC<IProps> = ({ data }) => {
  return (
    <>
      <section className={styles.container}>
        {data.map((item, index) => {
          if (index + 1 === 1 || !((index + 1) % 5) || !((index + 1) % 4)) {
            return <NewsCard data={item} key={index} activeClass={styles.itemLG} />;
          }
          return <NewsCard data={item} key={index} />;
        })}
      </section>
      <ButtonDownloadMore />
    </>
  );
};
