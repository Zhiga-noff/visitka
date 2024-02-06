import { IMenu } from '../../types/menu.types';

export const listContacts: IMenu[] = [
  {
    title: 'Тел: +7 (495) 645-92-89',
    link: 'tel:74956459289',
  },
  {
    title: 'E-mail: news@zvezdamedia.ru',
    link: 'mailto:news@zvezdamedia.ru',
  },
  {
    title: 'Адрес: Россия, 129164,г. Москва, проспект Мира, д. 126',
    link: 'https://yandex.ru/maps/-/CDBy4BmF',
  },
] as const;
