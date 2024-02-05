'use client';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';

interface IProps {
  children: React.ReactNode;
}

export const Providers: FC<IProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
