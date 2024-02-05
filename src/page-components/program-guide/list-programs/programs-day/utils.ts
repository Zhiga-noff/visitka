import { IProgramGuide } from 'libs/types/program-guide.types';

export const toFormatTime = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };

  return new Intl.DateTimeFormat('ru', options).format(new Date(date));
};

export const fillterCurrenDay = (propgrams: IProgramGuide[]) => {
  const res: IProgramGuide[] = [];
  let flag = true;
  for (const item of propgrams) {
    if (item.isActiv) {
      flag = false;
      res.push(item);
    } else {
      if (!flag) {
        res.push(item);
      }
    }
  }

  return res;
};
