import React, { FC } from 'react';
import styles from './blocks-container.module.scss';
import { IBlock } from '../../libs/types';
import { LeftBlock } from './left-block/left-block';
import { RightBlock } from './right-block/right-block';
import { FullWidthBlock } from './full-width-block/full-width-block';

interface IProps {
  LEFT?: IBlock[];
  RIGHT?: IBlock[];
  FULL?: IBlock[];
}

export const BlocksContainer: FC<IProps> = (props) => {
  const {LEFT, RIGHT, FULL} = props

  return (
    <>
      {LEFT && (
        <article className={styles.container}>
          <LeftBlock leftData={LEFT} />
          <RightBlock rightData={RIGHT}/>
        </article>
      )}
      {FULL && <FullWidthBlock fullWidthData={FULL}/>}
    </>
  );
};
