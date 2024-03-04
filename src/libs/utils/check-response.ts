/* Выдает ошибку если респонс rejected */
export const checkResponse = <T>(res: Response): Promise<T> | never => {
  if (!res.ok) {
    // throw new Error(`Ошибка в запросе SSR, url - ${res.url}`);
  }
  return res.json();
};
