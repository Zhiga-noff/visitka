'use client'

import React, {FC} from 'react';
import styles from '../SliderLG.module.scss';
import Link from 'next/link';
import {IImagesData} from "libs/types/page-home.types";
import {toFormatDate} from "../../../../libs/utils/time";

interface IProps {
    url: string,
    media: {
        images: {
            i16x9: IImagesData | null;
            i16x7: IImagesData | null;
            i4x3: IImagesData | null;
        };
        video?: IImagesData | null;
    };
    title: string
    dateNow: string
}

export const SlideElement: FC<IProps> = ({url, media, title, dateNow}) => {
    const formatDate = toFormatDate(dateNow)

    return (
        <Link href={url}>
            <figure className={styles.figure}>
                <div className={styles.imageContainer}>
                    <img src={media.images.i16x9.url} alt={title}/>
                </div>
                <figcaption className={styles.figcaption}>
                    <div className={styles.description}>
                        <h2 className={styles.title}>{title}</h2>
                        <div className="">
                            <time dateTime={dateNow}>{formatDate}</time>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </Link>
    );
};
