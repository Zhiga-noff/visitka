import React, { FC } from 'react';
import Link from 'next/link';
import { IData } from '../../../libs/types/data.types';
import styles from '../News.module.scss';
import { clsx } from 'clsx';

interface IProps {
  data: IData;
  activeClass?: string;
}

export const NewsCard: FC<IProps> = ({ data, activeClass }) => {
  const { url, media, title, date: dateNow } = data;

  return (
    <Link href={url} className={clsx(styles.news, activeClass)}>
      <figure className={styles.figure}>
        <img src={media.images.i16x9} alt={title} />
        <figcaption className="">
          <div className="">
            <h3 className={styles.title}>{title}</h3>
            <div className="">
              <data>{dateNow}</data>
            </div>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};
