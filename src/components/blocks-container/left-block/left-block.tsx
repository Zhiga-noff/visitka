import React, { FC } from 'react';
import { IBlock } from '../../../libs/types';
import { ParcelingItem } from '../../parceling-item';

interface IProps {
  leftData: IBlock[];
}

export const LeftBlock: FC<IProps> = ({ leftData }) => {
  return (
    <>
      {leftData.map((item, index) => {
        return <ParcelingItem data={item} key={index} />;
      })}
    </>
  );
};
