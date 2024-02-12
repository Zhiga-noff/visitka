import React, { FC } from 'react';
import styles from './Article.module.scss';

interface IProps {
  articleData: {
    image: string;
    title: string;
    text: string;
    dataPublished: string;
    hashTag: string;
  };
}

export const Article: FC<IProps> = ({ articleData }) => {
  const { image, title, text, dataPublished, hashTag } = articleData;

  return (
    <article className={styles.container}>
      <div className={styles.containerShadow}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
        </div>
      </div>

      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: text }} />
      <div className={styles.bottomInfo}>
        <time dateTime={dataPublished} className={styles.data}>
          {dataPublished}
        </time>
        <p className={styles.hashTag}>#{hashTag}</p>
      </div>
    </article>
  );
};
