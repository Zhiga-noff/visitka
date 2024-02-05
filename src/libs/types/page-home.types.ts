import { IProps } from './banner.types';

export interface IPageHome {
  key: string;
  title: string;
  dateCreate: Date;
  dateUpdate: Date;
  urlApi: string;
  url: string;
  blocks: IBlock[];
}

export interface IBlock {
  key: string;
  order: number;
  slot: 'LEFT' | 'RIGHT';
  type: string;
  templateKey:
    | 'slider-sm'
    | 'slider-md'
    | 'slider-lg'
    | 'block-sm'
    | 'list-infinity'
    | 'banner-lg'
    | 'article-lg'
    | 'article-md'
    | 'plain-html';

  options: {
    limit?: string;
  };
  props: IProps;
  title: string;
  dateCreate: Date;
  dateUpdate: Date;
  urlApi: string;
  lazy: boolean;
  items: IItem[];
}

export interface IItem {
  title: string;
  url: string;
  tags: string[];
  dateCreate: string;
  parentTitle: string;
  urlApiPlaylist?: string | null;
  items?: IItem[];
  media: {
    audio?: string;
    images: {
      i16x9: string | undefined;
      i16x7: string;
      i4x3: null | string;
    };
    video?: null;
  };
  hasVideo?: boolean;
  text: string;
  anons: string;
}

export interface ITransformData {
  LEFT: IBlock[];
  RIGHT: IBlock[];
}

export interface IParams {
  url: string;
  lazy: boolean;
  data: IBlock;
}
