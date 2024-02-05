import {BASE_URL} from 'libs/constants/api';
import {IPageHome} from 'libs/types';
import {checkResponse} from 'libs/utils/check-response';
import {transformItems} from 'libs/utils/transform-items';

/* Результат функции объект {LEFT:[],RIGHT:[]}
 * для более подробного понимания смотри функцию
 *  transformItems() */

/* { next: { revalidate: 180 } } - для добавления ревалидации
 *  добавить вместо cache в fetch */

export const initPageData = async (url: string) => {
    return fetch(`${BASE_URL}${url}`, {cache: 'no-store'})
        .then((res) => {
            return checkResponse<IPageHome>(res)
        })
        .then((res) => {
            return transformItems(res)
        });
};

export const initPageDataSlugElement = async (url: string) => {
    return fetch(`${BASE_URL}${url}`, {cache: 'no-store'})
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            return res
        });
};
