'use client';
import { IBlock } from 'libs/types';
import { useState } from 'react';
import { useGetItemsQuery } from 'store/rtk/main.rtk';

/* Данный хук возвращает результат запроса с API
* и принимает в себя аргумент объект, устанавливает там ключ
* page и после прокидывает все это в функцию useGetItemsQuery
*
* Хук возвращает нам полученный запрос в виде объека
* разобранного спред оператором, а так же с полем содержащим
* в себе функцию установления состояния setParams*/

export const useFetchItem = (data: IBlock) => {
  const [params, setParams] = useState({ ...data, page: 1 });

  const result = useGetItemsQuery(params);

  return { ...result, setParams } as const;
};
