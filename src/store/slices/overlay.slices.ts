import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface IState {
  isOpen: boolean;
  currrenSection: string;
}

const initialState: IState = {
  isOpen: false,
  currrenSection: 'Радиоэфир',
};

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    openOverlay: (state) => {
      state.isOpen = true;
    },
    closeOverlay: (state) => {
      state.isOpen = false;
    },

    /* Устанавливает какую вкладку на всплывающем окне сделать активной */
    setCurrrenSection: (state, { payload }) => {
      state.currrenSection = payload;
    },
  },
});

export const { openOverlay, closeOverlay, setCurrrenSection } = overlaySlice.actions;

export const getOverlay = (store: RootState) => store.overlay;
