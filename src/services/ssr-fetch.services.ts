import {BASE_URL} from 'libs/constants/api';
import {checkResponse} from 'libs/utils/check-response';
import {notFound} from 'next/navigation';

/* init ?? { next: { revalidate: 180 } - используется для ревалидации
 * вставлять вместо cache */
/* Запрос передачи в аудиоплеере возвращает массив */
export const SSRFetch = async <T>(url: string, init?: RequestInit) => {
    try {
        return fetch(`${BASE_URL}${url}`, {cache: 'no-store'})
            .then((res) => checkResponse<T>(res))
            .then((res) => {
                return res
            });
    } catch {
        notFound();
    }
};
