import React, { FC } from 'react';
import { IBlock } from '../../../libs/types';
import { AdFox } from '../../ad-fox';

interface IProps {
  rightData: IBlock[];
}

export const RightBlock: FC<IProps> = ({ rightData }) => {
  return (
    <>
      <AdFox style={{ marginTop: 50 }} name={'nd1'} />
    </>
  );
};
