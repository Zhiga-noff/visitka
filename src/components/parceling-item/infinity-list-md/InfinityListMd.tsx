'use client'

import React, {FC, useEffect, useState} from 'react';
import styles from './InfinityListMd.module.scss';
import {News} from './news/News';
import InfiniteScroll from "react-infinite-scroller";
import {IBlock} from "libs/types";
import {useDataScroll} from "hooks/load-data.hook";
import {ButtonDownloadMore} from "components/ui/button-download-more/ButtonDownloadMore";
import {NotMaterial} from "../../not-material/NotMaterial";

interface IProps {
    data: IBlock
}

export const InfinityListMd: FC<IProps> = ({data: apiData}) => {
    const [showMore, setShowMore] = useState(true)
    const {urlApi, items} = apiData

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
            {data?.length<=0 && !data ? <NotMaterial></NotMaterial> :<section className={styles.wrapper} id="events">
                <div className={styles.container}>
                    <InfiniteScroll
                        threshold={450} // Расстояние до конца последнего элемента на котором начнется загрузка след компонентов
                        pageStart={1} // страница с которой происходит загрузка
                        hasMore={showMore} // Флаг разрешающий загрузку
                        loadMore={loadMore} // Функция загрузки новых компанентов
                    >
                        <News data={data}/>
                    </InfiniteScroll>

                    <ButtonDownloadMore clickFunction={showMoreInformation}/>
                </div>
            </section>}
        </>
    );
};
