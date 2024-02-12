import React, { FC } from 'react';
import { bannerResource } from '../../../libs/constants/banner-resource';
import styles from '../MainBlockResource.module.scss';

interface IProps {
  typeBanner: 'tvzvezda' | 'radio-zvezda' | 'ezhenedelnik' | 'zvezda-plus' | 'glavkino';
}

export const Banner: FC<IProps> = ({ typeBanner }) => {
  return (
    <div className={styles.banner}>
      <img src={bannerResource[typeBanner]} alt="" />
    </div>
  );
};
