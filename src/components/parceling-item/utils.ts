import { BaseQueryFn, QueryDefinition } from '@reduxjs/toolkit/dist/query';
import { QueryStateSelector } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { IBlock, IItem } from 'libs/types/page-home.types';

/* Меняет функцию queryFn внутри miniApi - main.rtk.ts
* */
export const selectFromResult: QueryStateSelector<
  { list: IItem },
  QueryDefinition<IBlock & { page?: number | undefined }, BaseQueryFn, never, IItem[], 'mainApi'>
> = ({ data, ...rest }) => ({
  list: data ? data[0] : ({} as IItem),
  ...rest,
});
