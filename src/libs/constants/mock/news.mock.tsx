import { IData } from '../../types/data.types';
import mock1 from '../../../assets/image/mock/mock-md-1.png';
import mock2 from '../../../assets/image/mock/mock-md-2.png';
import mock3 from '../../../assets/image/mock/mock-md-3.png';
import mock4 from '../../../assets/image/mock/mock-md-4.png';

export const newsMock: IData[] = [
  {
    title: 'Кузбасс на неделю стал главной театральной площадкой страны',
    date: '10 декабря 2023',
    url: '#',
    media: {
      images: {
        i16x9: mock1.src,
      },
    },
  },
  {
    title:
      'Премия «Русский Детектив» объявила лонг-лист и старт читательского голосования',
    date: '05 декабря 2023',
    url: '#',
    media: {
      images: {
        i16x9: mock2.src,
      },
    },
  },
  {
    title: 'В России стартует «Географический диктант - 2023»',
    date: '26 ноября 2023',
    url: '#',
    media: {
      images: {
        i16x9: mock3.src,
      },
    },
  },
  {
    title: 'Музыкальный фестиваль Валерия Халилова пройдёт в сорока пяти городах России',
    date: '20 ноября 2023',
    url: '#',
    media: {
      images: {
        i16x9: mock4.src,
      },
    },
  },
  {
    title: 'Музыкальный фестиваль Валерия Халилова пройдёт в сорока пяти городах России',
    date: '20 ноября 2023',
    url: '#',
    media: {
      images: {
        i16x9: mock4.src,
      },
    },
  },
] as const;
