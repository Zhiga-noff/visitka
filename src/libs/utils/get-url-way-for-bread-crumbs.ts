/* Получает отдельный массив из частей
ссылок по которым передвигаемся в хлебных крошках */
export const getUrlWayForBreadCrumbs = (URL) => {
  return URL.replace('/page/', '').split('/');
};
