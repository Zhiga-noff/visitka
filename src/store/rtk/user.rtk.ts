// import { createApi } from '@reduxjs/toolkit/query/react';
// import { setAuthUser } from 'store/slices/user.slices';
// import { IUserLogin, IUserLoginResponse } from 'libs/types';
// // import { loginUser } from 'services/user.services';
// import cookie from 'js-cookie';
// import { getMinutes } from 'libs/utils/time';
// import { ACCESS_TOKEN, REFRESH_TOKEN, EMAIL_USER } from 'libs/constants/base';
// import { fetchBase } from 'libs/utils/fetch-base';
//
// export const userApi = createApi({
//   reducerPath: 'userApi',
//   baseQuery: fetchBase(),
//   endpoints: (builder) => ({
//     loginUser: builder.query<IUserLoginResponse, IUserLogin>({
//       queryFn: (arg) => {
//
//         return loginUser(arg);
//       },
//       async onQueryStarted(_, { queryFulfilled, dispatch }) {
//         try {
//           const { data } = await queryFulfilled;
//           const { email, accessToken, refreshToken } = data.result.loginUser;
//           dispatch(setAuthUser(email));
//           cookie.set(ACCESS_TOKEN, accessToken, {
//             secure: true,
//             sameSite: 'strict',
//             expires: getMinutes(2),
//           });
//           cookie.set(REFRESH_TOKEN, refreshToken, {
//             secure: true,
//             sameSite: 'strict',
//             expires: getMinutes(30),
//           });
//           cookie.set(EMAIL_USER, email, { expires: 365 });
//         } catch {}
//       },
//     }),
//   }),
// });
//
// export const { useLazyLoginUserQuery } = userApi;
