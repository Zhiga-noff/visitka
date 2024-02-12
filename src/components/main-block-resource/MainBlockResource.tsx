import React, { FC } from 'react';
import { Banner } from './banner/Banner';
import styles from './MainBlockResource.module.scss';
import { List } from '../ui/list/List';
import { listNavResource } from '../../libs/constants/nav';
import { clsx } from 'clsx';
import { listSocial } from '../../libs/constants/social';
import { StatisticsAndInformation } from './statistics-and-information/StatisticsAndInformation';

interface IProps {
  typeBanner: 'tvzvezda' | 'radio-zvezda' | 'ezhenedelnik' | 'zvezda-plus' | 'glavkino';
}

export const MainBlockResource: FC<IProps> = ({ typeBanner }) => {
  return (
    <section className={styles.container}>
      <nav>
        <List className={clsx(styles.nav, styles.active)} elements={listNavResource} />
      </nav>
      <Banner typeBanner={typeBanner} />
      <ul className={styles.icons}>
        {listSocial.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank">
              <img src={item.img} alt={item.title} />
            </a>
          </li>
        ))}
      </ul>
      <StatisticsAndInformation typeStatistics={typeBanner} />
    </section>
  );
};
