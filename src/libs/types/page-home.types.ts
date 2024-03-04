import {IProps} from './banner.types';

export interface IPageHome {
    key: string;
    title: string;
    dateCreate: Date;
    dateUpdate: Date;
    urlApi: string;
    url: string;
    blocks: IBlock[];
}

export interface IInfinityResponse {
    order: number;
    slot: 'LEFT' | 'RIGHT' | 'FULL';
    templateKey:
        | 'slider-sm'
        | 'slider-md'
        | 'slider-lg'
        | 'block-sm'
        | 'list-infinity-md'
        | 'banner-lg'
        | 'article-lg'
        | 'article-md'
        | 'plain-html'

    options: {
        limit?: string;
    };
    props: IProps;
    title: string;
    dateCreate?: Date;
    dateUpdate?: Date;
    urlApi?: string;
    lazy: boolean;
    items: IItem[];
}

export interface IBlock {
    key: string;
    order: number;
    slot: 'LEFT' | 'RIGHT' | 'FULL';
    type: string;
    templateKey:
        | 'slider-sm'
        | 'slider-md'
        | 'slider-lg'
        | 'block-sm'
        | 'list-infinity-md'
        | 'banner-lg'
        | 'article-lg'
        | 'article-md'
        | 'plain-html'

    options: {
        limit?: string;
    };
    props: IProps;
    title: string;
    dateCreate?: Date;
    dateUpdate?: Date;
    urlApi: string;
    lazy: boolean;
    items: IItem[];
}

export interface IItem {
    title: string;
    url: string;
    tags: string[];
    dateCreate?: string;
    parentTitle?: string;
    urlApiChildren?: string | null;
    items?: IItem[];
    media: {
        images: {
            i16x9: IImagesData | null;
            i16x7: IImagesData | null;
            i4x3: IImagesData | null;
        };
        video?: IImagesData | null;
    };
    hasVideo?: boolean;
    text?: string;
    anons?: string;
}

export interface IImagesData {
    url: string;
    caption: string;
    copyright: string;
}

export interface ITransformData {
    LEFT: IBlock[];
    RIGHT: IBlock[];
    FULL: IBlock[];
}

export interface IParams {
    url: string;
    lazy: boolean;
    data: IBlock;
}
