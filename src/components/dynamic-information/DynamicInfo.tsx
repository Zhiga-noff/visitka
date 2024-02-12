'use client';
import React from 'react';
import styles from './DynamicInfo.module.scss';
import { PhotoGallery } from './photo-gallery/PhotoGallery';
import { photoGalleryMock } from '../../libs/constants/mock/photo-gallery.mock';
import { rowInfoMock } from '../../libs/constants/mock/row-info.mock';
import { RowsMedia } from '../row-media/RowsMedia';
import { Materials } from './materials/Materials';
import { News } from './news/News';
import { newsMock } from '../../libs/constants/mock/news.mock';

export const DynamicInfo = () => {
  return (
    <>
      <section className={styles.wrapper} id="events">
        <div className={styles.container}>
          <News data={newsMock} />
          <Materials />
          <PhotoGallery data={photoGalleryMock} />
        </div>
        <RowsMedia data={rowInfoMock} anons={'Сотрите так же'} />
      </section>
    </>
  );
};
