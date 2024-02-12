import React from 'react';
import styles from '../SliderLG.module.scss';
import Link from 'next/link';

export const SlideElement = ({ url, media, title, dateNow }) => {
  return (
    <Link href={url}>
      <figure className={styles.figure}>
        <div className={styles.imageContainer}>
          <img src={media.images.i16x9} alt={title} />
        </div>
        <figcaption className={styles.figcaption}>
          <div className={styles.description}>
            <h2 className={styles.title}>{title}</h2>
            <div className="">
              <time dateTime={dateNow}>{dateNow}</time>
            </div>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};
