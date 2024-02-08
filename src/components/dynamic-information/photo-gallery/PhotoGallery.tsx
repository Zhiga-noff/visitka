import React, { FC, useState } from 'react';
import styles from './PhotoGallery.module.scss';
import { IMenu } from '../../../libs/types/menu.types';
import { SvgItem } from '../../ui/SvgItem';

interface IProps {
  data: IMenu[];
}

export const PhotoGallery: FC<IProps> = ({ data }) => {
  const [image, setImage] = useState('');

  const clickImage = (link) => {};

  return (
    <>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <div className={styles.imageContainer}>
              <img src={item.link} alt={item.title} />
              <a href={item.link} download={item.title} className={styles.shareButton}>
                <SvgItem />
              </a>
            </div>
          );
        })}
      </div>
      <div className={styles.modal}></div>
    </>
  );
};
