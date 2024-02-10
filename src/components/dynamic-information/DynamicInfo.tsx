'use client';
import React from 'react';
import styles from './DynamicInfo.module.scss';
import { PhotoGallery } from './photo-gallery/PhotoGallery';
import { photoGalleryMock } from '../../libs/constants/mock/photo-gallery.mock';
import { rowInfoMock } from '../../libs/constants/mock/row-info.mock';
import { RowsMedia } from '../row-media/RowsMedia';

export const DynamicInfo = () => {
  return (<>
      <article className={styles.wrapper}>
        <div className={styles.container}>
          {/*<News data={newsMock} />*/}
          {/*<Materials />*/}
          <PhotoGallery data={photoGalleryMock} />
        </div>
        <RowsMedia data={rowInfoMock} anons={'Сотрите так же'} />
      </article>
    </>

  );
};
