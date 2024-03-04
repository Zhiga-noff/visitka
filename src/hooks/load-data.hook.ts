'use client'

import {useRef, useState} from 'react';
import {IItem} from "../libs/types/page-home.types";
import {getInfiniteNewsServices} from "../services/get-infinite-news.services";

interface IProps {
    url?: string;
    payload: IItem[];
    pageStart?: number;
}

export const useDataScroll = (props: IProps) => {
    const {url, payload, pageStart = 1} = props;

    /* Загружает новые новости когда доскроливаю до последней новости */
    const [hasMore, setHasMore] = useState(true);

    /* Данный референс устанавливает по какому пути
     * производить запрос информации с сервера */
    const {current: urlList} = useRef(url);
    const pageName = useRef(pageStart);

    /* Список загруженных новостей */
    const [data, setData] = useState<IItem[]>(payload);

    const loadMore = async () => {
        /* возвращает информацию спагинированной страницы */
        let result = await getInfiniteNewsServices(url, ++pageName.current)

        /* прекращает загружать новые посты */
        if (result.length === 0 || !result) {
            setHasMore(false);
        } else {
            setData((prev) => [...prev, ...result.items]);
        }
    };

    return {loadMore, data, hasMore};
};
