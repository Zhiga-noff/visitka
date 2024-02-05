import axios from 'axios';
import * as process from 'process';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
