import { Metadata } from 'next';
import { SliderLG } from '../components/slider-lg/SliderLG';
import { sliderLgMock } from '../libs/constants/mock/slider-lg.mock';
import { Filter } from '../components/filter/Filter';
import { DynamicInfo } from '../components/dynamic-information/DynamicInfo';

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
  return (
    <>
      <SliderLG data={sliderLgMock} />
      <Filter />
      <DynamicInfo />
    </>
  );
}
