export const toFormatDate = (date: string) => {
  return new Intl.DateTimeFormat('ru', {
    day: 'numeric',
    weekday: 'short',
  }).format(new Date(date));
};
