'use client'

import React, {FC, useEffect, useState} from 'react';
import styles from './InfinityListSm.module.scss';
import InfiniteScroll from "react-infinite-scroller";
import {IBlock} from "libs/types";
import {useDataScroll} from "hooks/load-data.hook";
import {ButtonDownloadMore} from "components/ui/button-download-more/ButtonDownloadMore";
import {RowsMedia} from "../../row-media/RowsMedia";

interface IProps {
    data: IBlock
}

export const InfinityListSM: FC<IProps> = ({data: apiData}) => {
    const [showMore, setShowMore] = useState(true)
    const {urlApi, items, title} = apiData

    const {data, loadMore, hasMore} = useDataScroll({
        url: urlApi,
        payload: items,
    });


    useEffect(() => {
        if (!hasMore) {
            setShowMore(false)
            return
        }
        if (showMore) {
            setShowMore(false)
        }
    }, [showMore, hasMore])

    const showMoreInformation = () => {
        setShowMore(true)
    }

    return (
        <>
           <section className={styles.wrapper} id="events">
                <div className={styles.container}>
                    <InfiniteScroll
                        threshold={450} // Расстояние до конца последнего элемента на котором начнется загрузка след компонентов
                        pageStart={1} // страница с которой происходит загрузка
                        hasMore={showMore} // Флаг разрешающий загрузку
                        loadMore={loadMore} // Функция загрузки новых компанентов
                    >
                        <RowsMedia  items={data} title={title}/>
                    </InfiniteScroll>

                    <ButtonDownloadMore clickFunction={showMoreInformation}/>
                </div>
            </section>
        </>
    );
};
