import React, {FC} from 'react';
import {NewsCard} from './news-card/NewsCard';

import styles from './News.module.scss';
import {IItem} from "../../../libs/types/page-home.types";

interface IProps {
    data: IItem[];
}

export const News: FC<IProps> = ({data}) => {
    let index2 = 0;

    return (
        <>
            <section className={styles.container}>
                {data.map((item, index) => {
                    if (index2 + 1 === 1 || !((index2 + 1) % 5) || !((index2 + 1) % 4)) {
                        if (index2 + 1 === 5) {
                            index2 = 0;
                        }
                        index2++;
                        return <NewsCard data={item} key={index} activeClass={styles.itemLG} index={index}/>
                    }
                    index2++;

                    return <NewsCard data={item} key={index} index={index}/>;
                })}
            </section>
        </>
    );
};
