import React, {FC} from 'react';
import styles from './Article.module.scss';
import {IBlock} from "../../libs/types";

interface IProps {
    data: IBlock;
}

export const Article: FC<IProps> = ({data}) => {
    const {media, title, text, dateCreate, tags} = data.items[0];

    const images = media.images.i16x9.url

    return (
        <article className={styles.container}>
            <div className={styles.containerShadow}>
                <div className={styles.imageContainer}>
                    <img src={images} alt={title}/>
                </div>
            </div>

            <h2 className={styles.title}>{title}</h2>
            {/*<div className={styles.description} dangerouslySetInnerHTML={{__html: text}}/>*/}
            <div className={styles.bottomInfo}>
                <time dateTime={dateCreate} className={styles.data}>
                    {dateCreate}
                </time>
                <p className={styles.hashTag}>#{tags}</p>
            </div>
        </article>
    );
};
