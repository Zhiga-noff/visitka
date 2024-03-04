import React, {FC} from 'react';
import Link from 'next/link';
import styles from '../News.module.scss';
import {clsx} from 'clsx';
import {IItem} from "libs/types/page-home.types";

interface IProps {
    data: IItem;
    activeClass?: string;
    index: number
}

export const NewsCard: FC<IProps> = ({data, activeClass, index}) => {
    const {url, media, title, dateCreate} = data;

    return (
        <Link href={url} className={clsx(styles.news, activeClass)}>
            <figure className={styles.figure}>
                <img src={media.images.i16x9.url} alt={title}/>
                <figcaption className="">
                    <div className="">
                        <h3 className={styles.title}>{title}</h3>
                        <div className="">
                            <time dateTime={dateCreate}>{dateCreate}</time>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </Link>
    );
};
