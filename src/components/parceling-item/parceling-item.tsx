// 'use client';
import {IBlock} from 'libs/types';
import {FC} from 'react';

import {Article} from "./article/Article";
import {Filter} from "../filter/Filter";
import {DynamicInfo} from "../dynamic-information/DynamicInfo";
import {SliderLG} from "./slider-lg/SliderLG";

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
            return <>
                <SliderLG data={data}/>
                <Filter/>
            </>;
        }
        /* Экран перечесления карточек в АУДИОКНИГАХ */
        case 'list-infinity-md': {
            return <DynamicInfo data={data}/>;
            // return <ListInfinityLazy data={data} notAImage={notAImage} />;
        }
        /* Визуально отображение оформление книги и ее ui */
        case 'article-lg': {
            // return <></>
            return <Article data={data}/>;
        }
        case 'plain-html': {
            // return <PlainHTMLLazy data={data} />;
        }
    }
};
