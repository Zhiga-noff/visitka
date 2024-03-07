// 'use client';
import {IBlock} from 'libs/types';
import {FC} from 'react';

import {Article} from "./article/Article";
import {Filter} from "../filter/Filter";
import {InfinityListMd} from "./infinity-list-md/InfinityListMd";
import {SliderLG} from "./slider-lg/SliderLG";
import {InfinityListSM} from "./infinity-list-sm/InfinityListSm";

// const SliderMDLazy = dynamic(() => import('./slider-md').then((mod) => mod.SliderMD));
// const ListInfinityLazy = dynamic(() =>
//   import('./list-infinity').then((mod) => mod.ListInfinity),
// );
// const SliderSMLzy = dynamic(() => import('./slider-sm').then((mod) => mod.SliderSM));
// const ArticleLGLazy = dynamic(() => import('./article-lg').then((mod) => mod.ArticleLG));
// const ArticleMDLazy = dynamic(() => import('./article-md').then((mod) => mod.ArticleMD));
// const PlainHTMLLazy = dynamic(() => import('./plain-html').then((mod) => mod.PlainHTML));

interface IProps {
    data: IBlock;
}

export const ParcelingItem: FC<IProps> = ({data}) => {
    switch (data.templateKey) {
        /* Основной слайдер из больших слайдов картинок */
        case 'slider-lg': {
            return (<>
                <SliderLG data={data}/>
                <Filter/>
            </>)
        }
        /* Экран перечесления карточек в АУДИОКНИГАХ */
        case 'list-infinity-sm': {
            return <InfinityListSM data={data}/>;
        }
        case 'list-infinity-md': {
            return <InfinityListMd data={data}/>;
        }

        /* Визуально отображение оформление книги и ее ui */
        case 'article-lg': {
            return <Article data={data}/>;
        }
        case 'plain-html': {
            // return <PlainHTMLLazy data={data} />;
        }
    }
};
