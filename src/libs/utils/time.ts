export const getMinutes = (minutes: number) => {
  return new Date(new Date().getTime() + minutes * 60 * 1000);
};
export const toFormatDate = (date: string): string => {
  const newDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    formatMatcher: 'best fit',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: false,
  };

  return new Intl.DateTimeFormat('ru', options).format(newDate);
};

export function getCurrentDate() {
  return new Date().toLocaleDateString().split('.').reverse().join('-');
}
