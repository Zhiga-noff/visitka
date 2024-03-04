// Пока функция является бесполезной

import {BASE_URL} from "../libs/constants/api";
import {checkResponse} from "../libs/utils/check-response";
import {IPageHome} from "../libs/types";
import {transformItems} from "../libs/utils/transform-items";

export const initSearchPage = async (url: string) => {
    return fetch(`${BASE_URL}${url}`, {cache: 'no-store'})
        .then((res) => {
            return res
        })
        .then((res) => {
            return res
        });
};