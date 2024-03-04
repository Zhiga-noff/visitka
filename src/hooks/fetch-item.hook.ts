/* Данный хук возвращает результат запроса с API
 * и принимает в себя аргумент объект, устанавливает там ключ
 * page и после прокидывает все это в функцию useGetItemsQuery
 *
 * Хук возвращает нам полученный запрос в виде объека
 * разобранного спред оператором, а так же с полем содержащим
 * в себе функцию установления состояния setParams*/

import {IData} from '../libs/types/mock-types/data.types';
import {useState} from 'react';

export const useFetchItem = (data: IData[]) => {
    const [params, setParams] = useState({...data, page: 1});
};
