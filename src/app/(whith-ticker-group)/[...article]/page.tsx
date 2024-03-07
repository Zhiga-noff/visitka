import {Metadata} from 'next';
import {Filter} from '../../../components/filter/Filter';
import React from 'react';
import {RowsMedia} from '../../../components/row-media/RowsMedia';
import {rowInfoMock} from '../../../libs/constants/mock/row-info.mock';
import {initPageData, initPageDataSlugElement} from '../../../services/init-page.services';
import {GET_VIDEO_NEWS} from "../../../libs/constants/api";
import {notFound} from "next/navigation";
import {FullWidthBlock} from "../../../components/blocks-container/full-width-block/full-width-block";
import {transformItems} from "../../../libs/utils/transform-items";

interface IProps {
    params: { article: string[] };
}

// export async function generateMetadata({params}: IProps): Promise<Metadata> {
//     const URL = `${GET_VIDEO_NEWS}${params.article.join('/')}`;
//     const apiData = await initPageDataSlugElement(URL);
//
//     if (apiData?.detail) {
//         return {
//             title: 'Страница не найдена',
//         };
//     }
//
//     const {items} = await initPageData(URL).then(({LEFT}) => LEFT[0]);
//     const {i16x7, i16x9, i4x3} = items[0].media.images;
//
//     return {
//         title: `Аудиокниги радио звезда - ${items[0].title}`,
//         openGraph: {
//             title: items[0].title,
//             description: items[0].anons,
//             images: i16x9 || i16x7 || i4x3,
//         },
//     };
// }

export default async function ArticlePage({params}) {
    const URL = `${GET_VIDEO_NEWS}${params.article[1]}`;

    const apiData = await initPageDataSlugElement(URL);

    if (apiData?.detail) {
        notFound();
    }
    const {LEFT, FULL} = transformItems(apiData)

    return (
        <>
            <Filter/>
            <FullWidthBlock fullWidthData={FULL}/>
            {/*<RowsMedia data={rowInfoMock} anons={'Читайте также'}/>*/}
        </>
    );
}
