/* Константа со списком пунктов меню
   и ссылок на их страницы */

interface IMenu {
  title: string;
  link: string;
}

export const listNavHeader: IMenu[] = [
  {
    title: 'События',
    link: '/events',
  },
  {
    title: 'Ресурсы',
    link: '/resources',
  },
  {
    title: 'Контакты',
    link: '/contacts',
  },
] as const;

export const listNavFooterTop: IMenu[] = [
  {
    title: 'Контент',
    link: '/content',
  },
  {
    title: 'Ресурсы',
    link: '/resources',
  },
  {
    title: 'О нас',
    link: '/about-us',
  },
  {
    title: 'Контакты',
    link: '/contacts',
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
    link: '/activity',
  },
  {
    title: 'Проекты',
    link: '/projects',
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
