import React, { FC } from 'react';
import styles from './RowMedia.module.scss';
import { RowComponent } from './row-component/RowComponent';
import { ButtonDownloadMore } from '../ui/button-download-more/ButtonDownloadMore';

interface IProps {
  data: {
    type?: string;
    resource: string;
    image: string;
    url: string;
    title: string;
  }[];
  anons?: string;
}

export const RowsMedia: FC<IProps> = ({ data, anons }) => {
  return (
    <>
      {anons && <p className={styles.anons}>{anons}</p>}
      {data.map((item, index) => {
        return <RowComponent info={item} key={index} />;
      })}
      <ButtonDownloadMore />
    </>
  );
};
