import React, { FC } from 'react';
import Link from 'next/link';
import { SvgItem } from 'components/ui/SvgItem';
import styles from '../RowMedia.module.scss';
import {IItem} from "../../../libs/types/page-home.types";

interface IProps {
  info:IItem
    download?:boolean
}

export const RowComponent: FC<IProps> = ({ info, download }) => {
  const { parentTitle, media, url, title } = info;
  const {images} = media
  return (
    download ? <></>
    //     <a href={url} className={styles.row} download={url}>
    //   <div className={styles.resource}>
    //     {/*{type ? <h5>{type}</h5> : ''}*/}
    //     <h4>Ресурс:<br />{parentTitle}</h4>
    //   </div>
    //   <div className={styles.imageContainer}>
    //     <img src={images.i16x9.url} alt={title} />
    //   </div>
    //   <h3 className={styles.title}>{title}</h3>
    //   <SvgItem />
    // </a>
        : <Link href={url} className={styles.row}>
      <div className={styles.resource}>
        {/*{type ? <h5>{type}</h5> : ''}*/}
        <h4>Ресурс:<br />{parentTitle}</h4>
      </div>
      <div className={styles.imageContainer}>
        <img src={images.i16x9.url} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
};
