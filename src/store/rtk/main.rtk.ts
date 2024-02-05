import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IBlock, IItem } from 'libs/types/page-home.types';
import { api } from 'services/api.services';
import * as process from 'process';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fakeBaseQuery(),
  endpoints: ({ query }) => ({
    getItems: query<IItem[], IBlock & { page?: number }>({
      queryFn: async ({ page = 0, urlApi, lazy, items }) => {
        if (lazy) {
          const params = new URLSearchParams([['page', page.toString()]]);
          const { items } = await api
            .get<IBlock>(urlApi, { params })
            .then(({ data }) => data);
          if (items.length === 0) {
            return {
              error: {
                reason: 'Закончились посты',
              },
            };
          }
          return { data: items };
        }
        return { data: items };
      },
      merge: (currentCache, payload) => {
        currentCache.push(...payload);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      serializeQueryArgs: ({ queryArgs }) => queryArgs.urlApi,
    }),
  }),
});

export const { useGetItemsQuery } = mainApi;
