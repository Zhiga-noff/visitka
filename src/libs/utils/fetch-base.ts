import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { BASE_URL } from 'libs/constants/api';

export const fetchBase = () => {
  return fetchBaseQuery({ baseUrl: BASE_URL });
};
