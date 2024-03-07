import { Metadata } from 'next';
import React from 'react';
import { MainBlockResource } from '../../../components/main-block-resource/MainBlockResource';

import { NotMaterial } from '../../../components/not-material/NotMaterial';
import {News} from "../../../components/parceling-item/infinity-list-md/news/News";
import {FullWidthBlock} from "../../../components/blocks-container/full-width-block/full-width-block";
import {initPageData} from "../../../services/init-page.services";

export const metadata: Metadata = {
  title: 'Ресурсы',
  openGraph: {
    title: 'Главная страница',
    description: '',
    // images: mainPhoto.src,
    images:
      'https://mcdn.tvzvezda.ru/storage/radiozvezda_images/2023/12/22/d6b3b37be6e74bf2b41fbbc2e160e3e9.jpg',
  },
};

export default async function ResourcePage({ params }) {
  const {FULL} = await initPageData()

  return (
    <>
      <MainBlockResource typeBanner={params.slug[0]} />
      <FullWidthBlock fullWidthData={FULL}/>
    </>
  );
}
