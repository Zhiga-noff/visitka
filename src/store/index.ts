import { configureStore } from '@reduxjs/toolkit';
import { reducerSlices } from './slices';
import { userApi, mainApi } from './rtk';

export const store = configureStore({
  reducer: {
    ...reducerSlices,
    [userApi.reducerPath]: userApi.reducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDM) => getDM().concat([userApi.middleware, mainApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
