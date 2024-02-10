import React, { FC } from 'react';
import Link from 'next/link';
import { SvgItem } from 'components/ui/SvgItem';
import styles from '../RowMedia.module.scss';

interface IProps {
  info: {
    type?: string,
    resource: string,
    image: string,
    url: string,
    title: string
  };
  download?: boolean;
}

export const RowComponent: FC<IProps> = ({ info, download }) => {
  const { type, resource, image, url, title } = info;
  return (
    download ? <a href={url} className={styles.row} download={url}>
      <div className={styles.resource}>
        {type ? <h5>{type}</h5> : ''}
        <h4>Ресурс:<br />{resource}</h4>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <SvgItem />
    </a> : <Link href={url} className={styles.row}>
      <div className={styles.resource}>
        {type ? <h5>{type}</h5> : ''}
        <h4>Ресурс:<br />{resource}</h4>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
};
