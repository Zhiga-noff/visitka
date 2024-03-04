import {IPageHome} from 'libs/types';
import {ITransformData} from 'libs/types/page-home.types';

/* Полученную информацию данная функция
 * раскидывает в объекте по ключам LEFT и RIGHT
 * и возвращает его для отрисовки контента
 * на странице */

export const transformItems = (data: IPageHome) => {
    return data.blocks.reduce<ITransformData>(
        (acum, item) => {
            acum[item.slot].push(item);
            return acum;
        },
        {
            LEFT: [],
            RIGHT: [],
            FULL: [],
        },
    );
};
