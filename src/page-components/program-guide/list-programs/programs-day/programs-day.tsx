'use client';
import { CSSProperties, FC, Fragment, useEffect, useMemo, useState } from 'react';
import { Program } from './program';
import { IProgramGuide } from 'libs/types/program-guide.types';
import { Line } from 'components/ui';
import { useProgramQuide } from 'hooks';
import { fillterCurrenDay } from './utils';
import styles from './programs-day.module.scss';

interface IProps {
  propgrams: IProgramGuide[];
  date: string;
}
export const ProgramsDay: FC<IProps> = ({ propgrams, date }) => {
  const { showMore, currentDate } = useProgramQuide();

  const [style, setStyle] = useState<CSSProperties>({});

  const dataList = useMemo(
    () => (showMore ? propgrams : fillterCurrenDay(propgrams)),
    [propgrams, showMore]
  );

  useEffect(() => {
    if (showMore) {
      setStyle({ left: `-100vw` });
      setTimeout(() => setStyle({ left: `100vw`, opacity: 0 }), 300);
      setTimeout(() => setStyle({ left: 0, opacity: 1 }), 500);
    }
  }, [propgrams]);

  return (
    <section style={style} className={styles.section}>
      {dataList.map((item) => (
        <Fragment key={item.url}>
          <Line />
          <Program today={currentDate === date} data={item} />
        </Fragment>
      ))}
    </section>
  );
};
