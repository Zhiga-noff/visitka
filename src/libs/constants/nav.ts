/* Константа со списком пунктов меню
   и ссылок на их страницы */

export const listNav = [
    {
        title: 'Главное',
        link: '/',
    },
    {
        title: 'Программы',
        link: '/programs',
    },
    {
        title: 'Аудиокниги',
        link: '/audiobooks',
    },
    {
        title: 'Программа передач',
        link: '/program-guide',
    },
] as const;
