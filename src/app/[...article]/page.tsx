import { Metadata } from 'next';
import { Filter } from '../../components/filter/Filter';
import React from 'react';
import { Article } from '../../components/article/Article';
import { articleMock } from '../../libs/constants/mock/article.mock';
import { RowsMedia } from '../../components/row-media/RowsMedia';
import { rowInfoMock } from '../../libs/constants/mock/row-info.mock';

export const metadata: Metadata = {
  title: 'Динамическая страница статьи',
  openGraph: {
    title: 'Статья',
    description: '',
    // images: mainPhoto.src,
    images:
      'https://mcdn.tvzvezda.ru/storage/radiozvezda_images/2023/12/22/d6b3b37be6e74bf2b41fbbc2e160e3e9.jpg',
  },
};

export default async function ArticlePage() {
  return (
    <>
      <Filter />
      <Article articleData={articleMock} />
      <RowsMedia data={rowInfoMock} anons={'Читайте также'} />
    </>
  );
}
