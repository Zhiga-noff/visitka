import * as process from 'process';

const DEFAULT_URL = 'https://tvzvezda.ru/api/v1/video';

// export const BASE_URL = process.env.BACKEND_HOST
//   ? `${process.env.BACKEND_HOST}/api/v1/video`
//   : DEFAULT_URL;
export const BASE_URL =
    process.env.API_DOMAIN || process.env.NEXT_PUBLIC_API_DOMAIN;

export const GET_VIDEO_NEWS = '/news/' as const;
export const GET_LIVE_STREAM = '/live-stream/' as const;
export const GET_VIDEO_PROGRAMS = '/programs/' as const;
export const GET_FILMS_ONLINE = '/films-online/' as const;
export const GET_LAST_FILMS = '/last-activity-films-online/';
export const GET_VIDEO_PECENT = '/recent/' as const;
export const GET_EXPERT_OPINIONS = '/opinions/';
export const GET_SEARCH_VIDEO = '/search/' as const;
export const GET_ANONS_PROGRAM = '/program-guide/anons/' as const;
export const GET_ACTIVE_PROGRAMS = '/last-activity-programs/' as const;
export const GET_PROGRAM_GUIDE_CURRENT = '/program-guide/current/' as const;
export const GET_PERSONS = '/person/last-activity/' as const;
export const GET_PROPGRAMMS_PERSON = '/person/' as const;
export const GET_PERSON_REMEMBER = '/person/remember/' as const;
export const GET_TAGS_NEWS = '/tags/' as const;
export const GET_PROGRAM_GUIDE = '/program-guide/' as const;