import { IDayGuide } from 'libs/types/program-guide.types';

const toFormatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat('ru', options).format(new Date(date)).slice(0, -3);
};

export const creteObjTimeFront = (data: IDayGuide[]): Record<string, string> => {
  return data.reduce((acum, { date }) => ({ ...acum, [date]: toFormatDate(date) }), {});
};
