import React, { FC, useEffect, useState } from 'react';
import styles from './PhotoGallery.module.scss';
import { IMenu } from '../../../libs/types/menu.types';
import { SvgItem } from '../../ui/SvgItem';

interface IProps {
  data: IMenu[];
}

export const PhotoGallery: FC<IProps> = ({ data }) => {
  const [image, setImage] = useState('');

  const clickImage = (linkImage) => {
    setImage(linkImage);
  };

  useEffect(() => {
    const HTMLElement = document.children[0];
    if (image) {
      HTMLElement.classList.add('lock');
    } else {
      HTMLElement.classList.remove('lock');
    }
  }, [image]);

  return (
    <>
      <section className={styles.container}>
        {data.map((item, index) => {
          return (
            <div className={styles.imageContainer} key={index}>
              <img
                src={item.link}
                alt={item.title}
                onClick={() => {
                  clickImage(item.link);
                }}
              />
              <a href={item.link} download={item.title} className={styles.shareButton}>
                <SvgItem />
              </a>
            </div>
          );
        })}
      </section>
      {image ? (
        <div
          className={styles.modal}
          onClick={() => {
            setImage('');
          }}
        >
          <div className={styles.close}></div>
          <div className={styles.largeImage}>
            <img src={image} alt="" />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
