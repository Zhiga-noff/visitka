import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface IState {
  email: null | string;
  isAuth: null | boolean;
}

const initialState: IState = {
  email: null,
  isAuth: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
      state.isAuth = true;
    },
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
    },
    authUser: (state) => {
      state.isAuth = true;
    },
  },
});

export const { setAuthUser, setEmail, authUser } = userSlice.actions;

export const getUser = (store: RootState) => store.user;
