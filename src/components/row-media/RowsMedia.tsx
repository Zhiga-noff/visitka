import React, { FC } from 'react';
import styles from './RowMedia.module.scss';
import { RowComponent } from './row-component/RowComponent';
import { ButtonDownloadMore } from '../ui/button-download-more/ButtonDownloadMore';
import {IItem} from "../../libs/types/page-home.types";

interface IProps {
  items:IItem[],
  title: string
}

export const RowsMedia: FC<IProps> = ({ items, title }) => {
  return (
    <>
      {title && <p className={styles.anons}>{title}</p>}
      {items.map((item, index) => {
        return <RowComponent info={item} key={index} download={false}/>;
      })}
    </>
  );
};
