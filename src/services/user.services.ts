// import { api } from './api.services';
// import { USER_LOGIN } from 'libs/constants/api';
// import { IUserLogin } from 'libs/types';
// import { AxiosError } from 'axios';
//
// export const loginUser = async (payload: IUserLogin) => {
//   const result: any = {
//     data: null,
//     error: null,
//   };
//   try {
//     const { data } = await api.post(USER_LOGIN, payload);
//     result.data = data;
//   } catch (e: unknown) {
//     if (e instanceof AxiosError) {
//       result.error = e.response?.data;
//     }
//   }
//   return result;
// };
