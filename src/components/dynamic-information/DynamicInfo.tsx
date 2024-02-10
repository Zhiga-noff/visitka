'use client';
import React from 'react';
import styles from './DynamicInfo.module.scss';
import { PhotoGallery } from './photo-gallery/PhotoGallery';
import { photoGalleryMock } from '../../libs/constants/mock/photo-gallery.mock';
import { rowInfoMock } from '../../libs/constants/mock/row-info.mock';
import { RowMedia } from '../row-media/RowMedia';

export const DynamicInfo = () => {
  return (<>
      <article className={styles.wrapper}>
        {/*<News data={newsMock} />*/}
        {/*<Materials />*/}
        <PhotoGallery data={photoGalleryMock} />
      </article>

      {rowInfoMock.map((item, index) => {
        return <RowMedia info={item} key={index} download={true} />;
      })}
    </>

  );
};
