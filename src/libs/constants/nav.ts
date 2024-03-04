/* Константа со списком пунктов меню
   и ссылок на их страницы */

import {IMenu} from '../types/mock-types/menu.types';

export const listNavHeader: IMenu[] = [
    {
        title: 'События',
        link: '/#events',
    },
    {
        title: 'Ресурсы',
        link: '/resources/tvzvezda',
    },
    {
        title: 'Контакты',
        link: '#contacts',
    },
] as const;

export const listNavFooterTop: IMenu[] = [
    {
        title: 'События',
        link: '/#events',
    },
    {
        title: 'Ресурсы',
        link: '/resources/tvzvezda',
    },
    {
        title: 'О нас',
        link: '/about-us',
    },
    {
        title: 'Контакты',
        link: '#contacts',
    },
    {
        title: 'Поиск',
        link: '/search',
    },
] as const;

export const listNavFooterBottom: IMenu[] = [
    {
        title: 'Анонсы',
        link: '/anons',
    },
    {
        title: 'Мероприятия',
        link: '/#activity',
    },
    {
        title: 'Проекты',
        link: '/#projects',
    },
    {
        title: 'Пресс-релизы',
        link: '/press-releases',
    },
    {
        title: 'Пост-релизы',
        link: '/post-releases',
    },
    {
        title: 'Фото',
        link: '/photo',
    },
] as const;

export const listNavResource: IMenu[] = [
    {
        title: 'Телеканал Звезда',
        link: '/resources/tvzvezda',
    },
    {
        title: 'Радио Звезда',
        link: '/resources/radio-zvezda',
    },
    {
        title: 'Еженедельник',
        link: '/resources/ezhenedelnik',
    },
    {
        title: 'Звезда Плюс',
        link: '/resources/zvezda-plus',
    },
    {
        title: 'Главкино',
        link: '/resources/glavkino',
    },
] as const;
