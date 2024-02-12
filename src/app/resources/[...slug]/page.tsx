import { Metadata } from 'next';
import React from 'react';
import { MainBlockResource } from '../../../components/main-block-resource/MainBlockResource';
import { News } from '../../../components/dynamic-information/news/News';
import { NotMaterial } from '../../../components/not-material/NotMaterial';

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
  // const newsData = newsMock;
  const newsData = null;

  return (
    <>
      <MainBlockResource typeBanner={params.slug[0]} />
      {newsData ? <News data={newsData} /> : <NotMaterial />}
    </>
  );
}
