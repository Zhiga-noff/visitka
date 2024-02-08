'use client';
import React from 'react';
import styles from './DynamicInfo.module.scss';
import { PhotoGallery } from './photo-gallery/PhotoGallery';
import { photoGalleryMock } from '../../libs/constants/mock/photo-gallery.mock';

export const DynamicInfo = () => {
  return (
    <article className={styles.wrapper}>
      {/*<News data={newsMock} />*/}
      {/*<Materials />*/}
      <PhotoGallery data={photoGalleryMock} />
    </article>
  );
};
