import {Metadata} from 'next';
import React from 'react';
import {initPageData} from "../services/init-page.services";
import {FullWidthBlock} from "../components/blocks-container/full-width-block/full-width-block";

export const metadata: Metadata = {
    title: 'Главная страница',
    openGraph: {
        title: 'Главная страница',
        description: '',
        // images: mainPhoto.src,
        images:
            'https://mcdn.tvzvezda.ru/storage/radiozvezda_images/2023/12/22/d6b3b37be6e74bf2b41fbbc2e160e3e9.jpg',
    },
};

export default async function HomePage() {

    const {FULL} = await initPageData()

    return (
        <>
            <FullWidthBlock fullWidthData={FULL}/>
            {/*<SliderLG data={sliderLgMock} />*/}
            {/*<Filter />*/}
            {/*<DynamicInfo />*/}
            {/*<Ticker />*/}
        </>
    );
}
