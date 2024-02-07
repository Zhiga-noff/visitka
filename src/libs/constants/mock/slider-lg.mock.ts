import mock from 'assets/image/mock/mock-large.png';
import { IData } from '../../types/data.types';

export const sliderLgMock: IData[] = [
  {
    title:
      'В Санкт-Петербурге готовится к старту самый масштабный общественный арктический форум года',
    date: '10 декабря',
    url: '#',
    media: {
      images: {
        i16x9: mock.src,
      },
    },
  },
  {
    title:
      'В Санкт-Петербурге готовится к старту самый масштабный общественный арктический форум года',
    date: '10 декабря',
    url: '#',
    media: {
      images: {
        i16x9: mock.src,
      },
    },
  },
  {
    title:
      'В Санкт-Петербурге готовится к старту самый масштабный общественный арктический форум года',
    date: '10 декабря',
    url: '#',
    media: {
      images: {
        i16x9: mock.src,
      },
    },
  },
] as const;
