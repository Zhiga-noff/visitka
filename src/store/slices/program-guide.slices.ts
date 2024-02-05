import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCurrentDate } from 'libs/utils/time';

import { RootState } from 'store';

const time = getCurrentDate();

interface IState {
  active: string;
  showMore: boolean;
  currentDate: string;
}

const initialState: IState = {
  active: time,
  showMore: false,
  currentDate: time,
};

export const programGuideSlices = createSlice({
  name: 'programGuide',
  initialState,
  reducers: {
    setActive: (state, { payload }: PayloadAction<string>) => {
      state.active = payload;
    },
    setShowMore: (state) => {
      state.showMore = true;
    },
  },
});

export const getProgramGuide = (store: RootState) => store.programGuide;

export const { setActive, setShowMore } = programGuideSlices.actions;
