/* Константы для связи с сервером */
import * as process from 'process';

export const BASE_URL = process.env.API_DOMAIN || process.env.NEXT_PUBLIC_API_DOMAIN;
// export const BASE_URL = 'http://10.30.2.114:8082/api/v1';

/*export const BASE_URL = 'http://10.157.0.121:8082/api/v1'
- выключенное апи для проверки SSR; */

export const GET_GALLARY = '/gallery/';
export const GET_BROADCASTS = '/broadcast/current-playing/';
export const GET_PROGRAMS = '/recommendation/';

//user
export const USER_LOGIN = '/access/login/';
export const USER_LOGOUT = '/access/logout/';
export const USER_REGISTRATION = '/access/registration/';
export const USER_TOKEN = '/access/refresh-token/';

//main

export const GET_PAGE_MAIN = '/page/';
export const GET_PAGE_PROGRAMS = '/page/programs/';
export const GET_SEARCH_PAGE = '/page/search/?q=';

export const GET_PAGE_AUDIOBOOKS = '/page/audiobooks/';
export const GET_PAGE_PROGRAM_GUIDE = '/page/program-guide/';
