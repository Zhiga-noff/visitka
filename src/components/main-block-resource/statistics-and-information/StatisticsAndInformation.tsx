import React, { FC } from 'react';
import {
  informationMock,
  statisticsMock,
} from '../../../libs/constants/mock/statistics.mock';
import styles from './StatisticsAndInformation.module.scss';

interface IProps {
  typeStatistics:
    | 'tvzvezda'
    | 'radio-zvezda'
    | 'ezhenedelnik'
    | 'zvezda-plus'
    | 'glavkino';
}

export const StatisticsAndInformation: FC<IProps> = ({ typeStatistics }) => {
  return (
    <section className={styles.container}>
      <div className={styles.statistic}>
        {statisticsMock[typeStatistics].map(
          ({ top, center, bottom, description }, index) => {
            return (
              <div className={styles.item} key={index}>
                <h3 className={styles.titleAndBox}>
                  {top && <span>{top}</span>}
                  {center}
                  <span>{bottom}</span>
                </h3>
                <p className={styles.description}>{description}</p>
              </div>
            );
          },
        )}
      </div>
      <p className={styles.information}>{informationMock[typeStatistics]}</p>
    </section>
  );
};
